import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

/* Create a store and connect with a reducer. Use the store with the Provider tag */

// Redux dependencies 

/* for the central store */
import { createStore } from "redux";

/* uses the context technique ... provider-consumer | useContext */
import { Provider } from "react-redux";

/* reducer -- the switcher | selector */
import personReducer from "./store/reducer/personReducer";

// To be used as a value for the property of store, see below.
const store = createStore(personReducer); 

ReactDOM.render(
	/* Do not forget to add store={store} */
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
