import React from 'react'

const Dashboard = React.lazy(() => import('./features/Dashboard'))

const routes = {}
routes.theLayout = [
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
]

export default routes
