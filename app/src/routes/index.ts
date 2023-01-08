import { Router } from "express";
import Users from "./users";

export default function (router: Router): void {
  Users(router);
}
