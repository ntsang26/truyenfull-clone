import React, { Suspense } from 'react'
import { Content } from 'antd/es/layout/layout.js'
import Loader from '../../../utils/Loader'
import routes from '../../../routes'
import { menus } from '../../../constant'

const ROUTES_LAYOUT = routes.theLayout

const TheContent = () => {

  const workspace = menus
  console.log(workspace)

  return (
    <Content
      style={{
        background: 'white',
        padding: 24,
        marginTop: 24
      }}
    >
      <Suspense fallback={<Loader />}>

      </Suspense>
    </Content>
  )
}

export default TheContent

const findRouteComponent = (workspace) => {
  let routeFound = ROUTES_LAYOUT.find(
    (route) => route.path.toLowerCase() === workspace.path.toLowerCase()
  )

  return routeFound.component
}