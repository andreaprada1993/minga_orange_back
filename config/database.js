import mongoose from "mongoose";

mongoose.connect(process.env.DATABASE_URL).then(() => console.log("database connected")).catch(error => console.log(error));