const Product = require('./product');
const Category = require('./category');
const Tag = require('./tag');
const ProductTag = require('./productTag');

// Product belongs to Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Category has many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Product belongs to many Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// Tag belongs to many Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
