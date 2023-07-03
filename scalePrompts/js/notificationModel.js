const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({
  content: { type: String, required: true },
  type: { type: String, required: true },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  read: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Notification", NotificationSchema);

const notification = new Notification({
  content: "This is a notification",
  type: "Skill Subscribed",
  sender: user.id,
  receiver: otherUser.id,
});

notification.save();

const notifications = await Notification.find({ receiver: user.id });
