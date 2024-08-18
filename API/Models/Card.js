import mongoose from "mongoose";

// Card Schema

const cardSchema = new mongoose.Schema({
    title: {type:String,require:true},
    description: {type:String,require:true}
});

export const Card = mongoose.model("Card",cardSchema);