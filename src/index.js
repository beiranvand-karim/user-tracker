import React from "react"
import ReactDOM from "react-dom"
import GlobalStyle from "./globalStyles"
import App from "./App"
import { Provider } from "react-redux"
import { Store } from "./Redux/RootReducer"

ReactDOM.render(
	<Provider store={Store}>
		<GlobalStyle />
		<App />
	</Provider>,
	document.getElementById("root")
)
