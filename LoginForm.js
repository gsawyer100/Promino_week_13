import React from 'react';

const LoginForm = () => {
  return (
    <div className="login-form">
      <h3 className="login-header">Log In</h3>
      <div className="input-container">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
      </div>
    </div>
  );
};
// console.log(LoginForm);
export default LoginForm;