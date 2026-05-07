// components/sections/Contact.tsx
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
  title: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  title?: string;
}

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    title: 'Portfolio Contact Form Message',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) emailjs.init(publicKey);
  }, []);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Required';
    if (!formData.email.trim()) newErrors.email = 'Required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.title.trim()) newErrors.title = 'Required';
    if (!formData.message.trim()) newErrors.message = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStatus('loading');
    setErrorMessage('');
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const notificationTemplateId = process.env.NEXT_PUBLIC_EMAILJS_NOTIFICATION_TEMPLATE_ID;
      const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
      if (!serviceId || !templateId || !notificationTemplateId || !adminEmail) {
        throw new Error('EmailJS configuration is missing');
      }
      const params = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        title: formData.title,
        send_date: new Date().toLocaleString(),
      };
      const userResult = await emailjs.send(serviceId, templateId, params);
      const adminResult = await emailjs.send(serviceId, notificationTemplateId, { ...params, to_email: adminEmail });
      if (userResult.text !== 'OK' || adminResult.text !== 'OK') {
        throw new Error('Failed to send one or more messages');
      }
      setStatus('success');
      setFormData({ name: '', email: '', message: '', title: 'Portfolio Contact Form Message' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  return (
    <section id="contact" className="relative py-32 md:py-40 bg-ink">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 md:col-span-4">
            <p className="index-marker reveal-fade">04 / Contact</p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="font-display text-bone text-[clamp(3rem,8vw,7rem)] leading-[0.92] tracking-editorial font-light reveal-up">
              Let&apos;s build <span className="serif-italic text-sage">something</span>
              <br />
              worth remembering.
            </h2>
            <p className="mt-6 text-ash text-base md:text-lg leading-relaxed max-w-2xl reveal-up">
              Quietly available for collaborations, research, and serious side projects.
              I read every message.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          {/* Left: directory */}
          <div className="col-span-12 lg:col-span-4 lg:pr-8">
            <p className="eyebrow mb-6 reveal-fade">Directory</p>
            <ul className="space-y-5">
              <li className="reveal-up">
                <p className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-graphite">Email</p>
                <a href="mailto:enayala12@gmail.com" className="link-editorial font-display text-xl md:text-2xl tracking-editorial">
                  enayala12@gmail.com
                </a>
              </li>
              <li className="reveal-up">
                <p className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-graphite">GitHub</p>
                <a href="https://github.com/KIKW12" target="_blank" rel="noopener noreferrer" className="link-editorial font-display text-xl md:text-2xl tracking-editorial">
                  github.com/KIKW12
                </a>
              </li>
              <li className="reveal-up">
                <p className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-graphite">LinkedIn</p>
                <a href="https://linkedin.com/in/enayala" target="_blank" rel="noopener noreferrer" className="link-editorial font-display text-xl md:text-2xl tracking-editorial">
                  linkedin.com/in/enayala
                </a>
              </li>
              <li className="reveal-up pt-4 border-t border-hairline">
                <p className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-graphite">Based in</p>
                <p className="font-display text-bone text-xl md:text-2xl tracking-editorial">Querétaro, Mexico</p>
              </li>
            </ul>
          </div>

          {/* Right: form */}
          <div className="col-span-12 lg:col-span-8 lg:pl-8 lg:border-l lg:border-hairline">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-9">
              <div className="grid md:grid-cols-2 gap-6 md:gap-10">
                <div className="reveal-up">
                  <label htmlFor="name" className="field-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`field ${errors.name ? '!border-red-400/60' : ''}`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="mt-2 text-xs text-red-400 font-mono">{errors.name}</p>}
                </div>
                <div className="reveal-up">
                  <label htmlFor="email" className="field-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`field ${errors.email ? '!border-red-400/60' : ''}`}
                    placeholder="you@somewhere.com"
                  />
                  {errors.email && <p className="mt-2 text-xs text-red-400 font-mono">{errors.email}</p>}
                </div>
              </div>

              <div className="reveal-up">
                <label htmlFor="title" className="field-label">Subject</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`field ${errors.title ? '!border-red-400/60' : ''}`}
                  placeholder="What this is about"
                />
                {errors.title && <p className="mt-2 text-xs text-red-400 font-mono">{errors.title}</p>}
              </div>

              <div className="reveal-up">
                <label htmlFor="message" className="field-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`field resize-none ${errors.message ? '!border-red-400/60' : ''}`}
                  placeholder="Tell me about it. Long-form welcome."
                />
                {errors.message && <p className="mt-2 text-xs text-red-400 font-mono">{errors.message}</p>}
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4 reveal-up">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="inline-block w-3 h-3 border border-obsidian border-t-transparent rounded-full animate-spin" />
                      Sending
                    </>
                  ) : (
                    <>
                      Send message <span aria-hidden>→</span>
                    </>
                  )}
                </button>
                <p className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-graphite">
                  Reply within 48h
                </p>
              </div>

              {status === 'success' && (
                <p className="font-mono text-xs tracking-wide text-sage pt-2 border-t border-sage/20">
                  ✓ Message received. I&apos;ll be in touch shortly.
                </p>
              )}
              {status === 'error' && (
                <p className="font-mono text-xs tracking-wide text-red-400 pt-2 border-t border-red-400/20">
                  ✗ {errorMessage || 'Something went wrong. Please try again.'}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
