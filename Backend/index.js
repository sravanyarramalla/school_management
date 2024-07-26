const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

const db = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "",
  database: "School_Management",
});

db.connect((err) => {
  if (err) {
    console.error("Unable to connect to DB:", err);
  } else {
    console.log("Database connected successfully");
  }
});

function queryPromise(sql, values = []) {
  return new Promise((resolve, reject) => {
    db.query(sql, values, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

app.post("/teachers", async (req, res) => {
  try {
    var { Name, Department, Gender, Education, Mobile, Email, Joining_Date } =
      req.body;
    console.log("54req.body", req.body);
    if (
      !Name ||
      !Department ||
      !Gender ||
      !Education ||
      !Mobile ||
      !Email ||
      !Joining_Date
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const School_Management = [
      Name,
      Department,
      Gender,
      Education,
      Mobile,
      Email,
      Joining_Date,
    ];
    const SQL = `
      INSERT INTO teachers (Name, Department, Gender, Education, Mobile, Email, Joining_Date)
      VALUES (?, ?, ?, ?, ?, ?, ?);
    `;

    const result = await queryPromise(SQL, School_Management);
    res.status(201).json({
      id: result.insertId,
      Name,
      Department,
      Gender,
      Education,
      Mobile,
      Email,
      Joining_Date,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create data" });
  }
});

app.get("/teachers", async (req, res) => {
  try {
    const SQL = "SELECT * FROM teachers";

    const result = await queryPromise(SQL);

    if (result.length === 0) {
      res.status(404).json({ msg: "No matching data found" });
    } else {
      res.status(200).json(result);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch the data details" });
  }
});

app.get("/teachers/:id", async (req, res) => {
  try {
    // Get the ID parameter from the request
    const { id } = req.params;

    // Build the query
    const SQL = "SELECT * FROM teachers where Id = ?";
    console.log("944req.params;", req.params);

    // Execute the query
    const result = await queryPromise(SQL, [id]);

    // Check if any records were found
    if (result.length === 0) {
      res.status(404).json({ msg: "No matching data found" });
    } else {
      res.status(200).json(result);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch the data details" });
  }
});

app.put("/teachers/:Id", async (req, res) => {
  try {
    // Collect all the data that comes in req.body
    const { Name, Department, Gender, Education, Mobile, Email, Joining_Date } =
      req.body;
    const { Id } = req.params;

    // Validation
    if (
      !Name ||
      !Department ||
      !Gender ||
      !Education ||
      !Mobile ||
      !Email ||
      !Joining_Date
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const SQL =
      "UPDATE teachers SET Name = ?, Department = ?, Gender = ?, Education = ?, Mobile = ?, Email = ?, Joining_Date = ? WHERE Id = ?";

    // Executing the query
    const result = await queryPromise(SQL, [
      Name,
      Department,
      Gender,
      Education,
      Mobile,
      Email,
      Joining_Date,
      Id,
    ]);

    res.status(200).json({ msg: "Record updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update data" });
  }
});

app.delete("/teachers/:id", async (req, res) => {
  try {
    // Get the ID parameter from the request
    const { id } = req.params;

    // Build the query
    const SQL = "DELETE FROM teachers WHERE id = ?";

    // Execute the query
    const result = await queryPromise(SQL, [id]);

    // Check if any records were affected
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "No matching data found" });
    } else {
      // Successfully deleted the record
      return res.status(200).json({ message: "Teachers deleted successfully" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to delete the data" });
  }
});

app.post("/students", async (req, res) => {
  try {
    // Collect all the data that comes in req.body
    var { Roll_No, Name, Class, Section, Mobile, Addmition_Date } = req.body;
    // console.log("req.body", req.body);

    // Validation: Check if all fields are provided && ||
    if (!Roll_No || !Name || !Class || !Section || !Mobile || !Addmition_Date) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const School_Management = [
      Roll_No,
      Name,
      Class,
      Section,
      Mobile,
      Addmition_Date,
    ];
    const SQL = `
      INSERT INTO students (Roll_No, Name, Class, Section, Mobile, Addmition_Date)
      VALUES (?, ?, ?, ?, ?, ?);
    `;

    // Execute the query
    // console.log("139School_Management.body", School_Management);

    const result = await queryPromise(SQL, School_Management);
    // console.log("139result", result);

    res.status(201).json({
      // msg: "Record created successfully",
      // id: result.insertId,
      Roll_No,
      Name,
      Class,
      Section,
      Mobile,
      Addmition_Date,
    });

    // res.status(201).json({
    //   msg: "Record created successfully",
    //   id: result.insertId,
    // });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create data" });
  }
});

app.get("/students", async (req, res) => {
  try {
    // Get the ID parameter from the request
    // const { Id } = req.params;

    // Build the query
    const SQL = "SELECT * FROM students";

    // Execute the query
    const result = await queryPromise(SQL);

    // Check if any records were found
    if (result.length === 0) {
      res.status(404).json({ msg: "No matching data found" });
    } else {
      res.status(200).json(result);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch the data details" });
  }
});

app.get("/students/:id", async (req, res) => {
  try {
    // Get the ID parameter from the request
    const { id } = req.params;

    // Build the query
    const SQL = "SELECT * FROM students where Id = ?";
    console.log("944req.params;", req.params);

    // Execute the query
    const result = await queryPromise(SQL, [id]);

    // Check if any records were found
    if (result.length === 0) {
      res.status(404).json({ msg: "No matching data found" });
    } else {
      res.status(200).json(result);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch the data details" });
  }
});

app.put("/students/:Id", async (req, res) => {
  try {
    const { Roll_No, Name, Class, Section, Mobile, Addmition_Date } = req.body;
    const { Id } = req.params;

    if (!Roll_No || !Name || !Class || !Section || !Mobile || !Addmition_Date) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const SQL = `
      UPDATE students
      SET Roll_No = ?, Name = ?, Class = ?, Section = ?, Mobile = ?, Addmition_Date = ?
      WHERE Id = ?;
    `;

    const result = await queryPromise(SQL, [
      Roll_No,
      Name,
      Class,
      Section,
      Mobile,
      Addmition_Date,
      Id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Record not found" });
    }

    res.status(200).json({ msg: "Record updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update data" });
  }
});
app.delete("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const SQL = "DELETE FROM students WHERE id = ?";

    const result = await queryPromise(SQL, [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "No matching data found" });
    } else {
      return res
        .status(200)
        .json({ message: "Students data deleted successfully" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to delete the data" });
  }
});

app.post("/staff", async (req, res) => {
  try {
    // Collect all the data that comes in req.body
    var { Name, Designation, Mobile, Email, Address, Joining_Date } = req.body;
    // console.log("req.body", req.body);

    // Validation: Check if all fields are provided && ||
    if (
      !Name ||
      !Designation ||
      !Mobile ||
      !Email ||
      !Address ||
      !Joining_Date
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const School_Management = [
      Name,
      Designation,
      Mobile,
      Email,
      Address,
      Joining_Date,
    ];
    const SQL = `
      INSERT INTO staff ( Name, Designation, Mobile, Email, Address, Joining_Date)
      VALUES (?, ?, ?, ?, ?, ?);
    `;

    // Execute the query
    // console.log("139School_Management.body", School_Management);

    const result = await queryPromise(SQL, School_Management);
    // console.log("139result", result);

    res.status(201).json({
      // msg: "Record created successfully",
      // id: result.insertId,
      Name,
      Designation,
      Mobile,
      Email,
      Address,
      Joining_Date,
    });

    // res.status(201).json({
    //   msg: "Record created successfully",
    //   id: result.insertId,
    // });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create data" });
  }
});

app.get("/staff", async (req, res) => {
  try {
    const SQL = "SELECT * FROM staff ";

    const result = await queryPromise(SQL);

    if (result.length === 0) {
      res.status(404).json({ msg: "No matching data found" });
    } else {
      res.status(200).json(result);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch the data details" });
  }
});

app.get("/staff/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("482req.params;", req.params);

    const SQL = "SELECT * FROM staff where Id = ?";

    const result = await queryPromise(SQL, [id]);

    if (result.length === 0) {
      res.status(404).json({ msg: "No matching data found" });
    } else {
      res.status(200).json(result);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch the data details" });
  }
});

app.put("/staff/:Id", async (req, res) => {
  try {
    const { Name, Designation, Mobile, Email, Address, Joining_Date } =
      req.body;
    const { Id } = req.params;

    if (
      !Name ||
      !Designation ||
      !Mobile ||
      !Email ||
      !Address ||
      !Joining_Date
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const SQL = `
      UPDATE staff
      SET  Name = ?, Designation = ?, Mobile = ?, Email = ?, Address = ?,Joining_Date = ?
      WHERE Id = ?;
    `;

    const result = await queryPromise(SQL, [
      Name,
      Designation,
      Mobile,
      Email,
      Address,
      Joining_Date,
      Id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Record not found" });
    }

    res.status(200).json({ msg: "Record updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update data" });
  }
});

app.delete("/staff/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const SQL = "DELETE FROM staff WHERE id = ?";

    const result = await queryPromise(SQL, [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "No matching data found" });
    } else {
      return res
        .status(200)
        .json({ message: "Students data deleted successfully" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to delete the data" });
  }
});

app.post("/Department", async (req, res) => {
  try {
    // Collect all the data that comes in req.body
    var {
      Department,
      Head_of_Dep,
      Mobile,
      Email,
      Starting_Year,
      Stu_Capacity,
    } = req.body;
    // console.log("req.body", req.body);

    // Validation: Check if all fields are provided && ||
    if (
      !Department ||
      !Head_of_Dep ||
      !Mobile ||
      !Email ||
      !Starting_Year ||
      !Stu_Capacity
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const School_Management = [
      Department,
      Head_of_Dep,
      Mobile,
      Email,
      Starting_Year,
      Stu_Capacity,
    ];
    const SQL = `
      INSERT INTO deparment ( Department, Head_of_Dep, Mobile, Email, Starting_Year, Stu_Capacity)
      VALUES (?, ?, ?, ?, ?, ?);
    `;

    // Execute the query
    // console.log("139School_Management.body", School_Management);

    const result = await queryPromise(SQL, School_Management);
    // console.log("139result", result);

    res.status(201).json({
      // msg: "Record created successfully",
      // id: result.insertId,
      Department,
      Head_of_Dep,
      Mobile,
      Email,
      Starting_Year,
      Stu_Capacity,
    });

    // res.status(201).json({
    //   msg: "Record created successfully",
    //   id: result.insertId,
    // });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create data" });
  }
});

app.get("/Department", async (req, res) => {
  try {
    const SQL = "SELECT * FROM deparment ";

    const result = await queryPromise(SQL);

    if (result.length === 0) {
      res.status(404).json({ msg: "No matching data found" });
    } else {
      res.status(200).json(result);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch the data details" });
  }
});

app.get("/Department/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const SQL = "SELECT * FROM deparment where Id = ?";
    console.log("944req.params;", req.params);

    const result = await queryPromise(SQL, [id]);

    if (result.length === 0) {
      res.status(404).json({ msg: "No matching data found" });
    } else {
      res.status(200).json(result);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch the data details" });
  }
});
app.put("/Department/:Id", async (req, res) => {
  try {
    const {
      Department,
      Head_of_Dep,
      Mobile,
      Email,
      Starting_Year,
      Stu_Capacity,
    } = req.body;
    const { Id } = req.params;

    if (
      !Department ||
      !Head_of_Dep ||
      !Mobile ||
      !Email ||
      !Starting_Year ||
      !Stu_Capacity
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const SQL = `
      UPDATE deparment
      SET  Department = ?, Head_of_Dep = ?, Mobile = ?, Email = ?, Starting_Year = ?,Stu_Capacity = ?
      WHERE Id = ?;
    `;

    const result = await queryPromise(SQL, [
      Department,
      Head_of_Dep,
      Mobile,
      Email,
      Starting_Year,
      Stu_Capacity,
      Id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Record not found" });
    }

    res.status(200).json({ msg: "Record updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update data" });
  }
});

app.delete("/Department/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const SQL = "DELETE FROM deparment WHERE id = ?";

    const result = await queryPromise(SQL, [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "No matching data found" });
    } else {
      return res
        .status(200)
        .json({ message: "deparment data deleted successfully" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to delete the data" });
  }
});

app.post("/Holiday", async (req, res) => {
  try {
    var {
      Holiday_Title,
      Holiday_Type,
      Holiday_Start_Date,
      Holiday_End_Date,
      Holiday_Details,
    } = req.body;

    if (
      !Holiday_Title ||
      !Holiday_Type ||
      !Holiday_Start_Date ||
      !Holiday_End_Date ||
      !Holiday_Details
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const School_Management = [
      Holiday_Title,
      Holiday_Type,
      Holiday_Start_Date,
      Holiday_End_Date,
      Holiday_Details,
    ];
    const SQL = `
      INSERT INTO holi_days ( Holiday_Title, Holiday_Type, Holiday_Start_Date, Holiday_End_Date, Holiday_Details)
      VALUES (?, ?, ?, ?, ?);
    `;

    const result = await queryPromise(SQL, School_Management);

    res.status(201).json({
      Holiday_Title,
      Holiday_Type,
      Holiday_Start_Date,
      Holiday_End_Date,
      Holiday_Details,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create data" });
  }
});

app.get("/Holiday", async (req, res) => {
  try {
    const SQL = "SELECT * FROM holi_days";

    const result = await queryPromise(SQL);

    if (result.length === 0) {
      res.status(404).json({ msg: "No matching data found" });
    } else {
      res.status(200).json(result);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch the data details" });
  }
});

app.get("/Holiday/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const SQL = "SELECT * FROM holi_days where Id = ?";
    console.log("944req.params;", req.params);

    const result = await queryPromise(SQL, [id]);

    if (result.length === 0) {
      res.status(404).json({ msg: "No matching data found" });
    } else {
      res.status(200).json(result);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch the data details" });
  }
});

app.put("/Holiday/:Id", async (req, res) => {
  try {
    const {
      Holiday_Title,
      Holiday_Type,
      Holiday_Start_Date,
      Holiday_End_Date,
      Holiday_Details,
    } = req.body;
    const { Id } = req.params;

    if (
      !Holiday_Title ||
      !Holiday_Type ||
      !Holiday_Start_Date ||
      !Holiday_End_Date ||
      !Holiday_Details
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const SQL = `
      UPDATE holi_days
      SET  Holiday_Title = ?, Holiday_Type = ?, Holiday_Start_Date = ?, Holiday_End_Date = ?, Holiday_Details = ?
      WHERE Id = ?;
    `;

    // Executing the query
    const result = await queryPromise(SQL, [
      Holiday_Title,
      Holiday_Type,
      Holiday_Start_Date,
      Holiday_End_Date,
      Holiday_Details,
      Id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Record not found" });
    }

    res.status(200).json({ msg: "Record updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update data" });
  }
});

app.delete("/Holiday/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const SQL = "DELETE FROM holi_days WHERE id = ?";

    const result = await queryPromise(SQL, [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "No matching data found" });
    } else {
      return res
        .status(200)
        .json({ message: "deparment data deleted successfully" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to delete the data" });
  }
});

app.post("/Fees", async (req, res) => {
  try {
    var {
      Student_Name,
      Class,
      Fees_Type,
      Payment_Type,
      Status_Type,
      Date,
      Amount,
    } = req.body;

    if (
      !Student_Name ||
      !Class ||
      !Fees_Type ||
      !Payment_Type ||
      !Status_Type ||
      !Date ||
      !Amount
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const School_Management = [
      Student_Name,
      Class,
      Fees_Type,
      Payment_Type,
      Status_Type,
      Date,
      Amount,
    ];
    const SQL = `
      INSERT INTO fees_collection ( Student_Name, Class, Fees_Type, Payment_Type, Status_Type, Date, Amount)
      VALUES (?, ?, ?, ?, ?, ?, ?);
    `;

    // Execute the query
    // console.log("139School_Management.body", School_Management);

    const result = await queryPromise(SQL, School_Management);
    // console.log("139result", result);

    res.status(201).json({
      // msg: "Record created successfully",
      // id: result.insertId,
      Student_Name,
      Class,
      Fees_Type,
      Payment_Type,
      Status_Type,
      Date,
      Amount,
    });

    // res.status(201).json({
    //   msg: "Record created successfully",
    //   id: result.insertId,
    // });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create data" });
  }
});

app.get("/Fees", async (req, res) => {
  try {
    const SQL = "SELECT * FROM fees_collection ";

    const result = await queryPromise(SQL);

    if (result.length === 0) {
      res.status(404).json({ msg: "No matching data found" });
    } else {
      res.status(200).json(result);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch the data details" });
  }
});

app.get("/Fees/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const SQL = "SELECT * FROM fees_collection where Id=?";
    console.log("944req.params;", req.params);

    const result = await queryPromise(SQL, [id]);

    if (result.length === 0) {
      res.status(404).json({ msg: "No matching data found" });
    } else {
      res.status(200).json(result);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch the data details" });
  }
});

app.put("/Fees/:Id", async (req, res) => {
  try {
    const {
      Student_Name,
      Class,
      Fees_Type,
      Payment_Type,
      Status_Type,
      Date,
      Amount,
    } = req.body;
    const { Id } = req.params;

    if (
      !Student_Name ||
      !Class ||
      !Fees_Type ||
      !Payment_Type ||
      !Status_Type ||
      !Date ||
      !Amount
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const SQL = `
      UPDATE fees_collection
      SET  Student_Name = ?, Class = ?, Fees_Type = ?, Payment_Type = ?, Status_Type = ?, Date = ?, Amount = ?
      WHERE Id = ?;
    `;

    // Executing the query
    const result = await queryPromise(SQL, [
      Student_Name,
      Class,
      Fees_Type,
      Payment_Type,
      Status_Type,
      Date,
      Amount,
      Id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Record not found" });
    }

    res.status(200).json({ msg: "Record updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update data" });
  }
});

app.delete("/Fees/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const SQL = "DELETE FROM fees_collection WHERE id = ?";

    const result = await queryPromise(SQL, [id]);

    if (result.affectedRows === 0) {
      console.log("din1008", req.params);
      return res.status(404).json({ error: "No matching data found" });
    } else {
      console.log("din1012", req.params);
      return res
        .status(200)
        .json({ message: "Fees data deleted successfully" });
    }
  } catch (err) {
    console.log("din1018", req.params);
    console.error("errorin1019", err);
    return res.status(500).json({ error: "Failed to delete the data" });
  }
});

app.post("/Library", async (req, res) => {
  try {
    var { Student_Name, Class, Title, Asset_Type, Receive_Date, Submit_Date } =
      req.body;

    if (
      !Student_Name ||
      !Class ||
      !Title ||
      !Asset_Type ||
      !Receive_Date ||
      !Submit_Date
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const School_Management = [
      Student_Name,
      Class,
      Title,
      Asset_Type,
      Receive_Date,
      Submit_Date,
    ];
    const SQL = `
      INSERT INTO library ( Student_Name, Class, Title, Asset_Type, Receive_Date, Submit_Date)
      VALUES (?, ?, ?, ?, ?, ?);
    `;

    // Execute the query
    // console.log("139School_Management.body", School_Management);

    const result = await queryPromise(SQL, School_Management);
    // console.log("139result", result);

    res.status(201).json({
      // msg: "Record created successfully",
      // id: result.insertId,
      Student_Name,
      Class,
      Title,
      Asset_Type,
      Receive_Date,
      Submit_Date,
    });

    // res.status(201).json({
    //   msg: "Record created successfully",
    //   id: result.insertId,
    // });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create data" });
  }
});

app.get("/Library", async (req, res) => {
  try {
    const SQL = "SELECT * FROM library";

    const result = await queryPromise(SQL);

    if (result.length === 0) {
      res.status(404).json({ msg: "No matching data found" });
    } else {
      res.status(200).json(result);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch the data details" });
  }
});

app.get("/Library/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const SQL = "SELECT * FROM library where Id=?";
    console.log("944req.params;", req.params);

    const result = await queryPromise(SQL, [id]);

    if (result.length === 0) {
      res.status(404).json({ msg: "No matching data found" });
    } else {
      res.status(200).json(result);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch the data details" });
  }
});

app.put("/Library/:Id", async (req, res) => {
  try {
    const {
      Student_Name,
      Class,
      Title,
      Asset_Type,
      Receive_Date,
      Submit_Date,
    } = req.body;
    const { Id } = req.params;

    if (
      !Student_Name ||
      !Class ||
      !Title ||
      !Asset_Type ||
      !Receive_Date ||
      !Submit_Date
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const SQL = `
      UPDATE library
      SET  Student_Name = ?, Class = ?, Title = ?, Asset_Type = ?, Receive_Date = ?, Submit_Date = ?
      WHERE Id = ?;
    `;

    const result = await queryPromise(SQL, [
      Student_Name,
      Class,
      Title,
      Asset_Type,
      Receive_Date,
      Submit_Date,
      Id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Record not found" });
    }

    res.status(200).json({ msg: "Record updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update data" });
  }
});

app.delete("/Library/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const SQL = "DELETE FROM library WHERE id = ?";

    const result = await queryPromise(SQL, [id]);

    if (result.affectedRows === 0) {
      console.log("din1008", req.params);
      return res.status(404).json({ error: "No matching data found" });
    } else {
      console.log("din1012", req.params);
      return res
        .status(200)
        .json({ message: "Library data deleted successfully" });
    }
  } catch (err) {
    console.log("din1018", req.params);
    console.error("errorin1019", err);
    return res.status(500).json({ error: "Failed to delete the data" });
  }
});
