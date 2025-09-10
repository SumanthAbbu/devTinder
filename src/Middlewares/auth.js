const adminAuth = function (req, res, next) {
  console.log("auth for admin");
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("unAuthorized request");
  } else {
    next();
  }
};
const userAuth = function (req, res, next) {
  console.log("auth for user");
  const token = "xyzabc";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("unAuthorized request");
  } else {
    next();
  }
};
module.exports = { adminAuth, userAuth };
