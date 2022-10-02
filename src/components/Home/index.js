import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const Home = () => (
  <>
    <div className="home-container-main">
      <Header />
    </div>
    <div className="home-container">
      <h1>Home Route</h1>
      <LogoutButton />
    </div>
  </>
)
export default Home
