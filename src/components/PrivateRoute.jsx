import React from 'react'
import { Link } from 'react-router-dom'
import { withAuthenticationRequired } from "@auth0/auth0-react"
import { Loading } from './Loading'

export const PrivateRoute = ({ element, ...args}) => (

			<Link
				to={withAuthenticationRequired(element, {
					onRedirecting: () => <Loading type="cylon" color="red" />,
				})}
				{...args}
			/>

	)




