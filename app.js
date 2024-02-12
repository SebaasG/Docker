import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import mongoose from 'mongoose';
// import mysql from 'mysql'

const app = express();

(async () => {
    try {
        const db = await mongoose.connect("mongodb://mymongo/sebasdb");
        console.log(`Conexión exitosa a la base de datos: ${db.connection.db.databaseName}`);
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
})();

const productSchema = new mongoose.Schema({
    name: String
});

const Product = mongoose.model('Product', productSchema);

app.get('/', async (req, res) => {
    try {
        const newProduct = await Product.create({ name: 'laptop' });
        res.json({
            id: uuidv4(),
            newProduct
        });
    } catch (error) {
        console.error('Error al crear un nuevo producto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Consulta de todos los productos
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error('Error al obtener todos los productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
