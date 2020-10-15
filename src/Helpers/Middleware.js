const jwt = require("jsonwebtoken");

module.exports = {
  authToken: (req, res, next) => {
    let token = req.headers["auth-token"];
    if (token) {
      jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
        if (err) {
          return res.status(401).send({
            success: false,
            message: err
          });
        } else {
          if (decode.role_id == '11') { 
            next();
          } else if (decode.id == req.params.id) {
            next()
          } else {
            res.status(403).send({
              success: false,
              message: "error forbidden"
            })
          }
        }
      });
    } else {
      return res.status(404).send({
        success: false,
        message: "not found"
      });
    }
  },
};
