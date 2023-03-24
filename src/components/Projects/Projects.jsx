import React, { useEffect, useRef } from 'react'
import './Projects.scss'
import { motion, useAnimation, useInView } from 'framer-motion'
import { data } from '../../data/projects'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const animation = { 
  start: { opacity: 0 },
  anime: { opacity: 1, transition: { duration: 2 } }
}
const Projects = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  let position = 0
  const left = () => {
    const box = document.querySelector('.slider_box')
    const itemWidth = document.querySelectorAll('.slider_box_item')[0].scrollWidth + 20
    let maxwidth = ((itemWidth * 19) - window.innerWidth)
    if (position >= -itemWidth) {
      position = -maxwidth
      box.style.right = `${position}px`
    } else {
      position += itemWidth
      box.style.left = `${position}px`
    }
  }
  const right = () => {
    const box = document.querySelector('.slider_box')
    const itemWidth = document.querySelectorAll('.slider_box_item')[0].scrollWidth + 20
    let maxwidth = ((itemWidth * 19) - window.innerWidth)
    if (position <= -maxwidth) {
      position = 0
      box.style.left = `${position}px`
    } else {
      position -= itemWidth
      box.style.left = `${position}px`
    }
  }
  useEffect(() => {
    if (isInView) {
      controls.start("anime")
    }
  }, [controls, isInView])
  return (
    <div className='projects' id='projects'>
      <h2 className='projects_title'>My Best Project</h2>
      <motion.div
        className="slider"
        ref={ref}
        initial='start'
        animate={controls}
        variants={animation}
      >
        <div className="slider_box">
          {data.map(el => {

            return <a key={el.id} className='slider_box_item' target='_blank' href={el.link}>
              <img src={el.image} alt="" className="slider_box_item_img" />
              <h4 className="slider_box_item_caption">{el.title}</h4>
            </a>
          })}
        </div>
        <KeyboardArrowLeftIcon
          className='left-btn' 
          onClick={()=> left()}
        />
        <KeyboardArrowRightIcon 
          className='right-btn' 
          onClick={()=> right()}
        />
      </motion.div>
    </div>
  )
}

export default Projects