import express from 'express'
import db from "./db.js";
import {sql} from '@databases/pg';
import cors from 'cors'

const app = express()
const PORT = 3000



app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.get('/', async(req, res) => {
    const data = await fetchDataFromTable('recipe')
    res.send(data)
  })

async function fetchDataFromTable(tableName) {
    const query = `SELECT * FROM ${tableName} ORDER BY created_at DESC;`;
    return await db.query(sql(query));
  }
