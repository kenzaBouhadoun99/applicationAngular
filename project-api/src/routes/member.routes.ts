import { Router } from "express";
import MemberController from "../controllers/member.controller";

class MemberRoutes {
  router = Router();
  controller = new MemberController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    // Create a new Tutorial
    this.router.post("/create", this.controller.create);

    // Retrieve all Tutorials
    this.router.get("/getall", this.controller.findAll);

    // Retrieve a single Tutorial with id
    this.router.get("/get/:id", this.controller.findOne);

    // Update a Tutorial with id
    this.router.put("/update/:id", this.controller.update);

    // Delete a Tutorial with id
    this.router.delete("/delete/:id", this.controller.delete);
  }
}

export default new MemberRoutes().router;
