import * as companyServices from "../services/company.service.js";

export const getCompanies = (req, res) => {
    companyServices
    .getCompanies()
    .then((result) => {
        res.status(200).json({
            message: "companies ok",
            data: result[0], 
        });
    }).catch((err) => {
        res.status(500).send(err)
    })
}

export const getCompany = (req, res) => {
    const {id} = req.params;
    companyServices
    .getCompany(id)
    .then((result) => {
        res.status(200).json({
            message: "company ok",
            data: result[0], 
        });
    }).catch((err) => {
        res.status(500).send(err)
    })
}

export const createCompany = (req, res) => {
    const company = req.body;
    companyServices
    .createCompany(company)
    .then(() => {
        res.status(200).json({
            message: "company created",
            data: company, 
        });
    }).catch((err) => {
        res.status(500).send(err)
    })
}

export const updateCompany = (req, res) => {
    const company = req.body;
    const {id} = req.params;
    companyServices
    .updateCompany(id, company)
    .then(() => {
        res.status(200).json({
            message: "company updated",
            data: company, 
        });
    }).catch((err) => {
        res.status(500).send(err)
    })
}

export const deleteCompany = (req, res) => {
    const {id} = req.params;
    companyServices
    .deleteCompany(id)
    .then(() => {
        res.status(200).json({
            message: "company deleted",
        });
    }).catch((err) => {
        res.status(500).send(err)
    })
}