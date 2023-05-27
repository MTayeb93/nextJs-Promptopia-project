import mongoose from "mongoose";


let isConnected = false //tack the connection status

export const connectToDB = async () => {
 mongoose.set('strictQuery', true)  //to avoid warnings in the console

 if(isConnected) {
  console.log('MongoDB is already connected');
  return
 }

 try {
  await mongoose.connect(process.env.MONGODB_URI, {
   dbName: 'share_prompt',
   useNewUrlParser: true,
   useUnifiedTopology: true,
  })

  isConnected = true
  console.log('MongoDB connected');
 } catch (error) {
   console.log(error);
 }

}