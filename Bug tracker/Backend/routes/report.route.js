const express = require("express");
const router = express.Router();
const Report = require("../models/report.model");

router.post("/add", (req, res) => {
  const { type, description, severity, lastOccurrence, createdBy, title } =
    req.body;
  const report = new Report({
    type,
    description,
    severity,
    createdBy,
    lastOccurrence: type === "bug" ? lastOccurrence : null,
    title,
  });
  report
    .save()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json("Error:" + err));
});
router.get("/getall", (req, res) => {
  Report.find()
    .then((reports) => res.json(reports))
    .catch((err) => res.status(400).json("Error:" + err));
});
router.get("/getone/:id", (req, res) => {
  const id = req.params?.id;
  Report.findById(id)
    .then((report) => res.json(report))
    .catch((err) => res.status(400).json("Error:" + err));
});
router.delete("/delete/:id", (req, res) => { 
    const id = req.params?.id
    Report.findByIdAndDelete(id).then((report) => res.json(report)).catch((err) => res.status(400).json("Error:" + err))
})
router.get("/resolve/:id", (req, res) => {
    const id = req.params?.id
    Report.findByIdAndUpdate(id, {
        resolved: true,
        resolvedAt: Date.now()
    }).then((report) => res.status(200).json(report)).catch((err) => res.status(400).json("Error:" + err))
})
module.exports = router;
