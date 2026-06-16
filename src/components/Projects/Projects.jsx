import React, { useRef, useEffect } from 'react'
import './Projects.scss'
import { motion, useAnimation, useInView } from 'framer-motion'
import { data } from '../../data/projects'
import { KeyboardArrowLeft as KeyboardArrowLeftIcon, KeyboardArrowRight as KeyboardArrowRightIcon } from '@mui/icons-material'

const animation = { 
  start: { opacity: 0 },
  anime: { opacity: 1, transition: { duration: 1.5 } }
}

const Projects = () => {
  const sliderRef = useRef(null);
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("anime")
    }
  }, [controls, isInView])

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      const firstCard = container.firstChild;
      const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 484; // 24px is gap/margin
      const scrollAmount = window.innerWidth < 768 ? cardWidth : cardWidth * 2;

      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className='projects' id='projects'>
      <h2 className='projects_title'>My Best Projects</h2>
      <motion.div
        className="slider"
        ref={ref}
        initial='start'
        animate={controls}
        variants={animation}
      >
        <div 
          className="slider_box"
          ref={sliderRef}
        >
          {data.map(el => (
            <motion.div 
              key={el.id} 
              className='slider_box_item' 
              whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img src={el.image} alt={el.title} className="slider_box_item_img" />
              <h4 className="slider_box_item_caption">{el.title}</h4>
            </motion.div>
          ))}
        </div>

        <button 
          className='slider_btn left-btn' 
          onClick={() => handleScroll('left')}
          aria-label="Previous project"
          title="Previous project"
        >
          <KeyboardArrowLeftIcon />
        </button>

        <button 
          className='slider_btn right-btn' 
          onClick={() => handleScroll('right')}
          aria-label="Next project"
          title="Next project"
        >
          <KeyboardArrowRightIcon />
        </button>
      </motion.div>
    </div>
  )
}

export default Projects