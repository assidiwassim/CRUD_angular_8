

const Concours = require("../models/Concours")
process.env.SECRET_KEY = 'secret'

module.exports={

    all:function (req,res) {

        Concours.find({},function (err,result) {
   
          res.send(result)
   
        })
   
   
   
      },
    add:function(req,res) {
      
            const concourData = {
                nom: req.body.nom,
                desc: req.body.desc, 
                date_deb: req.body.date_deb, 
                date_fin: req.body.date_fin, 
            }

            Concours.create(concourData).then(concour => {           
                res.json({ status: concour.nom + ' saved!' })
            })
            .catch(err => {
                res.send('error: ' + err)
            })
      },
      remove:function (req,res) {
          
        Concours.deleteOne({_id:req.params.id},function(errr) {
          if (errr){
            res.send({"state":"not ok", "msg":"err:"+errr})
          }
          else {res.send({"state":" ok", "msg":"suprimer"})}
      
        })
      
      },

     
     
}

