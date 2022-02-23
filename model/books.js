import mongoose from "mongoose";

export const Booksschema = new mongoose.Schema({
    Author:{type:String
    ,required:true},
    Title:{type:String
        ,required:true}
});