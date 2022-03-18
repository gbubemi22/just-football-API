const path = require('path')
const fs = require('fs')
const multer = require('multer')
const Grid = require('gridfs-stream')
const {GridFSBucket} = require('multer-gridfs-storage')

  
const storage = new GridFSBucket({
    url: process.env.MONGO_URI,
    file: (req, file) => {
        const match = ["image/png", "image/jpeg"]

        if (match.indextOf(file.minetype)=== -1) {
            const filename = `${Date.now()}-any-name-${file.originalname}`;
           return filename 
        }
        return {
            bucketName: "photos",
            filename:`${Date.now()}-any-name-${file.originalname}`
        }
    }
})

module.exports = multer({storage})



// const storage = multer.diskStorage({
//     destination: function (req, file, cb ) {
//         cb(null, './uploads/')
//     },
//     filename: function (req, file, cb){
    
//      cb(null, Date.now().toISOString() + file.originalname)
//     }
// });

// const fileFilter = (req, file, cb) => {
//     if(file.minetype === 'image/jpeg' || file.minetype === 'image/png') {
//     cb(null, true)
// } else {
//     cb(null,false)
//   };
// }

// const upload = multer({
//     storage: storage,
// limits: {
//     fileSize: 1024 * 1024 * 5
// },
//  fileFilter: fileFilter
// });


module.exports = upload;