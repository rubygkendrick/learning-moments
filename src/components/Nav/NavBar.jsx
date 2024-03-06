import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./NavBar.css"


export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <ul className="navbar">
            <li className="navbar-item">
                <Link to="/" className="navbar-link">All Posts</Link>
            </li>
            <li className="navbar-item">
                <Link to="/newPost" className="navbar-link">New Post</Link>
            </li>
            <div className="logout-profile-container">
                <li className="navbar-item-nested">
                    <Link to="/profile/:profileId" className="navbar-link"> Profile </Link>
                </li>
                {localStorage.getItem("learning_user") ? (
                    <li className="navbar-item-nested">
                        <Link
                            to=""
                            className="navbar-link"
                            onClick={() => {
                                localStorage.removeItem("learning_user")
                                navigate("/login", { replace: true })
                            }}
                        >
                            Logout
                        </Link>
                    </li>
                ) : (
                    ""
                )}
            </div>

        </ul>
    )
}