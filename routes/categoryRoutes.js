const express = require('express');
const {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
    deleteAllCategories
} = require('../controllers/categoryController');

const router = express.Router();

router.post('/categories', createCategory);
router.get('/categories', getCategories);
router.get('/categories/:id', getCategoryById);
router.put('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory);
router.delete('/categories', deleteAllCategories);

module.exports = router;
