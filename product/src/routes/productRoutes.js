const express = require("express");
const ProductController = require("../controllers/productController");
const isAuthenticated = require("../utils/isAuthenticated");

const router = express.Router();
const productController = new ProductController();

router.get("/:id", isAuthenticated, productController.getProductsDetails);
router.post("/", isAuthenticated, productController.createProduct);
router.post("/buy", isAuthenticated, productController.createOrder);
router.get("/", isAuthenticated, productController.getProducts);
router.delete("/delete", isAuthenticated, productController.deleteAllProducts);





//demo 


module.exports = router;
