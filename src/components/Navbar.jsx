import React,{useState} from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import "../styles/Nav.css";
import Button from '@mui/material/Button';
import Logo from "../assets/websitelogo.png";


const data = [
  {
    link: "/",
    name: "HOME",
  },
  {
    link: "/journey",
    name: "THE JOURNEY",
  },
  {
    link: "/team",
    name: "TEAM",
  },
  {
    link: "/store",
    name: "STORE",
  },
  {
    link: "/contact",
    name: "CONTACT",
  },
];

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light py-0">
      <div className="container pt-4">
        <a className="" href="!#">
          <img
            src={Logo}
            alt="oops"
            height="50"
            width="50"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse dash" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 w-45">
            {data.map((value, index) => (
              <li className="nav-item mx-3" key={index}>
                <a className="nav-link text-dark" href={value.link} is-active="black">
                  {value.name}
                </a>
              </li>

            ))}
            <span className="nav-indicator"></span>
           
          </ul>
          <Button size="large" style={{color:"black" }} startIcon={<PersonOutlineIcon/>}>
            <p className="user">USER</p>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
