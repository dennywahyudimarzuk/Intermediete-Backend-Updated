const multer = require("multer");
const path = require("path");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    const newFileName = `${Date.now()}-${file.originalname}`;
    cb(null, newFileName);
  },
});

let limits = {
  fileSize: 5 * 1000 * 1000,
};

let fileFilter = (req, file, cb) => {
  const mime = /jpg|webp|gif|png|jpeg|svg/;
  const extName = mime.test(path.extname(file.originalname).toLowerCase());
  if (extName) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, limits, fileFilter });

module.exports = {
  uploadImage: (req, res) => {
    const uploadImage = upload.single("image");
    uploadImage(req, res, (err) => {
      if (!req.file) {
        res.status(400).send({
          succes: false,
          message: "file must image",
        });
      } else {
        if (!err) {
          res.status(201).send({
            success: true,
            image: `${process.env.BASE_URI}/images/${req.file.filename}`,
          });
        } else {
          res.status(400).send({
            error: err,
          });
        }
      }
    });
  },
};
// const uploadModel = require("../Models/Upload");
// const formResponse = require("../Helpers/FormResponse");

// module.exports = {
//     uploadImage: (req, res) => {
//         uploadModel
//             .uploadImage()
//             .then((data) => formResponse(data, res, 200))
//             .catch((err) => console.log(err));
//     },
// }
