import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost/easy_entertainmentdb");
        console.log(">>>MONGODB se conecto exitosamente")
    } catch (error) {
    console.error(error)
    }
};