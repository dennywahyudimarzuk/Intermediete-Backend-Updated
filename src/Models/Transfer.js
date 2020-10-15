const db = require("../Helpers/db");
// const response = require("../Controller/Users.js");

const transferModel = {
  //GET
  getAllTransfer: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM transfer", (err, res) => {
        if (!err) {
          resolve(res);
        }
        reject(err);
      });
    });
  },

  //DELETE
  deleteTransfer: (id) => {
    console.log(id);
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM transfer WHERE id = ${id}`, (err, res) => {
        if (!err) {
          resolve(res);
        } else {
          reject(err);
        }
      });
    });
  },

  //POST
  postTransfer: (req) => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO transfer SET ?", req.body, (err, res) => {
        if (!err) {
          resolve(res);
        } else {
          reject(err);
        }
      });
    });
  },

  //PATCH
  // ppatchUser: (id, req, res) => {
  //   db.query(`SELECT * FROM profile WHERE id = ${id}`,
  //     (err, result, fields) => {
  //       response.patchResponse(req, res, err, result, fields);
  //     }
  //   );
  // },
  // register: (body, id) => {
  //   return new Promise((resolve, reject) => {
  //     bcrypt.genSalt(10, function (err, salt) {
  //       const { password } = body;
  //       bcrypt.hash(password, salt, function (err, hashedPassword) {
  //         const newBody = { ...body, password: hashedPassword };
  //         if (err) {
  //           reject(err);
  //         }
  //         const query = `UPDATE profile SET ? WHERE id = ${id}`;
  //         db.query(query, newBody, (err, data) => {
  //           if (!err) {
  //             resolve(newBody);
  //           } else {
  //             reject(err);
  //           }
  //         });
  //       });
  //     });
  //   });
  // },
};

module.exports = transferModel;
