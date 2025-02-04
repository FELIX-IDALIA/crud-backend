const create = require("../crud/create");
const { readAll, readUsersAboveTen, readByEmail, readOne } = require("../crud/read");
const { updatePut, updatePatch } = require("../crud/update");
const {deleteMany, deleteOne} = require("../crud/delete");
const express = require("express");
const router = express.Router();

router.post("/create-user", create);
router.get("/read-one/:id", readOne);
router.get("/read-by-email/", readByEmail);
router.get("/read-all", readAll);
router.get("/read-users-above", readUsersAboveTen);
router.patch("/update-by-patch/:id", updatePatch);
router.put("/update-by-put/:id", updatePut);
router.delete("/delete-one/:id", deleteOne);
router.delete("/delete-many", deleteMany);

module.exports = router;
