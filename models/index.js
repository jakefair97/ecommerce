// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  sourceKey: 'id',
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
})

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: 'product_tag',
  onDelete: 'CASCADE',
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: 'product_tag',
  onDelete: "CASCADE",
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
