function rohit(req,res,next){
  console.log("rohit Middleware");
  next()
}
function virat(req,res,next){
  console.log("virat Middleware");
  next()
}
module.exports={
  rohit,virat
}