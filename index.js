// // import { obj } from "./app.js";
// // import fs from "fs"

// // console.log("sam")

// // console.log(obj.z());
// // fs.writeFileSync("code.txt" , "this is code file")
// import http from "http";
// import { data } from "./data.js";
// import fs from "fs";
// import path, { dirname } from "path";
// import { fileURLToPath } from "url";
// import express from "express";

// http
//   .createServer((req, resp) => {
//     resp.writeHead(200, { "content-Type": "applicationjson" });
//     resp.write(JSON.stringify(data));
//     resp.end();
//   })
//   .listen("2000");

// // add file and remove file with command line
// // const input = process.argv
// // console.log(input)

// // fs.writeFileSync(input[2], input[3])

// // fs.unlinkSync("apple.txt" , "this is a file")

// //------- path topic

// // const fileName = fileURLToPath(import.meta.url);
// // const dirName = path.dirname(fileName);
// // const pathName = path.join(dirName, "files")

// // add file in loop
// // for (let i = 0; i < 5; i++) {

// //     fs.writeFileSync(`${pathName}/hello${i}.txt`, `this hello ${i} new file `)

// // }

// // read list file
// // fs.readdir(pathName,(err , files)=>{
// //     console.log(files);
// // })

// // now i want view file one by one not in array so used for each

// // fs.readdir(pathName, (err, files)=>{
// //     files.forEach((item)=>{
// //         console.log(item );
// //     })
// // })

// // crud work

// // const fileName = fileURLToPath(import.meta.url)
// // const dirName = path.dirname(fileName)
// // const pathName = path.join(dirName, "crud")
// // const innerfile = `${pathName}/apple.txt`

// // console.log(innerfile);

// // fs.writeFileSync(`${pathName}/apple.txt`, "this is a apple file")
// // fs.readFile(fileName,"utf8",(err, readfile)=>{
// //     console.log(readfile);

// // })

// // append
// // fs.appendFile(innerfile,` this is new apple file `,(err)=>{
// //     if(!err) console.log("file is updated");
// // })

// // // rename
// // fs.rename(innerfile, `${pathName}/fruits.txt`, (err)=>{
// //     if(!err) console.log("updated")
// // })

// // let a = 10
// // let b = 0

// // // setTimeout(()=>{
// // //     b = 30
// // // },2000)

// // // promise
// // const waitingData = new Promise((resolve , reject)=>{
// //     setTimeout(()=>{
// //      resolve(30)
// //     },6000)
// // })

// // console.log(a+b)

// // waitingData.then((data)=>{
// //     console.log(a+data)
// // })

// const app = express();
// // app.get("", (req , res )=>{
// // res.send("this is a car");

// // })

// // app.get("/about", (req, resp)=>{
// //     console.log(req.query)
// //     // resp.send("<h2>this is about us page</h2>")

// //         resp.send(`welcome ${req.query.name}`)

// // })

// // -------load html file

// const fileName = fileURLToPath(import.meta.url);
// const directoryName = path.dirname(fileName);
// const pathName = path.join(directoryName, "public");

// // app.use(express.static(pathName))

// // second way to render page

// // ejs template
// app.set("view engine", "ejs");

// app.get("/profile", (_, response) => {
//   const data = {
//     name: "sam",
//     email: "sumamaislam800@gmail.com",
//     skils:["React JS","Next JS","Tailwind css"]
//   };
//   response.render(`profile`, { data });
// });
// app.get("", (_, response) => {
//   response.sendFile(`${pathName}/index.html`);
// });

// app.get("/about", (_, response) => {
//   response.sendFile(`${pathName}/about.html`);
// });
// app.get("*", (_, response) => {
//   response.sendFile(`${pathName}/nopage.html`);
// });
// app.listen("4200");

// import express from 'express'
import { reqFilter } from "./middleware.js";
import { MongoClient } from "mongodb";
import dbConnect from "./mongoDb.js";
import mongoose from "mongoose";

// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// const dbName = 'Ecom';

// async function getData(){
//    await client.connect();
//     console.log("Connected successfully to server");
//     let db = client.db(dbName);
//     let collection = db.collection("products");
//     let response = await collection.find({}).toArray();
//     console.log(response)

// }
// getData()

// dbConnect().then((resp=>{
//     resp.find().toArray().then((data)=>{
//         console.log(data);

//     })
// }))

// const main = async ()=>{
//     let data = await dbConnect()
//      data =  await data.find().toArray()
//     // data = await data.find({name:"chair"}).toArray()
//      console.log(data);

// }
// main();

// const app = express()
// const route = express.Router()

// route.use(reqFilter);

// app.use(reqFilter)
// app.get("" , reqFilter,(req, res) => {
//     res.send("welcome home page")
// })

// route.get("" ,(req, res) => {
//     res.send("welcome home page")
// })

// app.get("/about", (req, res) => {
//     res.send("welcome about page")
// })

// app.listen("3000")
// app.use("/",route);

