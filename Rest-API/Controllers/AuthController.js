
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require("../models/User")
process.env.SECRET_KEY = 'secret'

module.exports={
    register:function(req,res) {
      
            const userData = {
                email: req.body.email,
                password: req.body.password, 
            }
        
            User.findOne({email: req.body.email}).then(user => {
                if (!user) {
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                        userData.password = hash
                        User.create(userData).then(user => {           
                                res.json({ status: user.email + ' registered!' })
                            })
                            .catch(err => {
                                res.send('error: ' + err)
                            })
                    })
                } else {
                    res.json({ error: 'User already exists' })
                }
            })
            .catch(err => {
                res.send('error: ' + err)
            })
      },

      login:function(req,res) {

        User.findOne({
            email: req.body.email
        }).then(user => {
                if (user) {
                    if (bcrypt.compareSync(req.body.password, user.password)) {

                        payload = {
                            _id: user._id,
                            email: user.email
                        }

                         let token = jwt.sign(payload, process.env.SECRET_KEY, {
                            expiresIn: 24  *  60  *  60
                        })
    
                        payload = {
                            _id: user._id,
                            email: user.email,
                            token : token,
                            expires_in : 24  *  60  *  60
                        }

                        res.send(payload);  
                    
                        
                    } else {
                        res.json({ error: "User does not exist" })
                    }
                } else {
                    res.json({ error: "User does not exist" })
                }
            })
            .catch(err => {
                res.send('error: ' + err)
            })
      },
     
}

