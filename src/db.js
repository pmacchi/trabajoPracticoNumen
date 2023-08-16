import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://pmacchi:Pablo1234@dbmirgor.d07o1ve.mongodb.net/?retryWrites=true&w=majority');
        console.log("database connected")
    }
    catch (error) {
        console.log(error);
    }
};