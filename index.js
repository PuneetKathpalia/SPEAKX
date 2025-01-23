import express from 'express';
import dotenv from 'dotenv';
import questionRoutes from './routes/routes.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())


app.use("/api", questionRoutes);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}`);
});
