const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
    .then(() => { console.log("DB Connect Successfully") })
    .catch((err) => { console.log("DB Not Connected",err) })

module.exports = mongoose