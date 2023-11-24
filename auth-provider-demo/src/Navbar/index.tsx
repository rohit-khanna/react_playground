import "./index.css"
import SignInButton from '../SignInButton'



const NavBar = () => {
  return (
    <header className="header">
		<h1 className="logo">AuthProvider Demo</h1>
      <ul className="main-nav">
          <li><SignInButton/></li>
      </ul>
	</header> 
  )
}

export default NavBar