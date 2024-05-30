import express, { json } from 'express'; 
import cors from 'cors'; 
const app=express();
const port=process.env.port || 5000

const user={
    name:"strange.342"
}
app.use(json())
app.use(cors())
app.get('/',(req,res)=>{
    return res.json({user:user.name})
})
app.get('/signup',(req,res)=>{
    return res.json({message:"signup page"})
})
app.get('/dashboard',(req,res)=>{
    return res.json({message:"dashboard page"})
})
app.listen(port,()=>{
    console.log("running")
})

