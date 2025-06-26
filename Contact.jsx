import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the data to your backend or service like EmailJS or Formspree
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Contact</h2>
      {submitted ? (
        <div className="bg-green-100 text-green-700 p-4 rounded text-center">
          Thank you for contacting us! We'll get back to you shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">Send Message</button>
        </form>
      )}
    </div>
  );
}

export default Contact;
