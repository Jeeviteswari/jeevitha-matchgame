import './index.css'

const Navbar = () => (
  <>
    <nav className="navbar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        className="website-logo"
        alt="website logo"
      />
      <ul className="nav-menu">
        <li className="score-name">
          Score: <span className="score">0</span>
        </li>
        <li className="nav-menu">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            className="timer-image"
            alt="timer"
          />
          <p className="time">0 sec</p>
        </li>
      </ul>
    </nav>
  </>
)

export default Navbar
