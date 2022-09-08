const swaggerDocumentation = {
    openapi: "3.0.0",
    info: {
        title: "API companies",
        version: '0.0.1',
        description: "Esta es una API de prueba de consumo"
    },

    servers: [
        {
            url: "http://192.168.1.82:5000",
            description: "Local dev",
        },
        {
            url: "http://producion:5000",
            description: "Production dev",
        },
    ],
    tags: [
        {
            name: "Company",
            description: "Company routes",
        }
    ],

    paths: {
        "/api/company": {
            get: {
                tags: ["company"],
                description: "List all of Companies",
                responses: {
                    200: {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};

export default swaggerDocumentation;