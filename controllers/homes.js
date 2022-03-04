import { Home } from '../models/home.js'

function index(req, res) {
  Home.find({})
  .then(homes => {
    res.render('homes/index', {
      city,
      price,
      bedrooms,
      bathrooms,
      sold,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/homes")
  })
}

export {
  index
}
