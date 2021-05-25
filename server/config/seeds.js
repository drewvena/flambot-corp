const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Crew Neck Tee' },
    { name: 'Long Sleeve Tee' },
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
      image: 'cookie-tin.jpg',
      category: [
        categories[0],
        categories[2]
      ],
      price: 15.99,
      quantity: 5
    }
  ]);
  console.log(products[0].category);
  console.log('products seeded');

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