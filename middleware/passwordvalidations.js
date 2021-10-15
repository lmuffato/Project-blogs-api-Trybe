// const passwordRequired = async (req, res, next) => {
//     const { password } = req.body;
    
//     if (!password || password === '') {
//         return res.status(401).json({ message: 'All fields must be filled' });
//     }

//     next();
// };

// // const passwordValid = async (req, res, next) => {
// //     const { password } = req.body;

// //     const searchByPassword = await usermodels.findPassword(password);
// //     if (!searchByPassword) {
// //         return res.status(401).json({ message: 'Incorrect username or password' });
// // }

// // next();
// // };

// module.exports = { passwordRequired, passwordValid };