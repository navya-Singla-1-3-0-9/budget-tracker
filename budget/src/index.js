import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import { Provider } from "./context/context";
import './css/index.css'

import {SpeechProvider} from '@speechly/react-client'

ReactDOM.render(
    <SpeechProvider appId="52ab5551-370e-45a0-bf87-bf6768284de8" language="en-US">
    <Provider>
        <App/>
    </Provider>
    </SpeechProvider>,
    document.getElementById('root')
)