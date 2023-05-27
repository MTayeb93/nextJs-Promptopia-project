import { Schema, model, models } from "mongoose";



const UserSchema = new Schema({
 email: {
  type: String,
  unique: [true, 'Email already exists!'],
  require: [true, 'Email is required!'],
 },
 username: {
  type: String,
  required: [true, 'Username is required!'],
  match: [/^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
},
image: {
 type: String,
}
})


//first look into the models.User see if it's there and if it's not then create new Model, because this route is getting called every time the connection is established
const User = models.User || model('User', UserSchema)

export default User

// we would do this if we were working with a regular always on always running server like Express
// const User = model('User', UserSchema)

// export default User