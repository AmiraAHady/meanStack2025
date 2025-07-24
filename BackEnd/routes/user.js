// user apis
const express = require("express");

let router=express.Router()

let users = [
    {
      name: "ali",
      age: 20,
    },
    {
      name: "omar",
      age: 23,
    },
    {
      name: "mohamed",
      age: 24,
    },
  ];

//get all users

router.get('/',(req,res)=>{
    res.status(200).json(users);
})

module.exports=router
