var express =  require("express");
var adminRouter = express();

adminRouter.get("/", (request, response)=>
{
    response.send("This is Admin Page");
});

adminRouter.get("/:ANo", (request, response)=>
{
    response.send("You looked for Admin No " + request.params.ANo);
});

module.exports = adminRouter;
