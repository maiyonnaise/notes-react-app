import { NavLink, useNavigate } from "react-router-dom"
//styles 
import "./Navbar.css"
//
import useTheme from '../hooks/useTheme'



export default function Navbar() {
  const navigate = useNavigate()
  const { color } = useTheme()

  return (
    <div className="navbar">
      <nav
        style={{ backgroundColor: color }}
      >
        <h1 onClick={() => navigate('/')}>Notes App</h1>

        <NavLink to="create">Create Note</NavLink>
      </nav>
    </div>
  )
}
