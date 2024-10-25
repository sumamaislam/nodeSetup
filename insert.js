import dbConnect from "./mongoDb.js"

const insert = async()=>{
    const db = await dbConnect()
   const result = await db.insertOne(
    {
        name:"coubard",
        brand:"expo",
        price:"400",
        category:"furniture"
    }
   )
   console.log(result);
   
}

insert()
