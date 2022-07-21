import ReactLoading from 'react-loading'

// Loading animation
export const Loading = ({ type, color }) => (
    <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
)
