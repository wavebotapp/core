const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
    .then(() => { console.log("DB Connect Successfully") })
    .catch(() => { console.log("DB Not Connected") })

module.exports = mongoose