const joi = require('joi');

const schema = joi.object ({
  userId: joi.string(),
  organization: joi.string(),
  createdAt: joi.string(),
  updatedAt: joi.string(),
  products: joi.string(),
  marketValue: joi.string(),
  ddress: joi.string(),
  ceo: joi.string(),
  country: joi.string(),
  noOfEmployees: joi.number(),
  employees: joi.string(),
})

export const postValidator = (req: any, res: any, next: any) => {
  schema.validateAsync(req, res, next)
  .then(() => next())
  .catch((err: any) => {
    res.json(err.message);
  });
}

export const validate = (req: any, res: any, next: any) => {
  if(typeof req.body.organization !== 'string' || 
  !Array.isArray(req.body.products) || 
  typeof req.body.address !== 'string' ||
  typeof req.body.marketValue !== 'string' ||
  typeof req.body.ceo !== 'string' ||
  typeof req.body.country !== 'string' ||
  typeof req.body.noOfEmployees !== 'string' ||
  !Array.isArray(req.body.employees) ||
  typeof req.body.createdAt !== 'string' ||
  typeof req.body.updatedAt !== 'string' ||
  typeof req.body.userId !== 'string') {
    return res.status(404).json({
      status: "failed",
      msg: "Invalid body"
    })
  }
}
