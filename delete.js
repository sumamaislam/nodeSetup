import dbConnect from "./mongoDb.js";

const deleteFun = async ()=>{
    let db = await dbConnect()
    let result = await  db.deleteOne({
        name:"coubard"
    }
    
) 
console.log(result);
}
deleteFun();