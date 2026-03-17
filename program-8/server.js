const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function runOperations() {

 try {

  await client.connect();
  console.log("Connected to MongoDB");

  const db = client.db("CollegeDB");
  const collection = db.collection("students");

  // COUNT
  const totalCount = await collection.countDocuments();
  console.log("Total Documents:", totalCount);

  // LIMIT
  const limitedData = await collection.find().limit(3).toArray();
  console.log("Limit (3 Documents):");
  console.log(limitedData);

  // SORT
  const sortedData = await collection.find().sort({ marks: -1 }).toArray();
  console.log("Sorted by Marks Descending:");
  console.log(sortedData);

  // SKIP
  const skippedData = await collection.find().skip(2).toArray();
  console.log("After Skipping 2 Documents:");
  console.log(skippedData);

 }
 catch(err){
  console.error(err);
 }
 finally{
  await client.close();
 }

}

runOperations();
