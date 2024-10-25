import dbConnect from "./mongoDb.js";


const main = async ()=>{
   let db = await dbConnect()
  let result = await db.updateMany(
        {
price:450
    },{
        $set:{price:500}
    }
)
console.log(result);

}
main()