const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // DeleteMany
  // db.collection('Todos').deleteMany({text: 'Diner'}).then((result) => {
  //   console.log(result);
  // });

  // DeleteOne
  // db.collection('Todos').deleteOne({text: 'Diner'}).then((result) => {
  //   console.log(result);
  // });

  // FindOneAndDelete
  // db.collection('Todos').findOneAndDelete({text: 'Diner'}).then((result) => {
  //   console.log(result);
  // });

  //db.collection('Users').deleteMany({name: 'Steff'});

  // db.collection('Users').findOneAndDelete({
  //   _id: new ObjectID("5890c1e7edf54e06c2f818ad")
  // }).then((results) => {
  //   console.log(JSON.stringify(results, undefined, 2));
  // });

  //db.close();
});
