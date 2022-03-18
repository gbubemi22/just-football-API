const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const path = require('path')



const uploadImage = async (req, res) => {
    if (!req.files) {
      throw new CustomError.BadRequestError('No File Uploaded');
    }
    const logo = req.files.image;
  
    if (!logo.mimetype.startsWith('image')) {
      throw new CustomError.BadRequestError('Please Upload Image');
    }
  
    const maxSize = 1024 * 1024* 5;
  
    if (logo.size > maxSize) {
      throw new CustomError.BadRequestError(
        'Please upload image smaller than 5MB'
      );
    }
  
    const imagePath = path.join(
      __dirname,
      '../public/uploads/' + `${logo.name}`
    );
    await logo.mv(imagePath);
    res.status(StatusCodes.OK).json({ image: `/uploads/${logo.name}` });
  };

  module.exports = uploadImage;