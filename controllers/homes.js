import { Home } from '../models/home.js'

function index(req, res) {
  Home.find({})
  .then(homes => {
    res.render('homes/index', {
      homes,
      title: 'Homes',
      city: 'city',
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

function create(req,res){
  req.body.owner = req.user.profile._id
  Home.create(req.body)
  .then(home =>{
    res.redirect('/homes')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/homes')
  })
}

function show(req,res){
  Home.findById(req.params.id)
  .populate("owner")
  .then(home => {
    res.render('homes/show', {
      homes,
      title: 'Homes',
      city: 'city',
      price: 'price',
      bedrooms: 'bedrooms',
      bathrooms: 'bathrooms',
    })
  })
}

export {
  index,
  create,
  show,
}
