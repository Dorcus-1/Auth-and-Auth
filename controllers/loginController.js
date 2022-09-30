//For Register Page
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const express = require("express")
// const registerView = (req, res) => {
//     res.render("register", {

//     } );
// }

// For View 
// const loginView = (req, res) => {

//     res.render("login", {

//     } );
// }

//Post Request that handles Register
// const registerUser = (req, res) => {
//   //  const  registration = (req,res)=>{
//   //   const { name, email, password} = req.body
//   //  }
//    const newUser = new User(
//     {
//     name :req.body.name,
//     email :req.body.email,
//     password :req.body.password,
//   });
    
//     if (!name || !email || !password ) {
//       console.log("Fill empty fields");
//     }
//     //Confirm Passwords
//     if (password !== confirm) {
//       console.log("Password must match");
//     } else {
//       //Validation
//       User.findOne({ email: email }).then((user) => {
//         if (user) {
//           console.log("email exists");
//           res.render("register", {
//             name,
//             email,
//             password,
//           });
//         } else {
//           //Validation
         
//           //Password Hashing
//           bcrypt.genSalt(10, (err, salt) =>
//             bcrypt.hash(newUser.password, salt, (err, hash) => {
//               if (err) throw err;
//               newUser.password = hash;
//               newUser
//                 .save()
//                 .then(res.redirect("/login"))
//                 .catch((err) => console.log(err));
//             })
//           );
//         }
//       });
//     }
//   };

exports.signup = ()=>{
return  async(req,res) =>{
 const newUser =  new User({
  name:req.body.name,
  email:req.body.email,
  password:req.body.password
 })
 await newUser.save();
 res.status(200);
 res.send(newUser);
}

}