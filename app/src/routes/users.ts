import { Router } from "express";
import UsersPost from "@/controllers/users/post";
import UsersGet from "@/controllers/users/get";
import UsersUserIdGet from "@/controllers/users/userId/get";
import UsersUserIdDelete from "@/controllers/users/userId/delete";

export default function (router: Router): void {
  router.post("/users", UsersPost);
  router.get("/users", UsersGet);
  router.get("/users/:userId", UsersUserIdGet);
  router.delete("/users/:userId", UsersUserIdDelete);
}
