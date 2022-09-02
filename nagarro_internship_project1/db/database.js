// .............importing modules.............
const mongoose = require("mongoose");

//.............Database Connection.............
const connectDatabase = () =>{
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology : true,
    }).then((data) =>{
        console.log(`mongodb is connected with server: ${data.connection.host}`)
    }).catch(function (err) {
        console.log(`Error setting up connection to database: ${err}`);
    });
}
module.exports = connectDatabase