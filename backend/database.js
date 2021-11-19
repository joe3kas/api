const mongoose = require('mongoose');

const uri = "mongodb+srv://jbocanegrac14:Admin2604@cluster0.di8hx.mongodb.net/_octavioPaz_?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true"
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
 }).then(()=>{
     console.log(`connection to database established`)
 }).catch(err=>{
     console.log(`db error ${err.message}`);
     process.exit(-1)
 });
 
 mongoose.set('useUnifiedTopology', true);