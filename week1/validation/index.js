const  http  = require('http')

const express = require('express')
const bodyParser = require('body-parser')


const app = express()
app.use(bodyParser.json());

const server = http.createServer(app)
const Joi = require('joi')





app.get('/', (req, res)=>{
    res.json({"message":"success"})
    
})

app.post("/register", (req, res, next) => {


    const schema = Joi.object({
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
    });


    const { error, value } = schema.validate(
        req.body

    );

    if (error) {
        console.log(error)
        res.json({
            "message":"Validation failed"
        })
    }
    else {
        console.log("validated")

    }
    next()

    
  
});


server.listen(8000, ()=>{
    console.log("Listening the server")
})