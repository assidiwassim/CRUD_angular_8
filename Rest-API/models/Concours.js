

var mongoos=require('mongoose');
var Schema= mongoos.Schema;
var timestamps = require('mongoose-timestamp');


var ConcoursSchema=new Schema({
    nom: {type: String},
    desc: {type: String},
    date_deb: {type: String},
    date_fin: {type: String},
  })


  ConcoursSchema.plugin(timestamps,{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });



var UseModel= mongoos.model('concours',ConcoursSchema);
module.exports=UseModel;
