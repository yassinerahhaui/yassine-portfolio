import React, { useRef, useEffect } from 'react'
import './About.scss'
import { motion, useInView, useAnimation } from 'framer-motion'

const animation = {
  start: { x: '-100%' },
  animate: { x: 0, transition: { duration: 1 } }
}

const About = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  useEffect(() => {
    if (isInView) {
      controls.start('animate')
    }
  }, [controls, isInView])
  return (
    <motion.div
      className='about'
      id='about'
      ref={ref}
      initial='start'
      animate={controls}
      variants={animation}
    >
      <h2 className="about_title">About Me</h2>
      <p className="about_paragraph">
        I'm a full-stack developer with experience in HTML5, CSS3, SCSS, JavaScript, React, Python, and Django, as well as UX/UI design. Additionally, I have a strong understanding of SEO and how it impacts website performance. My focus is on delivering high-quality, scalable, and maintainable code while providing exceptional user experiences. Let's work together to bring your vision to life!
      </p>
    </motion.div>
  )
}

export default About