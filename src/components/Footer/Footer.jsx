import React from 'react'
import './Footer.scss'
import { Facebook, Instagram, Twitter, GitHub, Email, WhatsApp } from '@mui/icons-material';

const Footer = () => {
  return (
    <div className="footer" id='footer'>
      <div className="footer_logo">
        <img src="/logo.png" alt="yrcode logo" />
      </div>
      <div className="footer_start">
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#contact">Contact Me</a></li>
          <li><a href="#skills">My Skills</a></li>
          <li><a href="#projects">My Projects</a></li>
        </ul>
      </div>
      <div className="footer_middle">
        <ul>
          <li><span><WhatsApp /> </span>: +212 630034545</li>
          <li><span><Email /> </span>: yassinerahhaoui12@gmail.com</li>
        </ul>
      </div>
      <div className="footer_end">
        <form>
          <label htmlFor="newslettre">Newsletter:</label>
          <input type="email" name="newslettre" id="newslettre" placeholder='Enter Your Email...' />
          <button type="submit"><Email /></button>
        </form>
      </div>
      <div className="footer_social-media">
        <ul>
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook /></a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram /></a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter /></a></li>
          <li><a href="https://github.com/yassinerahhaui" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHub /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer