const db = require("../Helpers/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { response } = require("express");

const authModel = {
  register: (body) => {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, function (err, salt) {
        const { password } = body;
        bcrypt.hash(password, salt, function (err, hashedPassword) {
          const newBody = { ...body, password: hashedPassword };
          if (err) {
            reject(err);
          } else{
            const query = "INSERT INTO profile SET ?";
            db.query(query, newBody, (err, data) => {
              if (!err) {
                resolve(newBody);
              } else {
                reject(err);
              }
            });
          }
        });
      });
    });
  },

  login: (body) => {
    return new Promise((resolve, reject) => {
      const { email, password } = body;
      const query = "SELECT * FROM profile WHERE email=?";
      db.query(query, email, (err, data) => {
        let dataUser = data[0];
        if (!data.length) {
          reject("invalid Email/Password");
        } else {
          if (!err) {
            const token = jwt.sign(
              {
                // email: dataUser.email,
                id: dataUser.id,
                role_id: dataUser.role_id,
                // firstname: dataUser.firstname,
              },
              process.env.SECRET_KEY
            );

            bcrypt.compare(password, dataUser.password, function (err, result) {
              if (err) {
                reject("invalid Email/Password");
              } else {
                if (!result) {
                  reject("invalid Email/Password");
                } else {
                  const sql = "SELECT * FROM users WHERE password=?";
                  db.query(sql, dataUser.password, (err, data) => {
                    if (!err) {
                      resolve(token);
                    } else {
                      reject("invalid Email/Password");
                    }
                  });
                }
              }
            });
          } else {
            reject(err);
          }
        }
      });
    });
  },
};

module.exports = authModel;
