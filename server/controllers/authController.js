const Freelancer = require("../models/Freelancer");
const Business = require("../models/Business");
const User = require("../models/User");

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

exports.saveFreelancer = async (req, res) => {
  try {
    const {
      fullName,
      displayName,
      email,
      phone,
      country,
      city,
      skills,
      password,
      confirmPassword,
    } = req.body;

    const liveImage = req.files?.liveImage?.[0];
    const idProofs = req.files?.idProofs || [];

    // ────── Validations ──────
    if (!fullName)
      return res.status(400).json({ message: "Full name is required" });
    if (!email || !validateEmail(email))
      return res.status(400).json({ message: "Valid email is required" });
    if (!phone)
      return res.status(400).json({ message: "Phone number is required" });
    if (!country)
      return res.status(400).json({ message: "Country is required" });
    if (!liveImage)
      return res.status(400).json({ message: "Live image (selfie) is required" });
    if (idProofs.length === 0)
      return res.status(400).json({ message: "At least one ID proof is required" });
    if (!password)
      return res.status(400).json({ message: "Password is required" });
    if (password.length < 8)
      return res.status(400).json({ message: "Password must be at least 8 characters" });
    if (password !== confirmPassword)
      return res.status(400).json({ message: "Passwords do not match" });

    // ────── Check if user already exists ──────
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already registered" });

    // ────── Create User ──────
    const user = new User({
      fullName,
      email,
      password,
      role: "freelancer",
    });
    await user.save();

    // ────── Create Freelancer ──────
    const freelancer = new Freelancer({
      freelancerId: user._id,
      fullName,
      displayName,
      email,
      phone,
      country,
      city,
      skills: skills ? skills.split(",").map((skill) => skill.trim()) : [],
      liveImage: liveImage.path,
      idProofs: idProofs.map((file) => ({
        docType: file.fieldname, // or 'ID' or use a better value if passed separately
        fileUrl: file.path,
        uploadedAt: new Date(),
      })),
    });

    await freelancer.save();

    res.status(201).json({ message: "Freelancer data saved successfully" });
  } catch (error) {
    console.error("Freelancer save error:", error);
    res.status(500).json({
      message: "Failed to save freelancer data",
      error: error.message,
    });
  }
};

exports.saveBusiness = async (req, res) => {
  try {
    const {
      companyName,
      legalName,
      businessType,
      contactName,
      email,
      phone,
      industry,
      country,
      city,
      password,
      confirmPassword,
    } = req.body;

    const liveImage = req.files?.liveImage?.[0];
    const idProofs = req.files?.idProofs || [];
    const businessDocs = req.files?.businessDocs || [];

    // ────── Validations ──────
    if (!companyName)
      return res.status(400).json({ message: "Company name is required" });
    if (!legalName)
      return res.status(400).json({ message: "Legal name is required" });
    if (!businessType)
      return res.status(400).json({ message: "Business type is required" });
    if (!contactName)
      return res.status(400).json({ message: "Contact name is required" });
    if (!email || !validateEmail(email))
      return res.status(400).json({ message: "Valid email is required" });
    if (!phone)
      return res.status(400).json({ message: "Phone number is required" });
    if (!country)
      return res.status(400).json({ message: "Country is required" });
    if (!liveImage)
      return res.status(400).json({ message: "Live image (selfie) is required" });
    if (idProofs.length === 0)
      return res.status(400).json({ message: "At least one ID proof is required" });
    if (!password)
      return res.status(400).json({ message: "Password is required" });
    if (password.length < 8)
      return res.status(400).json({ message: "Password must be at least 8 characters" });
    if (password !== confirmPassword)
      return res.status(400).json({ message: "Passwords do not match" });

    // ────── Check if user already exists ──────
    const existingBusiness = await User.findOne({ email });
    if (existingBusiness)
      return res.status(400).json({ message: "Email already registered" });

    // ────── Create user ──────
    const user = new User({
      fullName: contactName,
      email,
      password,
      role: "business",
    });
    await user.save();

    // ────── Create business ──────
    const business = new Business({
      businessId: user._id,
      companyName,
      legalName,
      businessType,
      contactName,
      email,
      phone,
      industry,
      country,
      city,
      liveImage: liveImage.path,
      idProofs: idProofs.map((file) => file.path),
      businessDocs: businessDocs.map((file) => file.path),

      // Provide dummy/default values for required nested fields
      addresses: [{
        type: "HQ",
        line1: "N/A",
        city: city || "N/A",
        state: "N/A",
        zip: "000000",
        country: country,
      }],
      primaryContact: {
        name: contactName,
        email: email,
        phone: phone,
        designation: "Primary Contact",
      },
    });

    await business.save();
    res.status(201).json({ message: "Business data saved successfully" });
  } catch (error) {
    console.error("Business save error:", error);
    res.status(500).json({
      message: "Failed to save business data",
      error: error.message,
    });
  }
};
