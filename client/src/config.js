import dotenv from "dotenv"
dotenv.config()


export const BACKEND_URL= process.env.NODE_ENV === 'development'?"http://localhost5000/": "https://jamiecincinnatilifestlye.herokuapp.com/"
