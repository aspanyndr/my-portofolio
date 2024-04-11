import React from 'react'
import { CiLinkedin } from "react-icons/ci"
import { FaGithub } from "react-icons/fa"

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href='https://www.linkedin.com/in/muhammad-aspan-y-96311a1a3/' rel="noreferrer noopener" target='_blank'><CiLinkedin /></a>
        <a href='https://github.com/aspanyndr' rel="noreferrer noopener" target='_blank'><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials