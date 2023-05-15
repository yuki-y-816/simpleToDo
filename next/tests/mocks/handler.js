import { rest } from "msw";

export const handlers = [
    rest.post("http://host.docker.internal:3000/login", (req, res, ctx) => {
        return res(
            ctx.json({
                authenticated: true,
                data: {
                    user: {
                        id: "8n3CeEjw",
                        name: "Yuki",
                        email: "test@test.com",
                    },
                }
            })
        )
    })
]
