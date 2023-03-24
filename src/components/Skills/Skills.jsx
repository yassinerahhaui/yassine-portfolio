import React, { useRef, useEffect } from 'react'
import './Skills.scss'
import { data } from '../../data/skills'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const squareVariants = {
    visible: { opacity: 1,scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 }
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const data_mapping = (x) => {
    return x.map(el => {
      return <div key={el.id} className="skills_box_item" title={el.name}>
        <div className="skills_box_item_name">{el.name}</div>
        <div className="skills_box_item_num-box">
          <motion.div
            className="skills_box_item_num-box_per"
            initial={{ width: 0 }}
            animate={{ width: `${el.num}%` }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>
        <div className="skills_box_item_num-per">{el.num}%</div>
      </div>
    })
  }
  return (
    <div className='skills' id='skills'>
      <h2 className='skills_title'>Professional Skills</h2>
      <div className="skills_box_items">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={squareVariants}
          className="skills_box"
        >
          <h3 className="skills_box_title">Frontend</h3>
          {data_mapping(data.frontend)}
        </motion.div>
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={squareVariants}
          className="skills_box"
        >
          <h3 className="skills_box_title">Backend</h3>
          {data_mapping(data.backend)}
        </motion.div>
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={squareVariants}
          className="skills_box other"
        >
          <h3 className="skills_box_title">Other</h3>
          {data_mapping(data.other)}
        </motion.div>
      </div>
    </div>
  )
}

export default Skills