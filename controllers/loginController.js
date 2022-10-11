//For Register Page
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const express = require("express");
const _ = require("lodash");


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

  //Confirm Passwords
// if (password !== confirm) {
//     console.log("Password must match");
//   }
}

}

exports.update = ()=>{
  return async(req,res)=>{
   const updates = _.pick(req.body, ['name','email','password']);
  User.findByIdAndUpdate(req.params.id, 
    { 
      name:updates.name,
      email:updates.email,
      password:updates.password
    },(err,res) =>{
      if(err){
        console.log(err);
      }
      else{
        res.json({message:"User is updated"});
      }
    })
  }
}

exports.delete = ()=>{
  return async(req,res)=>{
    User.findByIdAndDelete(req.params.id)
    res.json({message:"User deleted successfully",sucess:'true'})
  }
}