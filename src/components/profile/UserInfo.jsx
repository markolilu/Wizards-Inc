import React, { useState } from 'react';

const UserInfo = ({ currentUser }) => {
  const [formData, setFormData] = useState({
    firstName: currentUser.first_name,
    lastName: currentUser.last_name,
    email: currentUser.email,
    password: currentUser.password,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Updating User:", formData);
    alert("Profile info saved to the roots!");
  };

  return (
    <section>
      <h2>Account Settings</h2>
      
      <div>
        <label>Username</label>
        <p>@{currentUser.username}</p>
      </div>

      <form onSubmit={handleUpdate} style={styles.form}>
        <div>
          <div>
            <label>First Name</label>
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
          </div>
        </div>

        <div>
          <label>Email Address</label>
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
        </div>

        <div>
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div className="center">
        <button type="submit">Save Changes</button>
        </div>
      </form>
    </section>
  );
};

export default UserInfo;