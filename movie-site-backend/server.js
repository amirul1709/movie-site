import express from "express"
import cors from "cors"
import reviews from "./api/reviews.route.js"

const app = express()

const corsOptions = {
    origin: '*',
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization'
}

app.use(cors(corsOptions))
app.use(express.json())

app.use("/api/v1/reviews", reviews)
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))

export default app