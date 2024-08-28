import express from 'express'
import connectDB from './db/connectdb.js'
import dotenv from 'dotenv'
dotenv.config()
import web from './routes/web.js'
const app = express()
const port = process.env.PORT
const DB_URL = process.env.DB_URL


connectDB(DB_URL)
app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')
app.use('/',web)
app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
})