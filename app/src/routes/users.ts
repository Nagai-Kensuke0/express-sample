import { Router, Request, Response, NextFunction } from "express";
import UsersPost from "@/controllers/users/post"
import UsersGet from "@/controllers/users/get"
import UsersUserIdGet from "@/controllers/users/userId/get"
import UsersUserIdDelete from "@/controllers/users/userId/delete"

var router = Router();

router.post('/', UsersPost)
router.get('/', UsersGet)
router.get('/:userId', UsersUserIdGet)
router.delete('/:userId', UsersUserIdDelete)

module.exports = router;
