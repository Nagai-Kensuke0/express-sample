import { Router, Request, Response, NextFunction } from "express";
import UsersPost from "@/controllers/users/post"
import UsersUserIdDelete from "@/controllers/users/userId/delete"

var express = require('express');
var router = Router();

router.post('/', UsersPost)
router.delete('/:userId', UsersUserIdDelete)

module.exports = router;
