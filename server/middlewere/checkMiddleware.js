const jwt = require("jsonwebtoken");

module.exports = function (role) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }
    try {
      const token = req.headers.authorization.split(" ")[1]; //!Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJp
      if (!token) {
        return res.status(401).json({ message: "User is not authorized" });
      }
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      if (decoded.role !== role) {
        return res.status(403).json({ message: "You don't have the access" });
      }
      req.user = decoded;
      next();
    } catch (e) {
      res.status(401).json({ message: "User is not authorized" });
    }
  };
};
