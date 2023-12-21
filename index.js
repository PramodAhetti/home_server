const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const fs=require('fs')
const app = express()

const path=require('path');


app.get('/uploads',(req,res)=>{
        res.sendFile(path.join(__dirname ,"index.html"));
})

function imageToDataUrl(imagePath) {
    const imageBuffer = fs.readFileSync(imagePath);
    const base64Image = imageBuffer.toString('base64');
    const mimeType = path.extname(imagePath).replace('.', '');
    return `data:image/${mimeType};base64,${base64Image}`;
  }

app.get('/home',(req,res)=>{

    const folderPath = '/home/root-haier/pramod/home_server/uploads';

    fs.readdir(folderPath, (err, files) => {
        if (err) {
          console.error(err);
          return;
        }
      
        const imagesHtml = files.map(file => {
            const imageUrl = imageToDataUrl(path.join(folderPath, file));
            return `<img src="${imageUrl}" alt="${file}" class="gallery-image">`;
          }).join('');
          console.log(typeof(imagesHtml))
          const htmlResponse = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Images Gallery</title>
              <style>
                body {
                  background-color: #1a1a1a;
                  color: #ffffff;
                  font-family: 'Arial', sans-serif;
                  margin: 0;
                  padding: 0;
                }
          
                h2 {
                  color: #00ccff;
                }
          
                .gallery-image {
                  width: 100px;
                  height: 200px;
                  margin: 10px;
                  border-radius: 8px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
                }
              </style>
            </head>
            <body>
              <h2>Images Gallery</h2>
              <div id="imageGallery">${imagesHtml}</div>
            </body>
            </html>
          `;
          
          res.send(htmlResponse);
          
        });
      });


app.post('/upload', upload.array('image'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(req.file);  

  res.send("saved image")
})

app.listen(5000,()=>{
    console.log('server started')
})