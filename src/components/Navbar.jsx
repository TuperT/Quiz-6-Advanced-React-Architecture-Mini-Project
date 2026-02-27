import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const { email, logout } = useAuth()
    const navigate = useNavigate()

    function handleLogout(){
        logout()
        navigate("/login")
    }

    return (
        <nav>
            <div id="navbar">
                <div id="nav-title">
                    OB<span id="inside-title">SID</span>IAN
                </div>
                <div id="nav">
                    <Link to="/product">PRODUCTS</Link>
                    <Link to="/checkout">CHECKOUT</Link>
                    <div id='info'>
                        <p id="nav-email">{email?.email}</p>
                        <button id="logout" onClick={handleLogout}>LOGOUT</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar