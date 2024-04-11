import React from 'react'
import {useState} from 'react'
import './nav.css'
import { CiHome } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><CiHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaRegUser /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdOutlineWorkOutline /></a>
      <a href='#education' onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}><FaUniversity /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FaPhoneSquare /></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><FaHandshake /></a>
    </nav>
  )
}

export default Nav