import mongoose from 'mongoose'

const Schema = mongoose.Schema

const homeSchema = new Schema({
  city: String,
  price: Number,
  bedrooms: Number,
  bathrooms: Number,
  link: String,
  sold: Boolean,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
})

const Home = mongoose.model('Home', homeSchema)

export{
  Home
}