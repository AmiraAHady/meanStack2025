// product Apis
const express = require("express");

let router = express.Router();

let Product = require("../models/product");

router.get("/", (req, res) => {
  Product.find()
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((err) => {
      res.json({ message: "Error getting Data" });
    });
});

//get product by id
// id is route params
router.get("/:id", (req, res) => {
  let reqId = +req.params.id;
  Product.findOne({ id: reqId })
    .then((data) => {
      if (!data) {
        res.status(404).send(`No Product with this id : ${req.params.id}`);
      } else {
        res.json(data);
      }
    })
    .catch((err) => {
      res.json({ message: "Error getting Data" });
    });
});

router.delete("/:id", (req, res) => {
  let reqId = +req.params.id;
  Product.deleteOne({ id: reqId })
    .then((data) => {
      console.log(data);
      if (data.deletedCount > 0) {
        res.send(`product with id ${reqId} deleted successfully`);
      } else {
        res.status(404).send(`No Product with this id : ${req.params.id}`);
      }
    })
    .catch((err) => {
      res.json({ message: "Error Deleteing Data" });
    });
});





module.exports = router;
