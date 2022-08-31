const swaggerDocumentation = {
    openapi: "3.0.0",
    info: {
        title: "API companies",
        version: '0.0.1',
        description: "Esta es una API de prueba de consumo"
    },

    servers: [
        {
            url: "http://localhost:5000",
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
        "/api/": {
            get: {
                tags: ["Company"],
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