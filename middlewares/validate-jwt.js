const {response} =require('express')

const jwt = require('jsonwebtoken')

const validateJWT =(req,res=response,next)=>{
//x-token header
const token = req.header('x-token')

if(!token){
  return res.status(401).send({status:"error",msj:"There is no token in the fetch"})
}

try {
  const {uid,name} = jwt.verify(
      token,
      process.env.SEED
  );

  req.uid = uid
  req.name = name

} catch (error) {
    return res.status(401).send({status:"error",msj:"invalid token"})
}
next();
}


module.exports={
validateJWT
}