import { Router } from "express";

export default function (router: Router): void {
  require("./users").default(router);
}