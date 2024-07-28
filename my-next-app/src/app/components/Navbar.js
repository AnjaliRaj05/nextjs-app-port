// src/components/Navbar.js
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-dark text-light text-center">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="/">
          <img
            src="https://statichunt.com/images/logo-light.svg"
            alt="Brand Logo"
            width="164"
            height="32"
            style={{ height: "32px" }}
          />
        </a>

        <div className="d-flex justify-content-center align-items-center flex-grow-1">
          <i className="fa-solid fa-laptop mx-2"></i>
          <i className="fa-solid fa-tablet mx-2"></i>
          <i className="fa-solid fa-mobile mx-2"></i>
        </div>

        <div className="d-flex justify-content-end align-items-center">
          <i className="fas fa-circle-info mx-2"></i>
          <i className="fa-brands fa-github mx-2"></i>
          <i className="fas fa-arrow-down mx-2"></i>
        </div>
      </div>
    </nav>
  );
}
