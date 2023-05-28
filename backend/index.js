const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 4500;
const cors = require("cors");
const Student = require("./StudentSchema");

// const DB = process.env.DATABASE;
const DB = "mongodb://localhost:27017/ReddysDataBase";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log(`DB Connected Sucessfully`);
  })
  .catch((err) => {
    console.log(`${err}`);
  });

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.post("/form", async (req, res) => {
  const { id, name, totalMarks } = req.body;
  const formData = new Student({
    id,
    name,
    totalMarks,
  });
  //   console.log(formData);
  const hi = await formData.save();
  console.log(hi);
  res.send("Yes i got the Data");
});

// app.get("/", (req, res) => {
//   //   console.log("Tis is req.body", req.body);
//   res.send("Hello World!");
// });

app.post("/student_list", async (req, res) => {
  try {
    const data = await Student.find({});
    res.json({ list: data });
  } catch (error) {
    console.log("This is to become a very comman error", error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
