import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { local } from '../../services'
import { Layout } from 'antd';
import TheSidebar from './TheSidebar.jsx';
import TheHeader from './TheHeader.jsx';
import TheContent from './TheContent';

const TheLayout = () => {
  const history = useHistory()

  useEffect(() => {
    fetchData()
  }, [history])

  const fetchData = () => {
    try {
      let session = local.get('session')
      if (!session) {
        history.replace('/login')
        return
      }
    } catch (error) {
      console.error(error)
      history.replace('/login')
    }
  }
  return (
    <Layout style={{minHeight: '100vh'}}>
      <TheSidebar />
      <Layout>
        <TheHeader />
        <Layout style={{ padding: '0 24px 24px' }}>
          <TheContent />
        </Layout>
      </Layout>
    </Layout>
  )
}

export default TheLayout
