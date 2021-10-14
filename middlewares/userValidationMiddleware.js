// module.exports = async (req, res, next) => { 
//   try {
//     const { displayName, email, password } = req.body;
    
//     if (user.role !== 'admin') {
//       return res.status(403).json({ message: 'Only admins can register new admins' });
//     }
    
//     next();
//   } catch (error) {
//     console.log(error);
//     return res.status(401).json({ message: 'Sorry the API isnt working properly' });
//     }
//   };