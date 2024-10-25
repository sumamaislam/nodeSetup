import { MongoClient } from "mongodb";

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url)
// console.log(client);

const dbName = "Ecom"

async function dbConnect(){
    await client.connect()
    let db = client.db(dbName)
    return db.collection("products");
}
export default dbConnect;