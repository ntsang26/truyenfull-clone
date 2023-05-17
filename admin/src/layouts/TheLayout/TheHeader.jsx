import React from 'react'
import { Avatar, Dropdown, Menu, theme } from 'antd'
import { Header } from 'antd/es/layout/layout.js'
import { config, local } from '../../services'
import { Link } from 'react-router-dom'
import { Icons } from '../../constant'

const TheHeader = () => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleConfirmLogout = () => {
    local.clear('session')
  }

  const menuOverlay = (
    <Menu>
      <Menu.Item icon={Icons.SettingOutlined} key='1'>
        <Link to='/profile'>Profile</Link>
      </Menu.Item>
      <Menu.Item icon={Icons.LogoutOutlined} key='2' onClick={handleConfirmLogout}>
        <div>Logout</div>
      </Menu.Item>
    </Menu>
  )
  return (
    <Header style={{ background: colorBgContainer }}>
      <div
        style={{
          position: 'fixed',
          right: '10px',
          display: 'flex',
        }}
      >
        <Dropdown overlay={menuOverlay} placement='topRight'>
          <Avatar
            className='dropdown-toggle mt-2'
            size={45}
            src={config.DEFAULT_AVATAR || ""}
            id='dropdownMenuButton'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
          />
        </Dropdown>
      </div>
    </Header>
  )
}

export default TheHeader