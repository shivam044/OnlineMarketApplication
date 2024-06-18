const Category = require('../models/category');

// Create a new category
exports.createCategory = async (req, res) => {
  const category = new Category(req.body);
  try {
    await category.save();
    res.status(201).send({message: 'Category added successfully', category});
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.send(categories);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a category by ID
exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).send({ message: 'Category not found' });
    }
    res.send(category);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a category by ID
exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!category) {
      return res.status(404).send({ message: 'Category not found' });
    }
    res.send(category);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a category by ID
exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).send({ message: 'Category not found' });
    }
    res.send(category);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Delete all categories
exports.deleteAllCategories = async (req, res) => {
    try {
      await Category.deleteMany({});
      res.send({ message: 'All categories have been deleted.' });
    } catch (error) {
      res.status(500).send(error);
    }
  };