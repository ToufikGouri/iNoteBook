const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://toufikgouri:PSmHEJFXR7F4VSHW@inotebookdb.vauin2u.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = async () => {
    try {
        if (mongoose.connection.readyState != 1) {
            await mongoose.connect(mongoURI)
            console.log("Connected to mongo successfully");
        }
    } catch (error) {
        console.log("The error is", error);
    }
}
// const connectToMongo = () => {
//     mongoose.connect(mongoURI, () => {
//         console.log("Connected to mongo successfully");
//     })
// }

module.exports = connectToMongo;