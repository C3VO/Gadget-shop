const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");

const PORT = 3500;

app.use(cors());

app.use(express.json()); // Для обработки JSON-запросов

app.post("/createFile", (req, res) => {
  const { fileName, fileContent } = req.body; // Извлекаем имя и содержание файла из тела запроса

  if (!fileName || !fileContent) {
    return res.status(400).send("Имя файла и содержание обязательны.");
  }

  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.error("Ошибка при создании файла:", err);
      res.status(500).send("Ошибка при создании файла");
    } else {
      console.log("Файл успешно создан");
      res.status(200).send("Файл успешно создан");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
