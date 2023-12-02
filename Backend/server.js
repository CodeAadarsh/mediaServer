require(`dotenv`).config()
const express = require(`express`)
const gamesownedApi = require(`./api/gamesOwnedApi`)
const app = express()
const PORT = process.env.PORT || 3200


app.use(`/api`, gamesownedApi)
app.get(`/`,(req,res)=>{
    res.send(`Hello World`)
})
app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})

