import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Footer = () => {

  return (
    <footer>
      
      <nav>
        <div class="img"><img src="/src/assets/logo3.png" /></div>
        <div class="footer">
            <p>The social network for roots and shoots. Document your journey from seed to harvest.</p>
        </div>
        <div class="img"><img src="/src/assets/social.png" /></div>
       <p class="footer">&copy; 2026 Sow & Tell Inc. <br /> Built for the dirt-under-fingernails crowd.</p>
      </nav>
    </footer>
  );
};

export default Footer;
