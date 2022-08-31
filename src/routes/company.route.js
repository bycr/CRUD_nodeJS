import { Router } from "express";

import { getCompanies, getCompany, createCompany, updateCompany, deleteCompany } from "../controllers/company.controller.js";
const companyRouter = Router();

companyRouter.get("/", getCompanies);

companyRouter.get("/:id", getCompany);

companyRouter.post("/", createCompany);

companyRouter.put("/:id", updateCompany);

companyRouter.delete("/:id", deleteCompany);

export default companyRouter;