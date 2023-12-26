const mongoose = require("../../config/connect");

const schema = new mongoose.Schema(
  {
    text: {
      desc: "Note text",
      trim: true,
      type: String,
      required: true,
    },
    dueDate: {
      desc: "Note due date",
      type: Date,
    },
    userId: {
      desc: 'User id',
      type: Number,
      index: true,
      required: true
    }
  },
  {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

module.exports = mongoose.model("Notes", schema);