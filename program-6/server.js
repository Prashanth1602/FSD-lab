const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(url);

const dbName = 'StudentDB';

async function main(){

 await client.connect();

 console.log("Connected to MongoDB");

 const db = client.db(dbName);

 const collection = db.collection('students');

 await collection.insertOne({
  name:"Sandeep",
  age:30,
  course:"B.Tech"
 });

 await collection.insertMany([
  {name:"Rahul",age:21,course:"B.Sc"},
  {name:"Anita",age:22,course:"B.Com"}
 ]);

 const data = await collection.find().toArray();

 console.log(data);

 await collection.updateOne(
  {name:"Sandeep"},
  {$set:{age:31}}
 );

 await collection.deleteOne({name:"Rahul"});

 await client.close();

}

main();
