import express from "express";
import { addCard,getCard, getCardByTitle} from "../Controllers/card.js";

const router = express.Router();

// add new Card

router.post("/add",addCard);

// Get all Cards

router.get("/get",getCard);

// Get Specific Card By title

router.get("/:title",getCardByTitle);

export default router;