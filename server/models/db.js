const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if(!err) { console.log('MomgoDB connection suceeded.'); }
    else { console.log('Error in MomgoDB connection:'+ JSON.stringify(err,undefined,2)); }
});

require('./user.model');