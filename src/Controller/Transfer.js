const transferModel = require("../Models/Transfer");
const formResponse = require("../Helpers/FormResponse");

module.exports = {
  getAllTransfer: (req, res) => {
    transferModel
      .getAllTransfer()
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },

  deleteTransfer: (req, res) => {
    const { id } = req.params;
    transferModel
      .deleteTransfer(id)
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },

  postTransfer: (req, res) => {
    const { idSender, idReceiver, nominal, notes } = req.body;
    if (idSender && idReceiver && nominal && notes) {
      transferModel
        .postTransfer(req)
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
//     transferModel.ppatchUser(req, res, id);
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
