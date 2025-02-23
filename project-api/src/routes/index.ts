import { Application } from "express";
import memberRoutes from "./member.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/api/member", memberRoutes)
  }
}
