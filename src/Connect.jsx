import { useState, useRef } from "react";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const SOCIAL_LINKS = [
  {
    href: "mailto:Leilani.j.greer@gmail.com",
    icon: <MdEmail className="w-5 h-5" />,
    label: "Email"
  },
  {
    href: "https://linkedin.com/in/leilanigreer",
    icon: <FaLinkedin className="w-5 h-5" />,
    label: "LinkedIn"
  },
  {
    href: "https://github.com/leilanigreer",
    icon: <FaGithub className="w-5 h-5" />,
    label: "GitHub"
  }
];

export function Connect() {
  const [formData, setFormData] = useState({
    contact_name: "",
    contact_email: "",
    message: ""
  });

  const form = useRef(); 

  const [status, setStatus] = useState({ type: '', message: ''});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setStatus({ type: 'pending', message: 'Sending message...' });

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
        .then(
          () => {
            setStatus({ type: 'success', message: 'Message sent successfully!' });
            setFormData({ contact_name: '', contact_email: '', message: '' });
          },
          (error) => {
            setStatus({ 
              type: 'error', 
              message: 'Failed to send message. Please try again.' 
            });
            console.error('EmailJS Error:', error.text);
          }
        );
    };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto p-8">
        <section className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Lets Connect<span className="text-violet-500">.</span>
          </h2>
          
          <div className="space-y-8">
            <p className="text-lg leading-relaxed">
              I'm always interested in connecting with fellow developers and potential collaborators. 
              Whether you want to discuss a project, share ideas, or just chat about technology, 
              feel free to reach out!
            </p>

            <div className="flex flex-wrap gap-6">
              {SOCIAL_LINKS.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="flex items-center gap-2 text-violet-500 hover:text-purple-300 
                           transition-colors duration-300 hover:scale-105"
                >
                  {icon}
                  <span>{label}</span>
                </a>
              ))}
            </div>

            {/* Contact Form */}
            <form ref={form} onSubmit={handleSubmit} className="mt-12 space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="contact_name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="contact_name"
                  name="contact_name"
                  value={formData.contact_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent
                           transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact_email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="contact_email"
                  id="contact_email"
                  name="contact_email" 
                  value={formData.contact_email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent
                           transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent
                           transition-colors resize-none"
                />
              </div>
            </div>
            
            {/* Status message display */}
            {status.message && (
              <div className={`text-sm ${
                status.type === 'success' ? 'text-green-500' : 
                status.type === 'error' ? 'text-red-500' : 
                'text-violet-500'
              }`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-violet-500 text-white rounded-md
                       hover:bg-purple-600 transition-colors focus:outline-none focus:ring-2 
                       focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Send Message
            </button>
          </form>
          </div>
        </section>
      </div>
    </div>
  );
}