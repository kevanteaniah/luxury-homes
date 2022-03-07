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
  .populate("amenities")
  .then(home => {
    res.render('homes/show', {
      home,
      title: 'Homes',
      location: 'location',
      price: 'price',
      bedrooms: 'bedrooms',
      bathrooms: 'bathrooms',
      amenities: 'amenities',
    })
  }) .catch(err => {
    console.log(err)
    res.redirect('/homes')
  })
}

function edit(req,res){
  Home.findById(req.params.id)
  .then(home =>{
    res.render('homes/edit', {
      home,
      title: 'Homes',
      location: 'location',
      price: 'price',
      bedrooms: 'bedrooms',
      bathrooms: 'bathrooms',
      amenity: 'amenity',
    })
  }) .catch(err => {
    console.log(err)
    res.redirect('/homes')
  })
}

function update(req,res){
  Home.findById(req.params.id)
  .then(home =>{ 
    if(home.owner.equals(req.user.profile._id)){
      home.updateOne(req.body, {new: true})
      .then(()=> {
        res.redirect(`/homes/${home._id}`)
      })
      } else {
        throw new Error ('Who Are You Bro')
      }
    })
    .catch(err => {
      console.log(err)
      res.redirect('/homes')
    })
}

function deleteHome(req,res){
  Home.findById(req.params.id)
  .then(home => {
    if (home.owner.equals(req.user.profile._id)){
      home.delete()
      .then(() => {
        res.redirect('homes')
      })
    } else {
      throw new Error ('You can not delete this!!!')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/homes')
  })
}

function createAmenity(req,res){
  Home.findById(req.params.id, function(err, home){
    home.amenities.push(req.body)
    home.save(function(err){
      res.redirect(`/homes/${home._id}`)
    })
  })
}

export {
  index,
  create,
  show,
  edit,
  update,
  deleteHome as delete,
  createAmenity,
}
