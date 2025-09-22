import React from "react";
// import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    // NOTE: we use "class" in HTML but React is quirky so we have to 
    // change all the "class" to "className"
    <>
      <head>
          <title>Ivan Alvarez's Website</title>
      </head>
      <body>
        <nav className="navbar">
              <h1 className="logo"> 
                <Link href="/">
                  Ivan Alvarez
                </Link>
              </h1>
              <ul className="nav-list">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/portfolio">Portfolio</Link></li>
                  <li><Link href="/resume">Resume</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
              </ul>
          </nav>
      </body>
    </>
  );
}