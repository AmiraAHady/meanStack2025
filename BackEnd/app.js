const express = require("express");

const server = express();
const mongoose=require('mongoose')
var cors = require('cors')

let userRoutes=require('./routes/user')
let productRoutes=require('./routes/product')

mongoose.connect(`connection string`).then(()=>{
  console.log('Connected To DB');
}).catch((err)=>{
console.log(`error connecting to DB :${err}`);
})


server.use(cors())

server.use(express.json());
// localhost/product/3
server.use('/user',userRoutes)
server.use('/product',productRoutes)


server.listen(3000, () => {
  console.log("server Listening");
});