// const main = async () => {
//     await mongoose.connect("mongodb://localhost:27017/Ecom")
//     const ProductSchema =  new mongoose.Schema({
//         name: String

//     })

//     const producsModel = mongoose.model("products", ProductSchema)
//     let data = new producsModel({name:""})
// }

// const dbConnectWithMongoose = async () => {
//     await mongoose.connect("mongodb://localhost:27017/Ecom")
// }
// dbConnectWithMongoose()
// const productSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//     category: String,
//     brand: String,
// })
// const SaveInDb = async () => {
//     const product = mongoose.model("products", productSchema)
//     let data = new product({
//         name: "pipe",
//         price: 900,
//         category: "Centary",
//         brand: "japani"

//     })
//     let result = await data.save()
//     console.log(result, "result");

// }

// const UpdateDb = async () => {
//     const product = mongoose.model("products", productSchema)
//     let data = await product.updateOne({
//         name: "pipe"
//     }, {
//         $set: { name: "water pipe" }
//     })
//     console.log(data);
// }

// const Delete = async () =>{
//     const product = mongoose.model("products" , productSchema);
//     let deleteData = await product.deleteOne({
//         name:"dressing"
//     })
//     console.log(deleteData);

//  }

//  const readDb = async ()=>{
//     const product =  mongoose.model("products", productSchema);
//     let readData = await product.find()

//     console.log(readData);

//  }
//  readDb()

import express from "express";
import { connectionDataBase } from "./config.js";
import { Productmodel } from "./product.js";
import multer from "multer";

const app = express();
app.use(express.json());

app.post("/", async (req, res) => {
    try {
        const existingProduct = await Productmodel.findOne({ name: req.body.name });
        if (existingProduct) {
            res.status(400).send({ message: "name is already exists" });
        } else {
            let data = new Productmodel(req.body);
            let result = await data.save();
            console.log(result);
            res
                .status(200)
                .send({ message: "Data added successfully", data: result });
        }
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "An error occurred", error: error.message });
    }
});

app.get("/", async (_, res) => {
    try {
        let data = await Productmodel.find();
        res
            .status(200)
            .send({ message: "fetched successfully", productData: data });
    } catch (error) {
        res
            .status(500)
            .send({ message: "An error occurred", error: error.message });
    }
});

app.delete("/:id", async (req, res) => {
    try {
        let deleteData = await Productmodel.deleteOne({
            id: req.params.id,
        });
        res
            .status(200)
            .send({ message: "delete successfully", dataDelete: deleteData });
    } catch (error) {
        res
            .status(500)
            .send({ message: "An error occurred", error: error.message });
    }
});

app.put("/:id", async (req, res) => {
    try {
        let updateData = await Productmodel.updateOne(
            { _id: req.params.id },
            {
                $set: req.body,
            }
        );
        res
            .status(200)
            .send({ message: "update successfully", update: updateData });
    } catch (error) {
        res
            .status(500)
            .send({ message: "An error occurred", error: error.message });
    }
});

// app.get("/search/:key", async (req, res) => {
//     try {
//         console.log(req.params.key);
//         const productExists = Productmodel.find({
//             "name":req.body.name,
//             "category":req.body.category,
//             "brand:" :req.body.brand       })
//             if(productExists.length > 0 ){

//                 let searchData = await Productmodel.find({
//                     "$or":[
//                         {"name":{$regex : req.params.key,  $options: "i" }},
//                         {"brand":{$regex : req.params.key,  $options: "i" }},
//                         {"category":{$regex : req.params.key,  $options: "i" }},
//                         // {"price":{$regex : req.params.key}}
//                     ]
//                 }); // This currently fetches all products
//                 res.status(200).send({message:"search Sucessfully", search : searchData});
//             }
//             else{
//                 res.status(400).send({message:"product not found"})
//             }
//             } catch (error) {
//         console.error("Error:", error);
//         res.status(500).send({message:"server error", error:error.message});
//     }
// });

app.get("/search/:key", async (req, res) => {
    try {
        const searchKey = req.params.key;

        // Search for products matching the key
        let searchData = await Productmodel.find({
            $or: [
                { name: { $regex: searchKey, $options: "i" } }, // 'i' for case-insensitive search
                { brand: { $regex: searchKey, $options: "i" } },
                { category: { $regex: searchKey, $options: "i" } },
                { price: { $regex: searchKey, $options: "i" } }
            ],
        });

        if (searchData.length > 0) {
            res
                .status(200)
                .send({ message: "Search successfully", search: searchData });
        } else {
            res.status(400).send({ message: "Product not found" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ message: "Server error", error: error.message });
    }
});


// uploader file
const upload = multer ({
    storage:multer.diskStorage({
        destination:function(req, file ,cb){
            cb(null , "public")
        },
        filename:function(req , file , cb){
            cb(null , file.fieldname + "-"+ Date.now() + ".jpg")
        }

    })
}).single("user_file")
    
    app.post("/upload" , upload,(req , res)=>{
      res.send("file.upload")  
    })

app.listen(4200, () => {
    console.log("Server running on port 4200");
});
