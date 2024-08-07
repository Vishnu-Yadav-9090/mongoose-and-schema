const mongoose = require("mongoose");

const main =async ()=>{
   await mongoose.connect('mongodb://localhost:27017/vishnu');
   const schema = new mongoose.Schema({
    name:String,
    class:Number
   })
   const model = mongoose.model('datasse',schema);
   const data = new model({name:"rohit",village:4984,class:12});
   const result =await data.save();
   console.log(result)
}
main();