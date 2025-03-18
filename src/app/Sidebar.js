import Image from "next/image";
import Link from "next/link";
import computerIcon from "../assets/computer.png";
import profileIcon from "../assets/profile.png";
import contactIcon from "../assets/contact.png";
import projectIcon from "../assets/robot.png";
import blogIcon from "../assets/browser.png";


export default function Sidebar () {
  return (
    <div className="sidebar">
        <Link href="/" className="sidebar-icon">
          <Image src={computerIcon} alt="Home" />
          <span>Home</span>
        </Link>
        <Link href="/projects" className="sidebar-icon">
          <Image src={projectIcon} alt="Work" />
          <span>Projects</span>
        </Link>
        <Link href="/blog" className="sidebar-icon">
          <Image src={blogIcon} alt="Blog" />
          <span>Blog</span>
        </Link>
        <Link href="/about" className="sidebar-icon">
          <Image src={profileIcon} alt="About" />
          <span>About</span>
        </Link>
        <Link href="/contact" className="sidebar-icon">
          <Image src={contactIcon} alt="Contact" />
          <span>Contact</span>
        </Link>
      </div>
  )
}