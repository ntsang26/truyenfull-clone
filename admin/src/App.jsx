import React, { lazy, Suspense } from "react"
import Loader from "./utils/Loader"
import {HashRouter, Route, Switch} from "react-router-dom"

const Login = lazy(() => import("./pages/Login"))
const TheLayout = lazy(() => import("./layouts/TheLayout"))

function App() {
	return (
		<HashRouter>
			<Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/login" exact name="Login Page" render={(props) => <Login {...props} />} />
          <Route path="/" exact name="Home Page" render={(props) => <TheLayout {...props} />} />
				</Switch>
			</Suspense>
		</HashRouter>
	)
}

export default App
