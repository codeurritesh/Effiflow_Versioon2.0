const mongoose = require('mongoose');

// Set strictQuery to false to address the deprecation warning
mongoose.set('strictQuery', false);

const db = process.env.DB_CLOUD_LINK;

mongoose.connect(db).then(() => {
    console.log("DB successfully connected!");
}).catch((error) => {
    console.log("Error in db", error.message);
});
