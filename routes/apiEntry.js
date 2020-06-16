const router= require("express").Router();
const Entry=require("../controllers/entriesController")


router.route("/")
    .get(Entry.getEntry)
    .post(Entry.createEntry)

router.route("/:id")
    .put(Entry.updateEntry)
    .delete(Entry.deleteEntry)

   
module.exports=router