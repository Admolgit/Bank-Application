import express, { Request, Response, NextFunction } from 'express';


const validate = (req: Request, res: Response, next: NextFunction) => {
  if(typeof req.body.organization !== 'string' || 
  !Array.isArray(req.body.products) || 
  typeof req.body.address !== 'string' ||
  typeof req.body.marketValue !== 'string' ||
  typeof req.body.ceo !== 'string' ||
  typeof req.body.country !== 'string' ||
  typeof req.body.noOfEmployees !== 'number' ||
  !Array.isArray(req.body.employees) ||
  typeof req.body.createdAt !== 'string' ||
  typeof req.body.updatedAt !== 'string') {
    return res.status(404).json({
      status: "failed",
      msg: "Invalid body"
    })
  }
  next();
};

// export default validateUser
module.exports = {
  validate
}