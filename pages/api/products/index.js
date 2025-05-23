import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";
// import { connect } from "mongoose";

export default async function handler(req, res) {
  const { method, cookies } = req;

  const token = cookies.token

  await dbConnect();
  
  if (method === "GET") {
    try {
      const products = await Product.find();
      // console.log('products: ', products)
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
      console.log('err: ', err)
    }
  }

  if (method === "POST") {
    if(!token || token !== process.env.TOKEN){
      return res.status(401).json("Not authenticated!")
    }
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
