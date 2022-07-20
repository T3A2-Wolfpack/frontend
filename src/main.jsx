import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'
import dotenv from 'dotenv'
import { Auth0Provider } from '@auth0/auth0-react'


ReactDOM.createRoot(document.getElementById('root')).render(
	<Auth0Provider
	domain={import.meta.env.VITE_AUTH0_DOMAIN}
	clientId={import.meta.env.VITE_AUTH0_CLIENTID}
	redirectUri={window.location.origin}
	>
		<App />
	</Auth0Provider>
)
