import React from 'react'
import { Avatar, Dropdown, Menu } from 'antd'
import { Header } from 'antd/es/layout/layout.js'
import { config, local } from '../../services'
import { Link } from 'react-router-dom'
import { Icons } from '../../constant/icon.jsx'

const TheHeader = () => {

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
    <Header>
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