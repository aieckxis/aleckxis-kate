'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const payload = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" name="name" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email Address" required />
      </div>
      <textarea name="message" placeholder="Your Message..." rows="6" required></textarea>
      <button type="submit" className="btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'sent' && (
        <p style={{ color: '#ff4d94', marginTop: '10px' }}>
          Message sent! I&apos;ll get back to you soon.
        </p>
      )}
      {status === 'error' && (
        <p style={{ color: '#ff4d94', marginTop: '10px' }}>
          Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  );
}
