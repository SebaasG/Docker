import express from 'express'
import {v4} from 'uuid'
import mongoose from 'mongoose'
const app = express()

const db = await mongoose.connect("mongodb://mymongo/sebasdb")
console.log(db.connection.db.databaseName)

const product  = new mongoose.Schema({
    name: String
})

const productModel = mongoose.model('Product', product)
app.get('/',async(req ,res) =>{

 const newProduct = await productModel.create({
        name: 'laptop'
    })


res.json({
    id: v4(),
    newProduct
})
})

app.listen(3000)
console.log('server listening in the port 5000')