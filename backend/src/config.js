import dotenv from "dotenv";
dotenv.config();
export const mongoUri = process.env.MONGO_URI;
export const PORT = process.env.PORT;
export const corsOrigin = process.env.CORS_ORIGIN;
export const jwtSecretKey = process.env.JWT_SECRET_KEY;
export const jwtExpiresIn = process.env.JWT_EXPIRES_IN;
