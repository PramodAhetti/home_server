import React, { useEffect, useState } from 'react';
import backendurl from './backend';
import axios from 'axios';

export default function Gallery() {
  const [images,setimages] = useState([]);
  let index=images.length;
  const getimages=async () => {
       if(index!=null){
        try {
          console.log(index)
          const response = await axios.get(`${backendurl}/images?index=${index}`);
          setimages([...images,response.data.img])
          index++;
          
        } catch (error) {
          index=null;
          console.error('Error fetching images');
        }
       }else{
        console.log("No further images")
       }
  };
  
  const gallerybox = document.querySelector('.gallerybox');


 




  return (
    <div className='gallerybox'>
      <h1>Gallery</h1> 
      {images.map((data, index) => {
        return (
        
        <img className='images' key={index} src={`data:image/jpeg;base64,${data}`} alt={`Image ${index}`} />
      )})}
      <button id="imgbtn" onClick={getimages}>here</button>
      
    </div>
  );
}
