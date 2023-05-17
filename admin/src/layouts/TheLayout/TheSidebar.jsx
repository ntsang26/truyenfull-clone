import React, { useState } from 'react'
import { Icons, menus } from '../../constant'
import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider'
import { useHistory } from 'react-router-dom';

const items = () => {
  let parents = [],
    children = {}
  menus.map((mn, key) => {
    const item = {
      key: mn.key,
      label: mn.label,
      icon: Icons[mn.icon] || Icons['SettingOutlined'],
      index: mn.index || Number.MAX_SAFE_INTEGER,
    }
    if (mn.parent) {
      children[mn.parent]?.length
        ? children[mn.parent].push(item)
        : (children[mn.parent] = [item])
    } else {
      parents.push(item)
    }
  })

  parents.map((parent) => {
    if (children[parent.key]?.length) {
      parent.children = children[parent.key].sort(
        (st, nd) => parseFloat(st.index) - parseFloat(nd.index)
      )
    }
  })
  return parents.sort((st, nd) => parseFloat(st.index) - parseFloat(nd.index))
}

const TheSidebar = () => {
  const history = useHistory()
  const onClickMenus = (e) => {
    history.push(e.key)
  }
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      {!collapsed ? (
        <h2 style={{ color: "white", textAlign: "center", margin: "20px 0" }}>
          Truyen Full
        </h2>
      ) : (
        <div className="my-4" />
      )}
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items()}
        onClick={onClickMenus}
      />
    </Sider>
  )
}

export default TheSidebar