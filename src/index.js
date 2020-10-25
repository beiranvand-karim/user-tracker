import React from "react"
import ReactDOM from "react-dom"
import GlobalStyle from "./globalStyles"
import { Provider } from "react-redux"

import App from "./App"
import { Store } from "./redux/RootReducer"

ReactDOM.render(
	<Provider store={Store}>
		<GlobalStyle />
		<App />
	</Provider>,
	document.getElementById("root")
)
