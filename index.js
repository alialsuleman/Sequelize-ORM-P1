const express = require ('express') ;
const bodyParser = require ('body-parser') ;
const db  = require ('./config/database') ;

//const sequelize  = require ('sequelize') ;



const app= express() ;
const PORT = 5000 ;

const postsRouter = require ('./routes/posts') ;
const categoriesRouter = require ('./routes/categorys') ;
const tagsRouter = require ('./routes/tags') ;
const usersRouter = require ('./routes/users') ;



app.use (bodyParser.urlencoded({extended:true})) ;
app.use(bodyParser.json()) ;





app.use('/api/v1/' , postsRouter) ;
app.use('/api/v1/' , categoriesRouter) ;
app.use('/api/v1/' , tagsRouter) ;
app.use('/api/v1/' , usersRouter) ;




app.use ('/' , (req, res)=>{
    res.send("welcome to my home page") ;
})



app.listen(PORT, ()=>{
    console.log("server start at PORT = 5000 ") ;
})