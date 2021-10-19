const erroMessage = (err, _req, res, _next) => {
  if (err.isJoi) {
   return res.status(400)
     .json({ message: err.details[0].message });
 }

 const status = err.code || 500;

 res.status(status).json({ message: err.message });
};

module.exports = erroMessage;