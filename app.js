import express from "express"
import connectDB from "./config/db.js"
import dotenv from "dotenv"
import router from "./routes/user-routes.js"
import cookieParser from "cookie-parser"
import cors from 'cors'

dotenv.config()

const app = express()


app.use(cookieParser())
app.use(express.json())
app.use(cors({credentials:true, origin:"http://localhost:3000"}))
app.use('/api', router)

const port = 8000 || process.env.PORT

connectDB()


app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})