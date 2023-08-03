const productData =  require('./fakeProducts');
const Product = require('./models/product');
const mongoose = require ('mongoose');

const importData = async () => {
    try {
        await Product.insertMany(productData);
        console.log("Data Import Success");
        process.exit();
    } catch (err) {
        console.error('Error with data import');
        process.exit(1);
    }
}

module.exports = importData;