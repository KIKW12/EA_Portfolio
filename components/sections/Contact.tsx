// components/sections/Contact.tsx
import { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Github, Linkedin, Mail } from 'lucide-react';
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
    title: 'Portfolio Contact Form Message'
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.title.trim()) newErrors.title = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
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

      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        title: formData.title,
        send_date: new Date().toLocaleString()
      };

      const userResult = await emailjs.send(serviceId, templateId, templateParams);

      const adminParams = {
        ...templateParams,
        to_email: adminEmail
      };

      const adminResult = await emailjs.send(serviceId, notificationTemplateId, adminParams);

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
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-base">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info */}
          <div className="reveal-left">
            <p className="font-mono text-xs tracking-[0.3em] text-dim uppercase mb-4">
              05 — Contact
            </p>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Let&apos;s
              <br />
              <span className="text-accent">talk.</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-10 max-w-md">
              Have an idea, a project, or just want to say hello?
              I&apos;m always open to discussing new opportunities.
            </p>

            {/* Social Links */}
            <div className="space-y-4">
              <a
                href="mailto:hello@enayala.me"
                className="flex items-center gap-3 text-muted hover:text-accent transition-colors duration-300 cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-lg border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-mono text-sm">hello@enayala.me</span>
              </a>
              <a
                href="https://github.com/KIKW12"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted hover:text-accent transition-colors duration-300 cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-lg border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors">
                  <Github className="w-4 h-4" />
                </div>
                <span className="font-mono text-sm">github.com/KIKW12</span>
              </a>
              <a
                href="https://linkedin.com/in/enayala"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted hover:text-accent transition-colors duration-300 cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-lg border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span className="font-mono text-sm">linkedin.com/in/enayala</span>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal-right">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block font-mono text-xs text-dim mb-2 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`input-underline ${errors.name ? 'border-red-500' : ''}`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-2 text-xs text-red-400 font-mono">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block font-mono text-xs text-dim mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input-underline ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-2 text-xs text-red-400 font-mono">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="title" className="block font-mono text-xs text-dim mb-2 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`input-underline ${errors.title ? 'border-red-500' : ''}`}
                  placeholder="What's this about?"
                />
                {errors.title && (
                  <p className="mt-2 text-xs text-red-400 font-mono">{errors.title}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-xs text-dim mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`input-underline resize-none ${errors.message ? 'border-red-500' : ''}`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="mt-2 text-xs text-red-400 font-mono">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="scan-line relative w-full py-4 px-6 bg-accent text-base font-display font-semibold rounded-lg flex justify-center items-center gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 disabled:opacity-50 cursor-pointer"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="p-4 border border-green-500/20 bg-green-500/5 text-green-400 rounded-lg font-mono text-sm animate-slide-up">
                  Message sent successfully!
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 border border-red-500/20 bg-red-500/5 text-red-400 rounded-lg font-mono text-sm animate-slide-up">
                  {errorMessage || 'Failed to send message. Please try again.'}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};