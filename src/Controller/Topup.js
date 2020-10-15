const topupModel = require("../Models/Topup");
const formResponse = require("../Helpers/FormResponse");

module.exports = {
  getAllTopup: (req, res) => {
    topupModel
      .getAllTopup()
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },

  deleteTopup: (req, res) => {
    const { id } = req.params;
    topupModel
      .deleteTopup(id)
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },

  postTopup: (req, res) => {
    const { idTopup, stepTopup } = req.body;
    if (idTopup && stepTopup) {
      topupModel
        .postTopup(req)
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
//     topupModel.ppatchUser(req, res, id);
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
