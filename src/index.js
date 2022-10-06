import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import ReactDOM from "react-dom/client";
import App from "./App";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

let refreshDom = () => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <Provider store={store}>
                    <App/>
                </Provider>
            </React.StrictMode>
        </BrowserRouter>
    );
}

refreshDom()

store.subscribe(()=> {
    refreshDom();
});

// reportWebVitals();
