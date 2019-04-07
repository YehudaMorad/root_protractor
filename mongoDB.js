const mongoose = require('mongoose');

mongoose.connect('mongodb://172.18.0.3:27017');
 
var db = mongoose.connection;

db.on('connecting', function() {
  console.log('connecting to MongoDB...');
});

db.on('error', function(error) {
  console.error('Error in MongoDb connection: ' + error);
  mongoose.disconnect();
});
db.on('connected', function() {
  console.log('MongoDB connected!');
});
db.once('open', function() {
  console.log('MongoDB connection opened!');
});
db.on('reconnected', function () {
  console.log('MongoDB reconnected!');
});
db.on('disconnected', function() {
  console.log('MongoDB disconnected!');
//   mongoose.connect(dbURI, {server:{auto_reconnect:true}});
});


// mongoose.connect('mongodb://172.18.0.3:27017/icu', async function(){
// await mongoose.connection.dropDatabase();

// });

