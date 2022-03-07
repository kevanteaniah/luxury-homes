import mongoose from 'mongoose'

const Schema = mongoose.Schema

const amenitySchema = new Schema({
  type: String,
})
  

const homeSchema = new Schema({
  location: String,
  price: Number,
  bedrooms: Number,
  bathrooms: Number,
  link: String,
  sold: Boolean,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  amenities: [amenitySchema]
})

const Home = mongoose.model('Home', homeSchema)

export{
  Home
}