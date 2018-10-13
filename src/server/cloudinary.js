const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// console.log(process.env.CLOUD_NAME);
// console.log(process.env.API_KEY);
// console.log(process.env.API_SECRET);

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "assets",
  allowedFormats: ["jpg", "jpeg", "png"],
  transformation: [{width: 300, height: 300, crop: "limit"}]
});

const parser = multer({ storage: storage });

module.exports = parser;