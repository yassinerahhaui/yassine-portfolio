import React, { useState } from 'react'
import './Navigation.scss'
import { IconButton } from '@mui/material'
import { MenuRounded as MenuRoundedIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion } from 'framer-motion'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const openMenu = () => setIsMenuOpen(true);

  const navLinks = [
    { href: '#header', label: 'Home' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <>
      <motion.nav 
        className="nav"
        initial={{y:'-100%'}}
        animate={{y: 0}}
        transition={{duration:.5}}
      >
        <div className="nav_start">
          <IconButton 
            aria-label="Toggle menu" 
            onClick={openMenu} 
            className='menu'
          >
            <MenuRoundedIcon />
          </IconButton>
          <img src="/logo.png" alt="YRCode logo" title="YRCode logo" className="logo" />
        </div>
        <ul className="nav_end">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} aria-label={`${link.label} navigation link`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div 
        className="nav-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={closeMenu}
        style={{ 
          pointerEvents: isMenuOpen ? 'auto' : 'none',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(0, 0, 0, 0.2)' 
        }}
      />

      {/* Mobile Menu */}
      <motion.div 
        className="navlist"
        initial={{ x: '-100%' }}
        animate={{ x: isMenuOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3 }}
      >
        <div className="navlist_header">
          <IconButton 
            aria-label="Close menu" 
            onClick={closeMenu}
            className='close-btn'
          >
            <CloseIcon />
          </IconButton>
        </div>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                onClick={closeMenu} 
                aria-label={`${link.label} navigation link`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  )
}

export default Navigation