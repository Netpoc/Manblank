import express from 'express';

const PORT = process.env.PORT || 4000;

const app = express();

app.listen(PORT, () => {
    console.log(`Express server is runnning on PORT: ${PORT}`);
})