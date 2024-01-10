const express = require('express')
const multer  = require('multer')
const cors=require('cors')
const upload = multer({ dest: 'uploads/' ,filename:'pramod'})
const fs=require('fs')
const app = express()



const path=require('path');

app.use(cors());
app.get('/home',(req,res)=>{
        res.sendFile(path.join(__dirname ,"index.html"));
})

function imageToDataUrl(imagePath) {
    const imageBuffer = fs.readFileSync(imagePath);
    const base64Image = imageBuffer.toString('base64');
    const mimeType = path.extname(imagePath).replace('.', '');
    return `data:image/${mimeType};base64,${base64Image}`;
  }
app.get('/images',(req,res)=>{
  // fs.readdir('/Users/prajwalahetti/pramod/project/home_server/uploads',(err,files)=>{
  //   files.forEach((file)=>{
  //        fs.readFile(`/Users/prajwalahetti/pramod/project/home_server/uploads/${file}`,'utf8',(err,data)=>{
  //         console.log(data)
  //        })
  //   })
  // })
  fs.readFile(`/Users/prajwalahetti/pramod/project/home_server/uploads/1d8d1103d7d72164f1136f1d84793d9b`,(err,data)=>{
    const buffer=data.toString('base64');
    res.send({img:buffer});
   })
})

app.get('/gallery',(req,res)=>{

    const folderPath = './uploads';

    fs.readdir(folderPath, (err, files) => {
        if (err) {
          console.error(err);
          return;
        }
      
        const imagesHtml = files.map(file => {
            const imageUrl = imageToDataUrl(path.join(folderPath, file));
            return `<img src="${imageUrl}" alt="${file}" class="gallery-image">`;
          }).join('');
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
  res.send("saved image")
})

app.listen(9000,()=>{
    console.log('server started')
})