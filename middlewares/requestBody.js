const Ajv = require('ajv');
const ajv = new Ajv();

function validateSchema(schema) {
  return (req, res, next) => {
    const validateFn = ajv.compile(schema);
    const valid = validateFn(req.body);
    if (!valid) {
      return res.status(400).json({ error: validateFn.errors });
    }
    next();
  };
}

module.exports = {
    validateSchema
}