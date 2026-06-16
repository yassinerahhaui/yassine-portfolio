import React, { useEffect, useRef, useState } from 'react'
import './Contact.scss'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Button, CircularProgress } from '@mui/material';
import { Send as SendIcon, Close as CloseIcon, CheckCircle as CheckCircleIcon } from '@mui/icons-material';

const animation = {
  start: { x: '-100%', opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 1 } }
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [messageType, setMessageType] = useState('success');
  const [errors, setErrors] = useState({});

  const ref = useRef(null)
  const controls = useAnimation()
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start('animate')
    }
  }, [controls, isInView])

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const contact_me = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch('https://ayoub-dr.herokuapp.com/add/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullname: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        })
      });

      if (response.ok) {
        setMessageType('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setMessageType('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessageType('error');
    } finally {
      setIsLoading(false);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 5000);
    }
  };

  return (
    <motion.div 
      className='contact-me' 
      id='contact'
      ref={ref}
      initial='start'
      animate={controls}
      variants={animation}
    >
      <h2 className='contact-me_title'>Get In Touch</h2>
      <p className='contact-me_subtitle'>I'd love to hear from you. Send me a message!</p>

      <div className="contact-me_form">
        <form onSubmit={contact_me}>
          <div className="name-mail">
            <div className="contact-me_form_item">
              <label htmlFor="fullname">Full Name</label>
              <input 
                type="text" 
                name="name" 
                required 
                placeholder='Your name...' 
                value={formData.name} 
                onChange={handleChange}
                id="fullname"
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="contact-me_form_item">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                name="email" 
                required 
                placeholder='your.email@example.com' 
                value={formData.email} 
                onChange={handleChange}
                id="email"
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
          </div>

          <div className="contact-me_form_item">
            <label htmlFor="subject">Subject</label>
            <input 
              type="text" 
              name="subject" 
              required 
              placeholder='What is this about?' 
              value={formData.subject} 
              onChange={handleChange}
              id="subject"
              className={errors.subject ? 'error' : ''}
            />
            {errors.subject && <span className="error-message">{errors.subject}</span>}
          </div>

          <div className="contact-me_form_item">
            <label htmlFor="message">Message</label>
            <textarea 
              name="message" 
              required 
              placeholder='Your message...' 
              value={formData.message} 
              onChange={handleChange}
              id="message"
              className={errors.message ? 'error' : ''}
              rows="5"
            />
            {errors.message && <span className="error-message">{errors.message}</span>}
            <span className="char-count">{formData.message.length}/500</span>
          </div>

          <Button 
            type="submit"
            variant="contained" 
            className="submit-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <CircularProgress size={20} sx={{ mr: 1 }} />
                Sending...
              </>
            ) : (
              <>
                <SendIcon sx={{ mr: 1 }} />
                Send Message
              </>
            )}
          </Button>
        </form>
      </div>

      {/* Success/Error Message */}
      {showMessage && (
        <motion.div 
          className={`msg msg-${messageType}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <div className="msg_content">
            {messageType === 'success' ? (
              <>
                <CheckCircleIcon className="msg_icon" />
                <p>Thank you for your message! I'll get back to you soon.</p>
              </>
            ) : (
              <>
                <CloseIcon className="msg_icon" />
                <p>Failed to send message. Please try again later.</p>
              </>
            )}
            <button 
              className="msg_close" 
              onClick={() => setShowMessage(false)}
              aria-label="Close message"
            >
              <CloseIcon />
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Contact