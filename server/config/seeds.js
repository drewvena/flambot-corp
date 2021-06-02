const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Men' },
    { name: 'Women' },
    { name: 'Cody' }
  ]);



  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'For Cody',
      description:
        "Are you an American terror named Cody looking for a sleeveless tee to show off your farmers tan at your buddy Kyle's cookout, look no further as we have the shirt for you!",
      image: 'cody.jpg',
      category: categories[2]._id,
      price: 15.99,
      quantity: 5
    },
    {
      name: 'Cornhole',
      description:
        'Sometimes the wife has gotta let you loose! Let everyone know with this shirt!',
        image: 'cornhole.png',
      category: categories[0]._id,
      price: 15.99,
      quantity: 5
    },
    {
      name: 'Grumpy, Spoiled',
      description:
        "Born in a December? Crazy about your Man? Awesome wife? If you answered yes to all of these questions then you NEED this shirt for your husband! Let Melinda know she is not allowed to be on the same team as your husband during cornhole!",
        image: 'grumpyman.jpg',
      category: categories[1]._id,
      price: 20.99,
      quantity: 5
    },
    {
      name: 'June Guy',
      description:
        "Perfect tee for June guy's who've got some personality to them!",
        image: 'juneGuy.jpg',
      category: categories[0]._id,
      price: 20.99,
      quantity: 5
    },
    {
      name: 'April Gardening',
      description:
        'Tired of being underestimated as an old lady gardener who was born in April? Let everyone know with this tee!',
        image: 'lady.jpg',
      category: categories[1]._id,
      price: 29.99,
      quantity: 3
    },
    {
      name: 'Smooth by Santana',
      description:
        'Would you rather be listening to Smooth by Santana feat. Rob Thomas? Now is your chance to let everyone know.',
        image: 'smooth.png',
      category: categories[1]._id,
      price: 29.99,
      quantity: 3
    },
    {
      name: '5 Things About My Wife',
      description:
        'Cut to the chase and tell everyone what they really need to know about your wife.',
        image: 'mywife.jpeg',
      category: categories[1]._id,
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