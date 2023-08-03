const express = require("express");
const cors = require("cors");
const productRoutes = require("../routes/productRoutes");



module.exports = function (app){

    app.use(express.json());
    app.use(cors());

    app.use('/api/products', productRoutes);
    

}