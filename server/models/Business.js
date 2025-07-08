const mongoose = require('mongoose');
// ─────────────────────────────────────────────────────────────────────────────
// 📦 Address Sub-Schema: Used for storing multiple business locations
// ─────────────────────────────────────────────────────────────────────────────
const addressSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["HQ", "branch", "billing"], // Ensures standard address types
      required: true,
    },
    line1: { type: String, required: true }, // Mandatory address line
    line2: { type: String }, // Optional second line
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true }, // ISO2 code like "IN", "US"
  },
  { _id: false }
); // Embedded, doesn't need individual _id

// ─────────────────────────────────────────────────────────────────────────────
// 👥 Contact Sub-Schema: For storing multiple contacts cleanly
// ─────────────────────────────────────────────────────────────────────────────
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, match: /.+\@.+\..+/ },
    phone: { type: String }, // Consider pattern-based validation if needed
    designation: { type: String }, // e.g. CEO, Sales Head
  },
  { _id: false }
);

// ─────────────────────────────────────────────────────────────────────────────
// 📄 Document Sub-Schema: For business KYC / compliance
// ─────────────────────────────────────────────────────────────────────────────
const documentSchema = new mongoose.Schema(
  {
    docType: {
      type: String,
      enum: ["incorporation", "GST", "PAN", "address_proof"],
      required: true,
    },
    fileUrl: { type: String, required: true }, // Cloud storage path (e.g. S3/CDN)
    uploadedAt: { type: Date, default: Date.now },
    status: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "pending",
    },
  },
  { _id: false }
);

// ─────────────────────────────────────────────────────────────────────────────
// 🧾 Tax Details Sub-Schema
// ─────────────────────────────────────────────────────────────────────────────
const taxDetailsSchema = new mongoose.Schema(
  {
    GSTIN: { type: String },
    PAN: { type: String },
    taxFilingFrequency: {
      type: String,
      enum: ["monthly", "quarterly", "annually"],
    },
  },
  { _id: false }
);
// ────────────────────────────────────────────
// 🧩 Subscription & Usage Sub-Schema
// ────────────────────────────────────────────
const subscriptionSchema = new mongoose.Schema(
  {
    subscriptionPlan: {
      type: String,
      enum: ["basic", "standard", "unlimited"],
      default: "basic",
    },
    planStartDate: { type: Date },
    planEndDate: { type: Date },
    leadQuotaPerMonth: { type: Number, default: 0 },
    leadsUsedThisMonth: { type: Number, default: 0 },
    overQuotaCharges: { type: Number, default: 0 },
    planStatus: {
      type: String,
      enum: ["active", "paused", "cancelled"],
      default: "active",
    },
    gracePeriodEndsAt: { type: Date },
  },
  { _id: false }
);

// ─────────────────────────────────────────────────────────────────────────────
// 🏢 Business Profile Main Schema
// ─────────────────────────────────────────────────────────────────────────────
const businessSchema = new mongoose.Schema( {
    // Link to User (foreign key-style reference)
    businessId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true, // 1:1 relationship per user
    },

    // Core Business Info
    companyName: { type: String, required: true }, // Display name
    legalName: { type: String, required: true }, // As per government registration
    registrationNumber: { type: String }, // CIN/GSTIN/PAN
    businessType: {
      type: String,
      enum: ["private_ltd", "public_ltd", "llp", "proprietorship"],
      required: true,
    },
    industry: { type: String }, // e.g. "IT Services"
    subIndustry: { type: String }, // e.g. "SaaS"
    foundedYear: { type: Number, min: 1800, max: new Date().getFullYear() },
    teamSize: { type: String }, // e.g. "1–10", "11–50"
    annualRevenue: { type: Number, min: 0 }, // In chosen currency
    currency: {
      type: String,
      default: "INR", // ISO currency code
      match: /^[A-Z]{3}$/, // Format: 3 uppercase letters
    },
    // Additional fields merged from second schema
    contactName: { type: String, required: true },
    liveImage: { type: String, required: true },
    idProofs: [{ type: String, required: true }],
    businessDocs: [{ type: String }],
    // Locations & Contacts
    addresses: {
      type: [addressSchema],
      validate: (v) => Array.isArray(v) && v.length > 0, // Must have at least one
    },
    primaryContact: {
      type: contactSchema,
      required: true,
    },
    otherContacts: [contactSchema],

    // Compliance
    documents: [documentSchema],
    taxDetails: taxDetailsSchema,
    // D. Subscription & Usage
    subscription: subscriptionSchema,
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  });

module.exports = mongoose.model('Business', businessSchema);