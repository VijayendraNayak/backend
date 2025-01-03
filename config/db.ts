import mongoose from 'mongoose';

const connectDb=async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/finedine");
        console.log("Database connected Successfully!!!");
    }catch(err){
        console.log(err);
    }
}
export default connectDb;