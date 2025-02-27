 
const express=require(express)

const app=express();

app.post('/user/signup',(req,res)=>{
    res.json({
        message:"sign up endpoint"
    })
})

app.post('/user/sigin',(req,res)=>{
    res.json({
        message:"sign up endpoint"
    })
})

app.get('/courses',(req,res)=>{
    res.json({
        message:"sign up endpoint"
    })
})

app.post('/user/signup',(req,res)=>{
    res.json({
        message:"sign up endpoint"
    })
})
app.get('/user/purchases',(req,res)=>{
    // you would expect the user to pay you money
    res.json({
        message:"sign up endpoint"
    })
})

app.post('/courses/purchases',(req,res)=>{
    res.json({
        message:"sign up endpoint"
    })
})





app.listen(3000)