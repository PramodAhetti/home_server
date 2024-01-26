import React, { useState } from 'react';
import axios from 'axios';
import backend_url from './backend';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert('Please choose a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await axios.post(`${backend_url}/upload`, formData);
      console.log(response.data); // Log the response from the server
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <form action={backend_url+'/upload'} method="post" className="uploadbox debug" encType="multipart/form-data">
      <h2>Upload</h2>
      {/* Input field for file selection */}
      <label htmlFor="file" className="file-input-label">
        Choose a file
      </label>
      <input type="file" name="image" id="file" accept="image/*" onChange={handleFileChange} />
      <br />


      <button onClick={handleUpload} >
        Upload File
      </button>

    </form>
  );
};

export default FileUpload;
