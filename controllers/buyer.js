import { Home } from '../models/home.js'

function index(req, res) {
  Home.find({})
  .then(homes => {
    res.render('homes/index', {
      homes,
      title: 'Homes',
      location: 'location',
      price: 'price',
      bedrooms: 'bedrooms',
      bathrooms: 'bathrooms',

    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}