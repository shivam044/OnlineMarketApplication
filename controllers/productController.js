const Product = require('../models/product');

// Create a new product
exports.createProduct = async (req, res) => {
    const product = new Product(req.body);
    try {
      await product.save();
      res.status(201).send({ message: 'Product added successfully', product });
    } catch (error) {
      res.status(400).send({ message: 'An error occurred while adding the product', error });
    }
};
  
// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send({ message: 'Product not found' });
    }
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!product) {
      return res.status(404).send({ message: 'Product not found' });
    }
    res.send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).send({ message: 'Product not found' });
      }
      res.status(200).send({ message: 'Item deleted successfully' });
    } catch (error) {
      res.status(500).send({ message: 'An error occurred while deleting the product' });
    }
  };

// Delete all products
exports.deleteAllProducts = async (req, res) => {
    try {
      await Product.deleteMany({});
      res.send({ message: 'All products have been deleted.' });
    } catch (error) {
      res.status(500).send(error);
    }
};
  
// Find products by name containing keyword
exports.findProductsByName = async (req, res) => {
    const keyword = req.query.name;
    try {
      const products = await Product.find({ name: { $regex: keyword, $options: 'i' } });
      if (products.length === 0) {
        return res.status(404).send({ message: 'No products found with that name' });
      }
      res.send(products);
    } catch (error) {
      res.status(500).send({ message: 'An error occurred while searching for products', error });
    }
  };
  
