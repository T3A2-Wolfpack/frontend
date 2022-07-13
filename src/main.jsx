import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'
import dotenv from 'dotenv'
import { Auth0Provider } from '@auth0/auth0-react'


ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
    domain='hwhiskey.us.auth0.com'
    clientId='BMVN9yi0xleyokxgbOmFpbpI7EX9nUq4'
    redirectUri={window.location.origin}
    >
        <App />
    </Auth0Provider>
)
