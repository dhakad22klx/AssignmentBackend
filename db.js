const { default: mongoose } = require("mongoose");
require('dotenv').config()
const URI = process.env.URI;
mongoose.connect(URI).then(console.log("connected"));



const DataSchema = new mongoose.Schema({
   content : String
})

const Data = mongoose.model('Data', DataSchema);


// async function connectDatabase() {
//     try {
//       await mongoose.connect(URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
//       console.log('Connected to the database');
//     } catch (error) {
//       console.error('Error connecting to the database:', error);
//       throw error;
//     }
// }

module.exports = {
    Data
}