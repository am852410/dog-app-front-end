import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, NavItem, Dropdown, Icon, Divider } from "react-materialize";
export default function NavBar() {
  return (
    <Navbar
      alignLinks="right"
      brand={
        <Link className="brand-logo" to="/">
          Peacemaker Dog Walking
        </Link>
      }
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}
    >
      <Dropdown
        id="Dropdown_6"
        options={{
          alignment: "left",
          autoTrigger: true,
          closeOnClick: true,
          constrainWidth: true,
          container: null,
          coverTrigger: true,
          hover: false,
          inDuration: 150,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 250
        }}
        trigger={
          <a href="#!">
            More Info <Icon right>arrow_drop_down</Icon>
          </a>
        }
      >
        <Link to="/create">Create Account</Link>
        <Link to="/login">Log In</Link>
      </Dropdown>
    </Navbar>
  );
}
//
// export default function NavBar() {
//   return (
//     <div>
//       <ul id="dropdown1" className="dropdown-content">
//         <li>
//           <a href="#!">one</a>
//         </li>
//         <li>
//           <a href="#!">two</a>
//         </li>
//         <li className="divider" />
//         <li>
//           <a href="#!">three</a>
//         </li>
//       </ul>
//       <nav>
//         <div className="nav-wrapper">
//           <a href="#!" className="brand-logo">
//             Peacemaker Dog Walking Company
//           </a>
//           <ul className="right hide-on-med-and-down">
//             <li>
//               <a href="sass.html">Sass</a>
//             </li>
//             <li>
//               <a href="badges.html">Components</a>
//             </li>
//
//             <li>
//               <a className="dropdown-trigger" href="#!" data-target="dropdown1">
//                 Dropdown<i className="material-icons right">arrow_drop_down</i>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// }
