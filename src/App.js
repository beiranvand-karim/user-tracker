import React from "react"
import { StylesProvider } from "@material-ui/core/styles"
import { Provider } from "react-redux"

import NavBar from "./components/Navbar"
import { store } from "./state/store"
import GlobalStyle from "./globalStyles"

const App = () => {
	return (
		<Provider store={store}>
			<GlobalStyle />
			<StylesProvider injectFirst>
				<NavBar />
			</StylesProvider>
		</Provider>
	)
}

export default App
