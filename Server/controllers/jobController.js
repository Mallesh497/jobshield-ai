const detectFraud = require("../utils/fraudDetector");
const Job = require("../models/Job");


// CREATE JOB
const createJob = async (req, res) => {
  try {

    const fraudAnalysis = detectFraud(req.body);

    const job = await Job.create({
      ...req.body,

      fraudScore: fraudAnalysis.fraudScore,

      riskLevel: fraudAnalysis.riskLevel,

      reasons: fraudAnalysis.reasons,
    });

    res.status(201).json(job);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};


// GET ALL JOBS
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();

    res.status(200).json(jobs);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};


// DELETE JOB
const deleteJob = async (req, res) => {
  try {

    await Job.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Job Deleted",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};


module.exports = {
  createJob,
  getJobs,
  deleteJob,
};