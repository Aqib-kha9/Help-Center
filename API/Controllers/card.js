import { Card } from "../Models/Card.js";

// Add New Card 

export const addCard = async(req,res) =>{
    const {title,description} = req.body;
    try{
        let card = await Card.create({title,description});
        console.log(card);
        res.json({message: "Card added Successfully....",card,success:true});
    }catch(error){
        res.json(message.error);
    }
}

// Get All Cards

export const getCard = async(req,res)=>{
    try{
        let cards = await Card.find();
        res.json({message: "All Cards",cards});
    }catch(error){
        throw error
    }
}

// Get Specific Card by Title

export const getCardByTitle = async(req,res)=>{
    try {
        const title = req.params.title;
        let card = await Card.findOne({title});
        if(!card) return res.json({message: "Invalid Title", success:false});
        res.json({message:"Specific Card",card});
    } catch (error) {
        throw error;
    }
}


