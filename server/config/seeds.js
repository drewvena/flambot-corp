const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Black Shirts' },
    { name: 'White Shirts' },
    { name: 'Graphic Tees' }
  ]);



  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Black Shirt',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'ferret.jpg',
      category: categories[0]._id,
      price: 15.99,
      quantity: 5
    },
    {
      name: 'White Shirt',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: 'ferret.jpg',
      category: categories[1]._id,
      price: 15.99,
      quantity: 5
    },
    {
      name: 'White Long-Sleeve Shirt',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: 'ferret.jpg',
      category: categories[1]._id,
      price: 20.99,
      quantity: 5
    },
    {
      name: 'Black Long-Sleeve Shirt',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: 'ferret.jpg',
      category: categories[0]._id,
      price: 20.99,
      quantity: 5
    },
    {
      name: 'Graphic Long-Sleeve Shirt',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: 'ferret.jpg',
      category: categories[2]._id,
      price: 29.99,
      quantity: 3
    },
  ]);
  console.log('products seeded',  products);

  await User.deleteMany();

  await User.create({
    firstName: 'Drew',
    lastName: 'Vena',
    email: 'Drewvena1@gmail.com',
    password: 'imsweet66',
    orders: [
      
    ]
  });

  console.log('users seeded');

  process.exit();
});