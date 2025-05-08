// components/sections/Contact.tsx
import { useState, useRef, useEffect } from 'react';
import { Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
  title: string; // Added title field for email template
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
    title: 'Portfolio Contact Form Message' // Default subject/title
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    // Use environment variable for EmailJS public key
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

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.title.trim()) {
      newErrors.title = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // Using EmailJS to send the email directly from the client with environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const notificationTemplateId = process.env.NEXT_PUBLIC_EMAILJS_NOTIFICATION_TEMPLATE_ID;
      const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
      
      if (!serviceId || !templateId || !notificationTemplateId || !adminEmail) {
        throw new Error('EmailJS configuration is missing');
      }
      
      // Prepare template parameters (match the template variables)
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        title: formData.title,
        send_date: new Date().toLocaleString() // Format: MM/DD/YYYY, HH:MM:SS AM/PM
      };
      
      // Send confirmation email to the user
      const userResult = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );

      // Send notification email to admin (you)
      const adminParams = {
        ...templateParams,
        to_email: adminEmail  // Make sure this matches the variable in your notification template
      };
      
      const adminResult = await emailjs.send(
        serviceId,
        notificationTemplateId,
        adminParams
      );

      if (userResult.text !== 'OK' || adminResult.text !== 'OK') {
        throw new Error('Failed to send one or more messages');
      }

      setStatus('success');
      setFormData({ 
        name: '', 
        email: '', 
        message: '',
        title: 'Portfolio Contact Form Message' // Reset with default title
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-secondary-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-12 text-center">
          Get in Touch
        </h2>
        <div className="max-w-2xl mx-auto">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
            <div>
              <label 
                htmlFor="name"
                className="block text-secondary-700 dark:text-secondary-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.name 
                    ? 'border-red-500 dark:border-red-400' 
                    : 'border-secondary-200 dark:border-secondary-700'
                } bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.name}</p>
              )}
            </div>

            <div>
              <label 
                htmlFor="email"
                className="block text-secondary-700 dark:text-secondary-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.email 
                    ? 'border-red-500 dark:border-red-400' 
                    : 'border-secondary-200 dark:border-secondary-700'
                } bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.email}</p>
              )}
            </div>

            <div>
              <label 
                htmlFor="title"
                className="block text-secondary-700 dark:text-secondary-300 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.title 
                    ? 'border-red-500 dark:border-red-400' 
                    : 'border-secondary-200 dark:border-secondary-700'
                } bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors`}
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.title}</p>
              )}
            </div>

            <div>
              <label 
                htmlFor="message"
                className="block text-secondary-700 dark:text-secondary-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.message 
                    ? 'border-red-500 dark:border-red-400' 
                    : 'border-secondary-200 dark:border-secondary-700'
                } bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3 px-6 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg flex justify-center items-center gap-2 transition-colors disabled:bg-primary-400 dark:disabled:bg-primary-800"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
            
            {status === 'success' && (
              <div className="p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg animate-slide-up">
                Message sent successfully!
              </div>
            )}
            
            {status === 'error' && (
              <div className="p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg animate-slide-up">
                {errorMessage || 'Failed to send message. Please try again.'}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};