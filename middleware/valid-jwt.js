const { request } = require('express');
const jwt = require('jsonwebtoken')


const validJWT = (req = request, res, next) => {
    const token = req.header('x-token')
    const secretKey = process.env.JWT_KEY
    if (token) {
      jwt.verify(token, secretKey , (err, decoded) => {      
        if (err) {
          return res.json({ mensaje: 'Token inválida' });    
        } else {
          req.uid = decoded.uid
          next();
        }
      });
    } else {
      res.send({ 
          mensaje: 'Token no proveída.' 
      });
    }
 }


 module.exports = {
     validJWT
 }