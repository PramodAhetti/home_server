// about.js

import React from 'react';

export default function About() {
  return (
    <div className='aboutbar debug'>
      <br></br>
      <br></br>
      <br></br>
      <h1>About</h1>
      <br></br>
      <p>
        Welcome to the Home Server application. This application allows you to
        manage and control various aspects of your home server.
      </p>
      <p>
        Whether you are hosting a personal website, managing file storage,
        running home automation, or simply exploring the world of server
        management, our Home Server app provides an intuitive interface for
        these tasks.
      </p>
      <h3>Main Features:</h3>
      <ul>
        <li>File Management: Easily organize and access your files.</li>
        <li>Web Hosting: Host your websites with ease.</li>
        <li>Automation Control: Manage your smart home devices.</li>
        {/* Add more features as needed */}
      </ul>
      <p>
        Thank you for choosing Home Server to power your home server experience.
        If you have any questions or feedback, feel free to reach out to our
        support team.
      </p>
    </div>
  );
}
