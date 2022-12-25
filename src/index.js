const express= require("express")
const mongoose= require("mongoose")
mongoose.set('strictQuery', false)
const services= require("./services/services")
const app= express()

app.use(express.json())

mongoose.connect("mongodb+srv://aliabbasbackendcohort:AMMIabbu321@cluster67.6fp98uh.mongodb.net/group17Database?retryWrites=true&w=majority")
.then(()=>console.log("mongoose is connectd"))
.catch((err)=>console.log(err))

app.use("/",services)

app.listen(3000,()=>{
    console.log("server is listening at 3000 PORT")
})