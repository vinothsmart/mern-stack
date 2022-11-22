const moongoose = require("mongoose");

const goalSchema = moongoose.Schema(
  {
    user: {
      type: moongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
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
