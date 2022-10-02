import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import './index.css'

const LogoutButton = props => {
  const onLogoutButton = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <button onClick={onLogoutButton} className="btn-logout" type="button">
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
