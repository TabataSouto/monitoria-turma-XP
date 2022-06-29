const joi = require('joi');

const schema = joi.object({
  name: joi.string().required(),
  races_id: joi.required()
});

const characterValidation = (req, res, next) => {
  // console.log('schema joi: ', schema)

  const { error } = schema.validate(req.body);
  // console.log('error joi: ', error)

  if(error) {
    return res.status(400).json({ message: error.details[0].message })
  }
  next();
};

module.exports = characterValidation;