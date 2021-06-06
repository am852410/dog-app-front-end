import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/create">Create Account</Link>
        </li>
      </ul>
    </nav>
  );
}
