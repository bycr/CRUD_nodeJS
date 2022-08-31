import db from "../config/db.js";

export const getCompanies = () => {
    return new Promise((resolve, reject) => {
        const query = 'select * from company';
        db.execute(query)
            .then((result) => {
                resolve(result)
            })
            .catch((error) => {
                reject(error)
            });
    });
};

export const getCompany = (id) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * from company WHERE id = ?";
        db.execute(query, [id])
            .then((result) => {
                resolve(result)
            })
            .catch((error) => {
                reject(error)
            });
    });
};

export const createCompany = (company) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO company(name, website, foundation ) values(?, ?, ?)";
        const {name, website, foundation} = company;
        db.execute(query, [name, website, foundation])
            .then((result) => {
                resolve(result)
            })
            .catch((error) => {
                reject(error)
            });
    });
};

export const updateCompany = (id, company) => {
    return new Promise((resolve, reject) => {
        const query = "UPDATE company SET name = ?, website = ?, foundation = ? WHERE id = ?";
        const {name, website, foundation} = company;
        db.execute(query, [name, website, foundation, id])
            .then((result) => {
                resolve(result)
            })
            .catch((error) => {
                reject(error)
            });
    });
};


export const deleteCompany = (id) => {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM company WHERE id = ?";
        db.execute(query, [id])
            .then((result) => {
                resolve(result)
            })
            .catch((error) => {
                reject(error)
            });
    });
};

