const moongoose = require("mongoose");

const goalSchema = moongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a text field"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = moongoose.model("Goal", goalSchema);
