// CRUD operations for the project --

const {MongoClient, ObjectID} = require("mongodb");
const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "franklin-ford-database"


const id = new ObjectID();
// console.log(id.getTimestamp());


MongoClient.connect(connectionURL, {
  useNewUrlParser: true,
}, (error, client) => {
  if(error){
    return console.log("Unable to connect to the db.");
  }
  const db = client.db(databaseName);
  db.collection("metadata_from_bot").insertOne({
    _id: id,
    tweetId: "vdfvdf----",
    redditId: "vdfvffdvd",
  }, (error, result) => {
    if(error){
      return console.log("unable to insert users");
    }
    console.log(result.ops);
    console.log(result.insertedCount);
})

  // db.collection("metadata_from_bot").findOne({tweetId: "vdfvdf----"}, (error, data) => {
  //   if(error){
  //     return console.log("unable to fetch");
  //   }
  //   console.log(data);
  //   // searching for an empty document = null
  // })

  // ---- READ
  //   db.collection("metadata_from_bot").find({tweetId: "tweetId"}).toArray((error, data) => {
  //     console.log(data);
  //   });
  //
  //
  //  // fetch docs with a bolean also
  //   db.collection("metadata_from_bot").find({tweetId: "tweetId"}).count((error, data) => {
  //     console.log(data);
  //   });
  //
  // })


  /// ---- UPDATE
  // db.collection("metadata_from_bot").updateOne({
  //   _id: new ObjectID("5cdca1753bc3e48141aa2a0f")
  // }, {
  //   $set: {
  //     name: "updating/creating a name here--"
  //   }
  // })
  //

    // const updatePromise = db.collection("metadata_from_bot").update({
    //   _id: new ObjectID("5cdca1753bc3e48141aa2a0f")
    // }, {
    //   $set: {
    //     name: "updating/creating a name here"
    //   }
    // })
    //
    // updatePromise.then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //   console.log(error);
    // })
