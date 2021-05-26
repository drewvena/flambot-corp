const db = require('./connection');
const { User, Product, ColorCategory, ShirtTypeCategory } = require('../models');

db.once('open', async () => {
  await ColorCategory.deleteMany();
  await ShirtTypeCategory.deleteMany();

  const colorCategories = await ColorCategory.insertMany([
    { name: 'Black Shirts' },
    { name: 'White Shirts' },
    { name: 'Graphic Tees' }
  ]);

  const shirtTypeCategory = await ShirtTypeCategory.insertMany([
    { name: 'Crew Neck Tee' },
    { name: 'Long Sleeve Tee' }
  ]);

  console.log('categories seeded', colorCategories, shirtTypeCategory);

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Black Shirt',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      color: colorCategories[0],
      shirtType: shirtTypeCategory[0],
      price: 15.99,
      quantity: 5
    },
    {
      name: 'White Shirt',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      color: colorCategories[1],
      shirtType: shirtTypeCategory[0],
      price: 15.99,
      quantity: 5
    },
    {
      name: 'White Long-Sleeve Shirt',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      color: colorCategories[1],
      shirtType: shirtTypeCategory[1],
      price: 20.99,
      quantity: 5
    },
    {
      name: 'Black Long-Sleeve Shirt',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      color: colorCategories[0],
      shirtType: shirtTypeCategory[1],
      price: 20.99,
      quantity: 5
    },
    {
      name: 'Graphic Long-Sleeve Shirt',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      color: colorCategories[2],
      shirtType: shirtTypeCategory[1],
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