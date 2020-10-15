const db = require("./Helpers/db");

exports.searchReceiver = (req, res) => {
  let { q } = req.query;
  if (!q) {
    db.query(
      `SELECT firstname, lastname, phone, id FROM profile ORDER BY firstname ASC`,
      (err, result, fields) => {
        if (!err) {
          console.log(result);
          res.status(200).json({
            success: true,
            message: "Success Get Search Data",
            data: result,
          });
        } else {
          res.status(404).json({
            success: false,
            message: "Failed Get Search Data",
            data: [],
          });
        }
      }
    );
  } else {
    db.query(
      `SELECT firstname, lastname, phone, id FROM profile WHERE firstname LIKE "%${q}%" ORDER BY firstname ASC`,
      (err, result, fields) => {
        if (!err) {
          console.log(result);
          res.status(200).json({
            success: true,
            message: "Success Get Search Data",
            data: result,
          });
        } else {
          res.status(404).json({
            success: failed,
            message: "Failed Get Search Data",
            data: [],
          });
        }
      }
    );
  }
};
