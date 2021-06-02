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
      category: categories[0]._id,
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
      category: categories[0]._id,
      price: 29.99,
      quantity: 3
    },
    {
      name: '5 Things About My Wife',
      description:
        'Cut to the chase and tell everyone what they really need to know about your wife.',
        image: 'mywife.jpg',
      category: categories[0]._id,
      price: 29.99,
      quantity: 3
    },
    {
      name: "Sorry, I'm Taken",
      description:
        "Tell the boys you're taken and show some love for your awesome man all in one shirt.",
        image: 'sorryimtaken.png',
      category: categories[1]._id,
      price: 29.99,
      quantity: 3
    },
    {
      name: "Family Faith Friends Flag Firearms",
      description:
        "Beautiful shirt for the ultimate tough guy in your life.",
        image: '5things.png',
      category: categories[0]._id,
      price: 29.99,
      quantity: 3
    },
    {
      name: "Pastor's Wife",
      description:
        "For the pastor's wife in your life. Or for your wife if you're a pastor.",
        image: 'pastorswife.png',
      category: categories[1]._id,
      price: 29.99,
      quantity: 3
    },
    {
      name: "Virgin Grandma",
      description:
        "The shirt says it all.",
        image: 'virgingrandma.png',
      category: categories[1]._id,
      price: 29.99,
      quantity: 3
    },
    {
      name: "Never Underestimate an Old Man",
      description:
        "Do people constantly underestimate you? Are covered by the blood of Jesus? Were you also born in October? This is the shirt for you.",
        image: 'oldmanjesus.png',
      category: categories[0]._id,
      price: 29.99,
      quantity: 3
    },
    {
      name: "NCIS Woman",
      description:
        "If you're a woman that loves NCIS and was born in March, let everyone know!",
        image: 'nciswoman.jpg',
      category: categories[1]._id,
      price: 29.99,
      quantity: 3
    },
    {
      name: "Crazy Truck Driver",
      description:
        "For the crazy trucker driver who wants to be a main suspect in murder of his daughter's boyfriend",
        image: 'truckdriver.jpg',
      category: categories[0]._id,
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