const db = require("../Helpers/db");
const bcrypt = require("bcrypt");
// const response = require("../Controller/Users.js");

const usersModel = {
  //GET
  getAllUsers: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM profile", (err, res) => {
        if (!err) {
          resolve(res);
        }
        reject(err);
      });
    });
  },

  getUserId: (params) => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM profile WHERE id=?", params.id, (err, res) => {
        if (!err) {
          resolve(res[0]);
        }
        reject(err);
      });
    });
  },

  //DELETE
  deleteUser: (id) => {
    console.log(id);
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM profile WHERE id = ${id}`, (err, res) => {
        if (!err) {
          resolve(res);
        } else {
          reject(err);
        }
      });
    });
  },

  //POST
  postUser: (body) => {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, function (err, salt) {
        const { password } = body;
        bcrypt.hash(password, salt, function (err, hashedPassword) {
          const newBody = { ...body, password: hashedPassword };
          db.query("INSERT INTO profile SET ?", newBody, (err, res) => {
            if (!err) {
              resolve(newBody);
            }
            reject(err);
          });
        });
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

module.exports = usersModel;
