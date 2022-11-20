import { Router, Request, Response, NextFunction } from "express";
import UsersPost from "../controllers/users/post"

var express = require('express');
var router = Router();

router.post('/', UsersPost)

/* GET users listing. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.send('respond with a resource');
});

module.exports = router;
