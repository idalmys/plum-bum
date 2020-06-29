const router = require("express").Router();
const Entry = require("../controllers/entriesController");

router.route("/")
.get(Entry.getEntry)
.post(Entry.createEntries);

router
  .route("/:email")
 /* .get(Entry.getEntrybyemail)*/
  .post(Entry.createEntry)
  .put(Entry.updateEntry)
  .delete(Entry.deleteEntry);

module.exports = router;