import React from 'react';

import { useState } from 'react';

const Divider = () => {
  return (
    <hr
      style={{ borderTop: "1px solid #96b747" }}
    ></hr>
  );
};

const AboutPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('contact form data: ' + formData)
  };

  return (
    <div>
      <div className="container">
        <img src="/src/assets/logo1.png" alt='Sow & Tell Logo' />
      </div>
      <div className="container">
        <img src="/src/assets/1.png" alt="Sow & Tell" />
        <h1>About Sow & Tell</h1>
        <h2>Our Roots</h2>
        <p>Every great garden starts with a single seed and a lot of patience. <strong>Sow & Tell</strong> was born out of a simple observation: the digital world is noisy, but the garden is a place of quiet, steady growth. We wanted to create a digital "allotment" - a dedicated space where gardeners can share their daily wins, their seasonal struggles, and everything in between without the clutter of traditional social media.</p>
      </div>
      <Divider />
      <div className="container">
      <h2>The Social Network for Roots and Shoots</h2>
      <p>Why "Roots and Shoots"? Because gardening is about more than just the harvest.</p>
      <ul>
        <li><strong>The Roots</strong>: Our community's foundation. It's the deep knowledge of the soil, the shared wisdom of elders, and the stability of a group that supports one another through every frost and heatwave.</li>
        <li><strong>The Shoots</strong>: The new growth. It's the daily updates, the first sprout of a seedling, and the quick "micro-blog" moments that document life as it happens in the garden.</li>
      </ul>
      <img src="/src/assets/2.png" alt="Sow & Tell" />
      </div>
      <Divider />
      <div className="container">
        <img src="/src/assets/3.png" alt="Sow & Tell" />
      <h2>Why Sow & Tell?</h2>
      <p>In a world of "instant" everything, we celebrate the slow. * Micro-Blogging, Macro-Impact: Share your interaction with a pest you can't identify or your morning harvest. Small updates keep our community connected in real-time.</p>
      <ul>
        <li><strong>Hyper-Local Wisdom</strong>: Connect with neighbors in your specific Grow Zone. Because a gardener in a desert faces different challenges than one in a rainforest.</li>
        <li><strong>A Sanctuary for Nature</strong>: No doom-scrolling. Just bloom-scrolling. We've built a platform that prioritizes plant health, sustainable practices, and the joy of the outdoors.</li>
      </ul>
      </div>
      <Divider />
      <div className="container">
      <h2>Join the Growth</h2>
      We believe that when we share what we sow, we all grow together. It's time to tell your garden's story.
      <button>Dig In - Create Your Profile</button>
      </div>
      <Divider />
      <div className="form-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Leave your message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </label>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};


export default AboutPage;
