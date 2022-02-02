
const Joi = require("joi");

const schema = Joi.object({
  id: Joi.number(),
  title: Joi.string().required().max(100),
  body: Joi.string().required().max(200),
  category: Joi.string().required(),
  author: Joi.string().required(),
});


const create = (req,res, next) => {
    const { error, value } = schema.validate(req.body)
    if (error) {
        next(error)
  }
    else {
      return res.json(value)
  }
    
}

module.exports=create