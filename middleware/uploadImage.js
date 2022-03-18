const path = require('path')
const fs = require('fs')
const multer = require('multer')
  




const storage = multer.diskStorage({
    destination: function (req, file, cb ) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb){
    
     cb(null, Date.now().toISOString() + file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    if(file.minetype === 'image/jpeg' || file.minetype === 'image/png') {
    cb(null, true)
} else {
    cb(null,false)
  };
}

const upload = multer({
    storage: storage,
limits: {
    fileSize: 1024 * 1024 * 5
},
 fileFilter: fileFilter
});


module.exports = upload;