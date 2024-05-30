import express, { json } from 'express'; 
import cors from 'cors'; 
const app=express();
const port=process.env.port || 5000
import path from 'path';
const user={
    name:"strange.342"
}
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
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
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
});

app.listen(port,()=>{
    console.log("running")
})

