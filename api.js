import express from "express"
import dbConnect from "./mongoDb.js"
import { ObjectId } from "mongodb";


const app = express()
app.use(express.json())
// async function main() {
//     try {
//         const dbData = await dbConnect();
        
//         // get api 
//         app.get("/", async (req, res) => {
//             try {
//                 let tableData = await dbData.find({}).toArray()
//                 res.status(200).send({message:"Data fetched successfully", data:tableData})
//             } catch (error) {
//                 res.status(500).send({ message: "Error fetching data", error })
//             }
//         })
        
//         // post api 
//         app.post("/", async (req, res)=>{
//             try {
//                 const newData = req.body 
//                 let insertData = await dbData.insertOne(newData);
//                 res.status(201).send({message:"data add successfully", data:insertData})

                 
//             } catch (error) {
//                 res.status(500).send({message:"Error insert data", error})
//             }
//         })

//         //Edit Api
//         app.put("/:id", async (req, res) => {
//             try {
//                 const id = req.params.id;
        
//                 if (!ObjectId.isValid(id)) {
//                     return res.status(400).send({ message: "Invalid ID format" });
//                 }
        
//                 const inserData = req.body;
//                 const editData = await dbData.updateOne(
//                     { _id: new ObjectId(id) },
//                     { $set: inserData }
//                 );
        
//                 if (editData.matchedCount === 0) {
//                     return res.status(404).send({ message: "No document found with the given ID" });
//                 }
        
//                 res.status(200).send({ message: "Data updated successfully", data: editData });
//             } catch (error) {
//                 console.error("Error updating data:", error);
//                 res.status(500).send({ message: "An error occurred while updating the data" } , error);
//             }
//         });
        
//         // delete api
//         app.delete("/:id" , async (req, res)=>{
//             try {
//                 const id = req.params.id

//                 if(!ObjectId.isValid(id)){
//                    return  res.status(400).send({message:"Invalid ID format"})
//                 }

//                 const dellData = await dbData.deleteOne(
//                     {_id : new ObjectId(id) }
//                 );
//                 return res.status(200).send({message:"Delete Sucessfully", data:dellData})
//             } catch (error) {
//                 res.status(500).send({ message: "An error occurred while delete the data" }, error);  
//             }

//         })

//         // server start
//         app.listen("4200", ()=>{
//             console.log("Server running on port 4200");
            
//         })

//     } catch (error) {
//         res.status(500).send({message:"Internal Server Error", error});
//     }

   
// }



// main();