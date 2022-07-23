const express = require('express')
const app = express()
const { body,validationResult ,check } = require('express-validator')
app.use(express.json())

app.post('/information', 
          body('passcode')
         
          .isLength({min:5})
          .withMessage('The length should be min 5 characters')
          .matches(/\d/)
          .withMessage('must contain a number'),
          body('email')
          .isEmail()
          .withMessage('plz enter valid email'),
         

          body('mob')
          .isMobilePhone()
          .isNumeric()
          .isLength({
            min:10,
            max:10
          })
          .withMessage('invalid mobile no.'),
          check('password')
          .isLength({min:5})
          .withMessage('The length should be min 5 characters')
          .matches(/\d/)
          .withMessage('must contain a number'),
          function (req, res) {
           // console.log(error)
            let error =validationResult(req)
            if(!error.isEmpty()){
                res.status(400).json({
                    'error':error.array()
                })
            }
          res.status(200).json({

          "msg":"Everything is ok Anjali",
           "email":req.body.email,
           "data":req.body.passcode,
            "Mobile no.":req.body.mob

  })
})

app.listen(3000)