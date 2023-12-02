const express = require('express')
const Router = express.Router()
const fs = require(`fs`)
const path = require(`path`)
const rootDir = require(`../paths`)
const pathFile = path.join(rootDir,`Data`,`gamesOwned.js`)
// const gamesData = fs.readFile(pathFile, (err, fileContent)=>{
//     console.log(JSON.stringify(fileContent))
//     console.log(err)
// })
// console.log(gamesData)
Router.get(`/gamesowned`,(req,res)=>{
    res.end(JSON.stringify(
        [
            {name:'spiderman2',image:'/Users/aadarshmac/Documents/Development/mediaServer/Backend/assets/spiderman2ICO.jpg',id:3,backgroundImage:'/Users/aadarshmac/Documents/Development/mediaServer/Backend/assets/spiderman2BG.jpg'},
            {name:'godofwar5',image:'/Users/aadarshmac/Documents/Development/mediaServer/Backend/assets/gow5ICO.png',id:4,backgroundImage:'/Users/aadarshmac/Documents/Development/mediaServer/Backend/assets/gow5Bg.jpg'},
            {name:'callofduty',image:'/Users/aadarshmac/Documents/Development/mediaServer/Backend/assets/codICO.png',id:5,backgroundImage:'/Users/aadarshmac/Documents/Development/mediaServer/Backend/assets/codBg.jpg'},
        ]
    ))
})

module.exports = Router