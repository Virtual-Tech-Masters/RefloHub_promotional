const mongoose = require("mongoose");
// ────────────────────────────────────────────────────────────────
// 🗺️ GeoJSON Location Schema for mapping integrations
// ────────────────────────────────────────────────────────────────
const geoPointSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true,
    },
  },
  { _id: false }
);

// ────────────────────────────────────────────────────────────────
// 🎓 Certification Schema
// ────────────────────────────────────────────────────────────────
const certificationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    authority: { type: String },
    issuedDate: { type: Date },
    expiry: { type: Date },
  },
  { _id: false }
);

// ────────────────────────────────────────────────────────────────
// 📅 Lead Submission History Schema
// ────────────────────────────────────────────────────────────────
const leadSubmissionSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    count: { type: Number, required: true },
  },
  { _id: false }
);

// ────────────────────────────────────────────────────────────────
// 💳 Token Purchase Log
// ────────────────────────────────────────────────────────────────
const tokenPurchaseSchema = new mongoose.Schema(
  {
    purchaseId: { type: String, required: true },
    count: { type: Number, required: true },
    amount: { type: Number, required: true },
    method: { type: String, required: true }, // e.g. 'UPI', 'PayPal'
    timestamp: { type: Date, default: Date.now },
  },
  { _id: false }
);

// ────────────────────────────────────────────────────────────────
// 🔑 Token Usage Log
// ────────────────────────────────────────────────────────────────
const tokenUsageSchema = new mongoose.Schema(
  {
    usedForLeadId: { type: String, required: true },
    usedAt: { type: Date, default: Date.now },
  },
  { _id: false }
);

// ────────────────────────────────────────────────────────────────
// 💸 Commission History Schema
// ────────────────────────────────────────────────────────────────
const commissionSchema = new mongoose.Schema(
  {
    leadId: { type: String },
    commissionAmount: { type: Number },
    earnedAt: { type: Date, default: Date.now },
  },
  { _id: false }
);

// ────────────────────────────────────────────────────────────────
// 💰 Payout Request Schema
// ────────────────────────────────────────────────────────────────
const payoutRequestSchema = new mongoose.Schema(
  {
    requestId: { type: String, required: true },
    amount: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected", "processed"],
      default: "pending",
    },
    requestedAt: { type: Date, default: Date.now },
    processedAt: { type: Date },
  },
  { _id: false }
);

// ────────────────────────────────────────────────────────────────
// 👤 Freelancer Profile Main Schema
// ────────────────────────────────────────────────────────────────
const freelancerSchema = new mongoose.Schema(
  {
    // Personal and professional info
    freelancerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    fullName: { type: String, required: true },
    displayName: { type: String },
    dob: { type: Date },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    profilePictureUrl: { type: String },
    liveImage: { type: String, required: true }, // <-- Newly added
    contact: {
      email: { type: String },
      phone: { type: String },
      alternatePhone: { type: String },
    },
    location: {
      city: { type: String },
      state: { type: String },
      country: { type: String },
      coordinates: geoPointSchema,
    },
    bio: { type: String },
    personalWebsite: { type: String },
    skills: [{ type: String }],
    experienceYears: { type: Number, min: 0 },
    certifications: [certificationSchema],
    businessDocs: [
      {
        docType: { type: String },
        fileUrl: { type: String },
        uploadedAt: { type: Date, default: Date.now },
      },
    ],
    // KYC & Bank
    kycStatus: {
      type: String,
      enum: ["not_started", "pending", "approved", "rejected"],
      default: "not_started",
    },
    idProofs: [
      {
        docType: { type: String },
        fileUrl: { type: String },
        uploadedAt: { type: Date, default: Date.now },
      },
    ],
    bankDetails: {
      bankName: { type: String },
      accountNumber: { type: String },
      ifsc: { type: String },
      beneficiaryName: { type: String },
    },
    paymentMethods: [
      {
        method: { type: String }, // e.g. 'UPI', 'PayPal'
        detail: { type: String }, // e.g. UPI ID or PayPal email
      },
    ],

    // Lead metrics & reviews
    totalLeadsSubmitted: { type: Number, default: 0 },
    qualifiedLeadsCount: { type: Number, default: 0 },
    disqualifiedLeadsCount: { type: Number, default: 0 },
    pendingLeadsCount: { type: Number, default: 0 },
    leadsSubmissionHistory: [leadSubmissionSchema],
    averageLeadRating: { type: Number, min: 0, max: 5 },
    reviewsReceived: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
    lastActiveAt: { type: Date },

    // Subscription & Tokens
    platformFeeMonthly: { type: Number, default: 0 },
    tokenBalance: { type: Number, default: 0 },
    freeTokensThisCycle: { type: Number, default: 0 },
    freeTokensGivenAt: { type: Date },
    freeTokensExpireAt: { type: Date },
    tokenPurchases: [tokenPurchaseSchema],
    tokenUsageLog: [tokenUsageSchema],

    // Payouts & Earnings
    earningsToDate: { type: Number, default: 0 },
    commissionHistory: [commissionSchema],
    payoutRequests: [payoutRequestSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Freelancer", freelancerSchema);
