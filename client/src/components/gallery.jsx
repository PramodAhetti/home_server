import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Gallery() {
  const [images,setimages] = useState([]);
  const getimages=async () => {
    try {
      const response = await axios.get('http://localhost:9000/images');
      setimages([...images,response.data.img])
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };


  return (
    <div className='gallerybox'>
      <h1>Gallery</h1>
      {images.map((data, index) => (
        <img className='images' key={index} src={`data:image/jpeg;base64,${data}`} alt={`Image ${index}`} />
      ))}
      <button onClick={getimages}>here</button>
    </div>
  );
}
