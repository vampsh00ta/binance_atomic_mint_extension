import express from "express"


const app = express()

const port = 3000;
const urlencodedParser = express.urlencoded({extend:false})


let user  = {
    key:'1'
}

app.post('/auth',urlencodedParser,(req,res,err)=>{
    if(req.body.key = user.key){
        res.json({auth:true})
    }
    else{
        res.json({auth:false})
    }
})

app.listen(port,()=>{
    console.log(`заебись все рабоает на порте ${port}`);
})
