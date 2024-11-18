"use client"
import Link from "next/link";
import {Button} from "./ui/button";

import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
              <h1>Mon <span className="text-accent ">.</span></h1>
          </Link>

          {/* desktop Nav */}
          <div className="hidden xl:flex items-center gap-8 ">
            <Nav />
            <Link href="">
              <Button
               onClick={() => window.open("/ARABIT_RESUME.pdf", "_blank")}
               className="#">Hire me</Button>
            </Link>
          </div>

          {/* Mobile Nav */}
          <div className="xl:hidden">
              <MobileNav/>
          </div>
      </div>
    </header>
  
}

export default Header
