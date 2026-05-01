'use client'

import { FormEvent, useState } from 'react'
import styles from './BetaModal.module.css'

interface BetaModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BetaModal({ isOpen, onClose }: BetaModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ success: boolean; text: string } | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setMessage({ success: true, text: 'Welcome to the beta! Check your email for next steps.' })
        ;(e.target as HTMLFormElement).reset()
        setTimeout(() => {
          onClose()
          setMessage(null)
        }, 3000)
      } else {
        setMessage({ success: false, text: data.message || 'Something went wrong. Please try again.' })
      }
    } catch (error) {
      setMessage({ success: false, text: 'Error submitting form. Please try again.' })
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose}>×</button>
        <h2>Join Beta</h2>
        <p>Get early access to Cucumbu and be among the first to transform your workspace with autonomous AI.</p>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name *</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address *</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="company">Company/Organization</label>
            <input 
              type="text" 
              id="company" 
              name="company" 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="role">Your Role</label>
            <input 
              type="text" 
              id="role" 
              name="role" 
              placeholder="e.g., Product Manager, Developer, CEO"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Tell us about your use case (optional)</label>
            <textarea 
              id="message" 
              name="message" 
              rows={4}
            />
          </div>
          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isLoading}
          >
            {isLoading ? 'Joining...' : 'Join Beta'}
          </button>
        </form>

        {message && (
          <div className={`${styles.formMessage} ${message.success ? styles.success : styles.error}`}>
            {message.text}
          </div>
        )}
      </div>
    </div>
  )
}
