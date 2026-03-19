const Joi = require("joi");

module.exports = (schema) => (req, res, next) => {
  const joiSchema = Joi.object(schema);
  const { error } = joiSchema.validate(req.body);

  if (error)
    return res.status(400).send({ error: error.details[0].message });

  next();
};
