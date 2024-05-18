import './Navbar.css'
import navlogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'
import {useNavigate} from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='navbar'>
        {/* <img src={navlogo} alt="" className="nav-logo" /> */}
        <h2 className='snapshop' onClick={()=> navigate('/')}>SNAPSHOP</h2>
        {/* <img src={navProfile} alt="" className="nav-profile" /> */}

    </div>
  )
}

export default Navbar