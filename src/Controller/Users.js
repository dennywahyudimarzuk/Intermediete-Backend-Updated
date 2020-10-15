const usersModel = require("../Models/Users");
const formResponse = require("../Helpers/FormResponse");

module.exports = {

  getAllUsers: (req, res) => {
    usersModel
      .getAllUsers()
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },
  getUserId: (req, res) => {
    usersModel
      .getUserId(req.params)
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },

  deleteUser: (req, res) => {
    const { id } = req.params;
    usersModel
      .deleteUser(id)
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },

  postUser: (req, res) => {
    const {
      firstname,
      lastname,
      email,
      phone,
      balance,
      password,
      pin,
      verified,
      photo,
    } = req.body;
    if (
      firstname &&
      lastname &&
      email &&
      phone &&
      balance &&
      password &&
      pin &&
      verified &&
      photo
    ) {
      let body = {
        firstname,
        lastname,
        email,
        phone,
        balance,
        password,
        pin,
        verified,
        photo,
      };
      usersModel
        .postUser(body)
        .then((data) => formResponse(data, res, 200))
        .catch((err) => console.log(err));
    } else {
      formResponse(res, 401, "fill all fields");
    }
  },
};
  // patchUser: (req, res) => {
  //   const { id } = req.params;
  //   const {
  //     firstname = "",
  //     lastname = "",
  //     email = "",
  //     phone = "",
  //     balance = "",
  //     password = "",
  //     pin = "",
  //     verified = "",
  //     photo = "",
  //   } = req.body;

  //   if (
  //     firstname.trim() ||
  //     lastname.trim() ||
  //     email.trim() ||
  //     phone.trim() ||
  //     balance.trim() ||
  //     password.trim() ||
  //     pin.trim() ||
  //     verified.trim() ||
  //     photo.trim()
  //   ) {
  //     usersModel.ppatchUser(req, res, id);
  //   }
  // },

// exports.patchResponse = (req, res, err, result, fields) => {
//   if (!err) {
//     if (result.length) {
//       const data = Object.entries(req.body).map((item) => {
//         return parseInt(item[1]) > 0
//           ? `${item[0]} = ${item[1]}`
//           : `${item[0]} = '${item[1]}'`;
//       });
//       let query = `UPDATE profile SET ${data} WHERE id=${id}`;
//       db.query(query, (err, result, fields) => {
//         if (result.affectedRows) {
//           formResponse(res, 200, `profile ${id} succesfully update`,
//           );
//         } else {
//           formResponse(res, 400, "failed update profile");
//         }
//       });
//     } else {
//       formResponse(res, 401, "id not found");
//     }
//   } else
//     formResponse(data=[], res, 401, "Failed update profile");
// };
