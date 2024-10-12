require("dotenv").config();
const express = require("express");
const sequelize = require("./db.js");
const models = require("./models/models.js");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const router = require("./routes/index.js");
const errorHandler = require("./middleware/ErrorHandlingMiddleware.js");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Для отправления запросов с браузера
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api/v1", router);

app.use(errorHandler);
const start = async () => {
  try {
    // Для подключения к БД
    await sequelize.authenticate();
    // Для сверки состояния БД со схемой данных
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
