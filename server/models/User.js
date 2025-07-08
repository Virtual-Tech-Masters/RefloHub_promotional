const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "employee", "freelancer", "business"],
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verifiedStatus: {
      type: String,
      enum: ["pending verification", "active", "suspended", "deleted"],
      default: "pending verification",
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    locale: {
      type: String,
      default: "en_IN",
    },
    timezone: {
      type: String,
      default: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    lastLogin: {
      type: Date,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    profilePic: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(this.password, salt);
    this.password = hash;
  }
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
