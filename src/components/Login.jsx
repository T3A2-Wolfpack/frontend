import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0()

    return <button 
    onClick={() => loginWithRedirect()}
    className="bg-amber-500 p-1 m-1 rounded-full text-white hover:text-green-400 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
    >Log In</button>
}

export default LoginButton