//For Register Page
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const express = require("express");
const _ = require("lodash");


exports.signup = ()=>{
return  async(req,res) =>{
  try{
    
    
    
    encryptedPassword = await bcrypt.hash(req.body.password, 10);
 const newUser =  new User({
   name:req.body.name,
   email:req.body.email,
  password:encryptedPassword
 })

// create token
const token = jwt.sign(
  { user_id: User._id, email },
  process.env.TOKEN_KEY,
  {
    expiresIn: "2h",
  }

);
 User.token=token;
 
 await newUser.save();
 res.status(200);
 res.send(newUser);
 
}catch(err){
console.log(err);
}
  //Confirm Passwords
// if (password !== confirm) {
//     console.log("Password must match");
//   }
}

}

// Encrypt password

exports.update = ()=>{
  return async(req,res)=>{
   const updates = _.pick(req.body, ['name','email','password']);
   console.log(updates)
   console.log(await User.findById(req.params._id))
  User.findByIdAndUpdate(req.params._id, 
    { 
      name:updates.name,
      email:updates.email,
      password:updates.password
    },(err, doc) =>{
      if(err){
        console.log(err);
      }
      else{
        
         res.json({ newUser:doc, message:updates.message,success:true });
        // res.send(updates);
      }
    })
  }
}

exports.deleteUser = ()=>{
  return async(req,res)=>{
   await User.findByIdAndDelete(req.params._id);
   return res.json({message:"User deleted successfully",sucess:'true'})
  }
}