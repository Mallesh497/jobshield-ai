const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    company: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    salary: {
      type: String,
    },

    description: {
      type: String,
      required: true,
    },

    skills: {
      type: [String],
    },

    email: {
      type: String,
      required: true,
    },
    fraudScore: {
      type: Number,
      default: 0,
    },

    riskLevel: {
      type: String,
      default: "Safe",
    },

    reasons: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Job", jobSchema);