import mongoose from "mongoose";

new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    user: {
        type: mongoose.Schema.Types.objectId,
        ref: 'User',
        required: true 
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Task", taskSchema);
