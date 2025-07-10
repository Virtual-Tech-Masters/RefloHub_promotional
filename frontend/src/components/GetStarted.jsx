
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Upload, Camera, Eye, EyeOff } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const GetStarted = () => {
  const [userType, setUserType] = useState('freelancer');
  const [formData, setFormData] = useState({
    freelancer: {
      fullName: '',
      displayName: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      skills: '',
      liveImage: null,
      idProofs: [],
      password: '',
      confirmPassword: '',
    },
    business: {
      companyName: '',
      legalName: '',
      businessType: '',
      contactName: '',
      email: '',
      phone: '',
      industry: '',
      country: '',
      city: '',
      liveImage: null,
      idProofs: [],
      businessDocs: [],
      password: '',
      confirmPassword: '',
    },
  });
  const [errors, setErrors] = useState({});
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cameraStream, setCameraStream] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [crop, setCrop] = useState({ unit: '%', width: 80, height: 80, x: 10, y: 10 });
  const [completedCrop, setCompletedCrop] = useState(null);
  const [streamError, setStreamError] = useState(null);
  const [showPassword, setShowPassword] = useState({ freelancer: false, business: false });
  const [showConfirmPassword, setShowConfirmPassword] = useState({ freelancer: false, business: false });
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Data consent popup logic
    const consentGiven = localStorage.getItem('reflohub_data_consent');
    if (!consentGiven) {
      setShowConsent(true);
    }
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        resetForm();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    return () => {
      if (cameraStream) {
        cameraStream.getTracks().forEach((track) => track.stop());
        setCameraStream(null);
      }
    };
  }, [cameraStream]);

  useEffect(() => {
    if (isCameraOpen && cameraStream && videoRef.current) {
      videoRef.current.srcObject = cameraStream;
      videoRef.current.onloadedmetadata = () => {
        console.log('Video metadata loaded:', {
          width: videoRef.current.videoWidth,
          height: videoRef.current.videoHeight,
        });
        videoRef.current
          .play()
          .then(() => console.log('Video playback started'))
          .catch((err) => {
            console.error('Error playing video:', err);
            setStreamError('Failed to start video. Please try again or use the upload option.');
          });
      };
      const timer = setTimeout(() => {
        if (videoRef.current && !videoRef.current.paused) return;
        videoRef.current.play().catch((err) => {
          console.error('Retry play failed:', err);
          setStreamError('Video failed to load. Please try again or use the upload option.');
        });
      }, 1000);
      return () => clearTimeout(timer);
    } else if (isCameraOpen && !videoRef.current) {
      console.error('Video element not found in DOM');
      setStreamError('Video element not initialized. Please try again or use the upload option.');
    }
  }, [isCameraOpen, cameraStream]);

  const resetForm = () => {
    setFormData({
      freelancer: {
        fullName: '',
        displayName: '',
        email: '',
        phone: '',
        country: '',
        city: '',
        skills: '',
        liveImage: null,
        idProofs: [],
        password: '',
        confirmPassword: '',
      },
      business: {
        companyName: '',
        legalName: '',
        businessType: '',
        contactName: '',
        email: '',
        phone: '',
        industry: '',
        country: '',
        city: '',
        liveImage: null,
        idProofs: [],
        businessDocs: [],
        password: '',
        confirmPassword: '',
      },
    });
    setErrors({});
    setStreamError(null);
    setShowPassword({ freelancer: false, business: false });
    setShowConfirmPassword({ freelancer: false, business: false });
  };

  const validateForm = (data, type) => {
    const newErrors = {};
    if (type === 'freelancer') {
      if (!data.fullName) newErrors.fullName = 'Full name is required';
      if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
        newErrors.email = 'Valid email is required';
      if (!data.phone) newErrors.phone = 'Phone number is required';
      if (!data.country) newErrors.country = 'Country is required';
      if (!data.liveImage) newErrors.liveImage = 'Live image (selfie) is required';
      if (data.idProofs.length === 0) newErrors.idProofs = 'At least one ID proof is required';
      if (!data.password) newErrors.password = 'Password is required';
      else if (data.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
      if (data.password !== data.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    } else {
      if (!data.companyName) newErrors.companyName = 'Company name is required';
      if (!data.legalName) newErrors.legalName = 'Legal name is required';
      if (!data.businessType) newErrors.businessType = 'Business type is required';
      if (!data.contactName) newErrors.contactName = 'Contact name is required';
      if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
        newErrors.email = 'Valid email is required';
      if (!data.phone) newErrors.phone = 'Phone number is required';
      if (!data.country) newErrors.country = 'Country is required';
      if (!data.liveImage) newErrors.liveImage = 'Live image (selfie) is required';
      if (data.idProofs.length === 0) newErrors.idProofs = 'At least one ID proof is required';
      if (!data.password) newErrors.password = 'Password is required';
      else if (data.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
      if (data.password !== data.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    }
    return newErrors;
  };

  const handleChange = (e, type) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [type]: { ...prev[type], [name]: value },
    }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleFileChange = (e, type, field) => {
    const files = Array.from(e.target.files);
    const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    const maxSize = 5 * 1024 * 1024;
    const validFiles = files.filter((file) => validTypes.includes(file.type) && file.size <= maxSize);

    if (field === 'liveImage') {
      setFormData((prev) => ({
        ...prev,
        [type]: { ...prev[type], liveImage: validFiles[0] || null },
      }));
      setErrors((prev) => ({
        ...prev,
        liveImage: validFiles[0] ? '' : 'Invalid file type or size (JPG/PNG, <5MB)',
      }));
    } else if (field === 'idProofs') {
      setFormData((prev) => ({
        ...prev,
        [type]: { ...prev[type], idProofs: validFiles },
      }));
      setErrors((prev) => ({
        ...prev,
        idProofs: validFiles.length > 0 ? '' : 'Invalid file type or size (JPG/PNG/PDF, <5MB)',
      }));
    } else if (field === 'businessDocs') {
      setFormData((prev) => ({
        ...prev,
        [type]: { ...prev[type], businessDocs: validFiles },
      }));
      setErrors((prev) => ({ ...prev, businessDocs: '' }));
    }
  };

  const openCamera = async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const hasCamera = devices.some((device) => device.kind === 'videoinput');
      if (!hasCamera) {
        setErrors((prev) => ({ ...prev, liveImage: 'No camera detected on this device' }));
        setStreamError('No camera detected. Please use the upload option.');
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } },
      });
      setCameraStream(stream);
      setIsCameraOpen(true);
      setStreamError(null);
      console.log('Camera stream acquired successfully');
    } catch (err) {
      console.error('Error accessing camera:', err);
      let errorMessage = 'Unable to access camera. Please allow camera permissions or try another device.';
      if (err.name === 'NotAllowedError') {
        errorMessage = 'Camera access denied. Please enable camera permissions in your browser settings.';
      } else if (err.name === 'NotFoundError') {
        errorMessage = 'No camera found on this device.';
      }
      setErrors((prev) => ({ ...prev, liveImage: errorMessage }));
      setStreamError(errorMessage);
    }
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current && videoRef.current.videoWidth > 0) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageDataUrl = canvas.toDataURL('image/jpeg', 0.8);
      setCapturedImage(imageDataUrl);
      console.log('Image captured:', { width: canvas.width, height: canvas.height });
    } else {
      console.error('Capture failed:', {
        videoRef: !!videoRef.current,
        canvasRef: !!canvasRef.current,
        videoDimensions: videoRef.current
          ? { width: videoRef.current.videoWidth, height: videoRef.current.videoHeight }
          : 'No video',
      });
      setErrors((prev) => ({ ...prev, liveImage: 'Failed to capture image. Please try again.' }));
      setStreamError('Cannot capture image. Ensure the camera is active or use the upload option.');
    }
  };

  const handleCropComplete = (crop) => {
    setCompletedCrop(crop);
  };

  const saveCroppedImage = () => {
    if (imgRef.current && completedCrop && canvasRef.current) {
      const canvas = canvasRef.current;
      const img = imgRef.current;
      const scaleX = img.naturalWidth / img.width;
      const scaleY = img.naturalHeight / img.height;
      canvas.width = completedCrop.width * scaleX;
      canvas.height = completedCrop.height * scaleY;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(
        img,
        completedCrop.x * scaleX,
        completedCrop.y * scaleY,
        completedCrop.width * scaleX,
        completedCrop.height * scaleY,
        0,
        0,
        canvas.width,
        canvas.height
      );
      canvas.toBlob(
        (blob) => {
          const file = new File([blob], `liveImage-${Date.now()}.jpg`, { type: 'image/jpeg' });
          setFormData((prev) => ({
            ...prev,
            [userType]: { ...prev[userType], liveImage: file },
          }));
          setErrors((prev) => ({ ...prev, liveImage: '' }));
          setStreamError(null);
          closeCamera();
          console.log('Cropped image saved:', file.name);
        },
        'image/jpeg',
        0.8
      );
    } else {
      console.error('Crop save failed:', {
        imgRef: !!imgRef.current,
        completedCrop: !!completedCrop,
        canvasRef: !!canvasRef.current,
      });
      setErrors((prev) => ({ ...prev, liveImage: 'Failed to save cropped image.' }));
    }
  };

  const closeCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach((track) => track.stop());
      setCameraStream(null);
    }
    setIsCameraOpen(false);
    setCapturedImage(null);
    setCrop({ unit: '%', width: 80, height: 80, x: 10, y: 10 });
    setCompletedCrop(null);
    setStreamError(null);
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    console.log('Camera closed');
  };

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    const errors = validateForm(formData[type], type);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const formDataObj = new FormData();
    Object.entries(formData[type]).forEach(([key, value]) => {
      if (key === 'liveImage' && value) {
        formDataObj.append('liveImage', value);
      } else if (key === 'idProofs' && value.length > 0) {
        value.forEach((file) => formDataObj.append('idProofs', file));
      } else if (key === 'businessDocs' && value.length > 0) {
        value.forEach((file) => formDataObj.append('businessDocs', file));
      } else {
        formDataObj.append(key, value);
      }
    });

    try {
      const response = await fetch(`https://apis.promotional.reflohub.com/api/auth/register/${type}`, {
        method: 'POST',
        body: formDataObj,
      });
      const data = await response.json();
      if (response.ok) {
        console.log(`${type} data saved successfully:`, data);
        resetForm();
        alert(`${type.charAt(0).toUpperCase() + type.slice(1)} data saved successfully!`);
      } else {
        setErrors({ submit: data.message || 'Failed to save data. Please try again.' });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setErrors({ submit: 'Failed to submit form. Please check your network and try again.' });
    }
  };

  const togglePasswordVisibility = (type, field) => {
    if (field === 'password') {
      setShowPassword((prev) => ({ ...prev, [type]: !prev[type] }));
    } else {
      setShowConfirmPassword((prev) => ({ ...prev, [type]: !prev[type] }));
    }
  };

  const handleConsentAccept = () => {
    localStorage.setItem('reflohub_data_consent', 'true');
    setShowConsent(false);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const formVariants = {
    hidden: { rotateY: 90, opacity: 0 },
    visible: { rotateY: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
    exit: { rotateY: -90, opacity: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white overflow-hidden perspective-1000 font-sans">
      {/* Data Consent Modal */}
      {showConsent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-md w-full shadow-2xl border border-orange-300/40">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Data Consent Required</h2>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              By proceeding, you agree to Reflo Hub's collection and processing of your personal data for registration and verification purposes, in accordance with our <a href="/privacy-policy" className="text-orange-500 underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and <a href="/data-processing-agreement" className="text-orange-500 underline" target="_blank" rel="noopener noreferrer">Data Processing Agreement</a>.
            </p>
            <button
              onClick={handleConsentAccept}
              className="w-full px-6 py-3 bg-gradient-to-r from-sky-500 to-orange-300 text-white rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-200"
            >
              I Agree & Continue
            </button>
          </div>
        </div>
      )}
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 dark:from-gray-950 via-gray-200 dark:via-gray-900 to-gray-100 dark:to-gray-950">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-orange-300/10 dark:from-sky-500/10 dark:to-orange-300/10 animate-[gradient-shift_25s_ease_infinite] bg-[length:200%_200%]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-orange-300/70 rounded-full blur-md"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5], x: Math.random() * 80 - 40, y: Math.random() * 80 - 40 }}
            transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, repeatType: 'reverse', delay: Math.random() * 3 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gray-100/60 dark:bg-white/5 backdrop-blur-lg border border-orange-300/40 rounded-full px-6 py-2 mb-6 shadow-[0_0_30px_rgba(255,165,0,0.4)]"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,165,0,0.5)' }}
          >
            <Sparkles className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Join Reflo Hub</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(255,165,0,0.7)] animate-[pulse_3s_ease_infinite]">
            Get Started Today
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join Reflo Hub as a freelancer or business and unlock a world of opportunities in lead generation and global collaboration.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex bg-gray-100/60 dark:bg-white/5 backdrop-blur-lg border border-orange-300/40 rounded-full p-1">
            <motion.button
              className={`px-6 py-2 rounded-full text-lg font-medium ${userType === 'freelancer' ? 'bg-gradient-to-r from-sky-500 to-orange-300 text-white' : 'text-gray-600 dark:text-gray-300'}`}
              onClick={() => setUserType('freelancer')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Freelancer
            </motion.button>
            <motion.button
              className={`px-6 py-2 rounded-full text-lg font-medium ${userType === 'business' ? 'bg-gradient-to-r from-sky-500 to-orange-300 text-white' : 'text-gray-600 dark:text-gray-300'}`}
              onClick={() => setUserType('business')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Business
            </motion.button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.section
            key={userType}
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-w-2xl mx-auto bg-gradient-to-b from-gray-100/60 dark:from-white/5 to-gray-200/60 dark:to-white/3 backdrop-blur-lg border border-orange-300/40 rounded-2xl p-8 shadow-[0_0_50px_rgba(255,165,0,0.3)]"
            style={showConsent ? { pointerEvents: 'none', opacity: 0.3, filter: 'blur(2px)' } : {}}
          >
            <div className="relative z-10">
              {userType === 'freelancer' ? (
                <form onSubmit={(e) => handleSubmit(e, 'freelancer')} className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Freelancer Registration</h2>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.freelancer.fullName}
                      onChange={(e) => handleChange(e, 'freelancer')}
                      className="w-full p-3 bg-gray-100/60 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300"
                      placeholder="John Doe"
                      required
                    />
                    {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Display Name</label>
                    <input
                      type="text"
                      name="displayName"
                      value={formData.freelancer.displayName}
                      onChange={(e) => handleChange(e, 'freelancer')}
                      className="w-full p-3 bg-gray-100/60 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300"
                      placeholder="JohnD"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.freelancer.email}
                      onChange={(e) => handleChange(e, 'freelancer')}
                      className="w-full p-3 bg-gray-100/60 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300"
                      placeholder="john@example.com"
                      required
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Password *</label>
                    <div className="relative">
                      <input
                        type={showPassword.freelancer ? 'text' : 'password'}
                        name="password"
                        value={formData.freelancer.password}
                        onChange={(e) => handleChange(e, 'freelancer')}
                        className="w-full p-3 bg-gray-100/60 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300"
                        placeholder="Enter password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => togglePasswordVisibility('freelancer', 'password')}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
                        aria-label={showPassword.freelancer ? 'Hide password' : 'Show password'}
                      >
                        {showPassword.freelancer ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Confirm Password *</label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword.freelancer ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.freelancer.confirmPassword}
                        onChange={(e) => handleChange(e, 'freelancer')}
                        className="w-full p-3 bg-gray-100/60 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300"
                        placeholder="Confirm password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => togglePasswordVisibility('freelancer', 'confirmPassword')}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
                        aria-label={showConfirmPassword.freelancer ? 'Hide confirm password' : 'Show confirm password'}
                      >
                        {showConfirmPassword.freelancer ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {errors.confirmPassword && <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.freelancer.phone}
                      onChange={(e) => handleChange(e, 'freelancer')}
                      className="w-full p-3 bg-gray-100/60 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300"
                      placeholder="+1234567890"
                      required
                    />
                    {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Country *</label>
                    <select
                      name="country"
                      value={formData.freelancer.country}
                      onChange={(e) => handleChange(e, 'freelancer')}
                      className="w-full p-3 bg-gray-100/60 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300"
                      required
                    >
                      <option value="" disabled>
                        Select Country
                      </option>
                      <option value="India">India</option>
                      <option value="USA">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.country && <p className="text-red-400 text-sm mt-1">{errors.country}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.freelancer.city}
                      onChange={(e) => handleChange(e, 'freelancer')}
                      className="w-full p-3 bg-gray-100/60 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300"
                      placeholder="Toronto"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Skills (comma-separated)</label>
                    <input
                      type="text"
                      name="skills"
                      value={formData.freelancer.skills}
                      onChange={(e) => handleChange(e, 'freelancer')}
                      className="w-full p-3 bg-gray-100/60 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300"
                      placeholder="Sales, Marketing, Networking"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Live Image (Selfie) *</label>
                    <div className="flex gap-4">
                      <motion.button
                        type="button"
                        onClick={openCamera}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gradient-to-r from-sky-500 to-orange-300 text-white rounded-lg font-semibold flex items-center gap-2"
                      >
                        <Camera className="w-5 h-5" />
                        Take Photo
                      </motion.button>
                    </div>
                    {formData.freelancer.liveImage && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        Selected: {formData.freelancer.liveImage.name}
                      </p>
                    )}
                    {errors.liveImage && <p className="text-red-400 text-sm mt-1">{errors.liveImage}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                      ID Proofs * (e.g., ID Card,Driving License)
                    </label>
                    <div className="relative w-full p-4 bg-gray-100/60 dark:bg-gray-800/50 border border-dashed border-orange-300 rounded-lg hover:bg-gray-200/60 dark:hover:bg-gray-800/20 transition-all duration-300">
                      <input
                        type="file"
                        name="idProofs"
                        accept="image/jpeg,image/png,application/pdf"
                        multiple
                        onChange={(e) => handleFileChange(e, 'freelancer', 'idProofs')}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="text-center">
                        <Upload className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {formData.freelancer.idProofs.length > 0
                            ? formData.freelancer.idProofs.map((file) => file.name).join(', ')
                            : `Select ID proofs for ${formData.freelancer.country || 'your country'} (JPG/PNG/PDF, <5MB)`}
                        </p>
                      </div>
                    </div>
                    {errors.idProofs && <p className="text-red-400 text-sm mt-1">{errors.idProofs}</p>}
                    {formData.freelancer.country && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        Acceptable IDs: {idProofOptions[formData.freelancer.country].join(', ')}
                      </p>
                    )}
                  </div>
                  {errors.submit && <p className="text-red-400 text-sm mt-4">{errors.submit}</p>}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,165,0,0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className="group w-full px-8 py-4 text-center bg-gradient-to-r from-sky-500 to-orange-300 text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Register as Freelancer
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </motion.button>
                </form>
              ) : (
                <form onSubmit={(e) => handleSubmit(e, 'business')} className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Business Registration</h2>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Company Name *</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.business.companyName}
                      onChange={(e) => handleChange(e, 'business')}
                      className="w-full p-3 bg-gray-100/60 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300"
                      placeholder="Acme Corp"
                      required
                    />
                    {errors.companyName && <p className="text-red-400 text-sm mt-1">{errors.companyName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Legal Name *</label>
                    <input
                      type="text"
                      name="legalName"
                      value={formData.business.legalName}
                      onChange={(e) => handleChange(e, 'business')}
                      className="w-full p-3 bg-gray-100/60 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300"
                      placeholder="Acme Corporation Ltd"
                      required
                    />
                    {errors.legalName && <p className="text-red-400 text-sm mt-1">{errors.legalName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Business Type *</label>
                    <select
                      name="businessType"
                      value={formData.business.businessType}
                      onChange={(e) => handleChange(e, 'business')}
                      className="w-full p-3 bg-gray-100/60 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300"
                      required
                    >
                      <option value="" disabled>
                        Select Business Type
                      </option>
                      <option value="private_ltd">Private Limited</option>
                      <option value="public_ltd">Public Limited</option>
                      <option value="llp">LLP</option>
                      <option value="proprietorship">Proprietorship</option>
                    </select>
                    {errors.businessType && <p className="text-red-400 text-sm mt-1">{errors.businessType}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Contact Name *</label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.business.contactName}
                      onChange={(e) => handleChange(e, 'business')}
                      className="w-full p-3 bg-gray-100/60 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300"
                      placeholder="Jane Smith"
                      required
                    />
                    {errors.contactName && <p className="text-red-400 text-sm mt-1">{errors.contactName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.business.email}
                      onChange={(e) => handleChange(e, 'business')}
                      className="w-full p-3 bg-gray-100/60 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300"
                      placeholder="jane@acme.com"
                      required
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Password *</label>
                    <div className="relative">
                      <input
                        type={showPassword.business ? 'text' : 'password'}
                        name="password"
                        value={formData.business.password}
                        onChange={(e) => handleChange(e, 'business')}
                        className="w-full p-3 bg-gray-100/60 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300"
                        placeholder="Enter password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => togglePasswordVisibility('business', 'password')}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
                        aria-label={showPassword.business ? 'Hide password' : 'Show password'}
                      >
                        {showPassword.business ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Confirm Password *</label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword.business ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.business.confirmPassword}
                        onChange={(e) => handleChange(e, 'business')}
                        className="w-full p-3 bg-gray-100/60 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300"
                        placeholder="Confirm password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => togglePasswordVisibility('business', 'confirmPassword')}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
                        aria-label={showConfirmPassword.business ? 'Hide confirm password' : 'Show confirm password'}
                      >
                        {showConfirmPassword.business ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {errors.confirmPassword && <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.business.phone}
                      onChange={(e) => handleChange(e, 'business')}
                      className="w-full p-3 bg-gray-100/60 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300"
                      placeholder="+1234567890"
                      required
                    />
                    {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Country *</label>
                    <select
                      name="country"
                      value={formData.business.country}
                      onChange={(e) => handleChange(e, 'business')}
                      className="w-full p-3 bg-gray-100/60 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300"
                      required
                    >
                      <option value="" disabled>
                        Select Country
                      </option>
                      <option value="India">India</option>
                      <option value="USA">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.country && <p className="text-red-400 text-sm mt-1">{errors.country}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.business.city}
                      onChange={(e) => handleChange(e, 'business')}
                      className="w-full p-3 bg-gray-100/60 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300"
                      placeholder="Vancouver"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Industry</label>
                    <input
                      type="text"
                      name="industry"
                      value={formData.business.industry}
                      onChange={(e) => handleChange(e, 'business')}
                      className="w-full p-3 bg-gray-100/60 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300"
                      placeholder="IT Services"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                      Live Image (Selfie of Contact) *
                    </label>
                    <div className="flex gap-4">
                      <motion.button
                        type="button"
                        onClick={openCamera}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gradient-to-r from-sky-500 to-orange-300 text-white rounded-lg font-semibold flex items-center gap-2"
                      >
                        <Camera className="w-5 h-5" />
                        Take Photo
                      </motion.button>
                    </div>
                    {formData.business.liveImage && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        Selected: {formData.business.liveImage.name}
                      </p>
                    )}
                    {errors.liveImage && <p className="text-red-400 text-sm mt-1">{errors.liveImage}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                      ID Proofs * (e.g., ID Card, Driving License)
                    </label>
                    <div className="relative w-full p-4 bg-gray-100/60 dark:bg-gray-800/50 border border-dashed border-orange-300 rounded-lg hover:bg-gray-200/60 dark:hover:bg-gray-800/20 transition-all duration-300">
                      <input
                        type="file"
                        name="idProofs"
                        accept="image/jpeg,image/png,application/pdf"
                        multiple
                        onChange={(e) => handleFileChange(e, 'business', 'idProofs')}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="text-center">
                        <Upload className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {formData.business.idProofs.length > 0
                            ? formData.business.idProofs.map((file) => file.name).join(', ')
                            : `Select ID proofs for ${formData.business.country || 'your country'} (JPG/PNG/PDF, <5MB)`}
                        </p>
                      </div>
                    </div>
                    {errors.idProofs && <p className="text-red-400 text-sm mt-1">{errors.idProofs}</p>}
                    {formData.business.country && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        Acceptable IDs: {idProofOptions[formData.business.country].join(', ')}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                      Business Documents (e.g., Business Permit/License)
                    </label>
                    <div className="relative w-full p-4 bg-gray-100/60 dark:bg-gray-800/50 border border-dashed border-orange-300 rounded-lg hover:bg-gray-200/60 dark:hover:bg-gray-800/20 transition-all duration-300">
                      <input
                        type="file"
                        name="businessDocs"
                        accept="image/jpeg,image/png,application/pdf"
                        multiple
                        onChange={(e) => handleFileChange(e, 'business', 'businessDocs')}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="text-center">
                        <Upload className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {formData.business.businessDocs.length > 0
                            ? formData.business.businessDocs.map((file) => file.name).join(', ')
                            : `Upload business documents (JPG/PNG/PDF, <5MB)`}
                        </p>
                      </div>
                    </div>
                    {errors.businessDocs && <p className="text-red-400 text-sm mt-1">{errors.businessDocs}</p>}
                    {formData.business.country && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        Suggested Documents: {businessDocOptions[formData.business.country].join(', ')}
                      </p>
                    )}
                  </div>
                  {errors.submit && <p className="text-red-400 text-sm mt-4">{errors.submit}</p>}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,165,0,0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className="group w-full px-8 py-4 mt-4 text-white bg-gradient-to-r from-sky-500 to-orange-300 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Register as Business
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.section>
        </AnimatePresence>

        {/* SEO Metadata */}
        <motion.div className="hidden">
          <meta name="title" content="Reflo Hub Ltd – Get Started" />
          <meta
            name="description"
            content="Join Reflo Hub Ltd as a freelancer or business. Register today to start generating leads or accessing global opportunities through our SaaS platform."
          />
          <meta
            name="keywords"
            content="Reflo Hub Ltd registration, freelancer sign-up, business registration, SaaS lead generation platform, join Reflo Hub, global collaboration platform"
          />
        </motion.div>
      </div>

      {isCameraOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        >
          <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-6 max-w-lg w-full">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Take Your Selfie</h3>
            {!capturedImage ? (
              <>
                <div className="relative w-full h-80 bg-black rounded-lg mb-4 overflow-hidden">
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-full h-full object-cover"
                  />
                  {streamError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <p className="text-red-400 text-sm text-center">{streamError}</p>
                    </div>
                  )}
                </div>
                <div className="flex gap-4 justify-center">
                  <motion.button
                    type="button"
                    onClick={captureImage}
                    disabled={streamError}
                    whileHover={{ scale: streamError ? 1 : 1.05 }}
                    whileTap={{ scale: streamError ? 1 : 0.95 }}
                    className={`px-4 py-2 bg-gradient-to-r from-sky-500 to-orange-300 text-white rounded-lg font-semibold ${streamError ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    Capture
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={closeCamera}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold"
                  >
                    Cancel
                  </motion.button>
                </div>
              </>
            ) : (
              <>
                <ReactCrop
                  crop={crop}
                  onChange={(c) => setCrop(c)}
                  onComplete={handleCropComplete}
                  aspect={1}
                  className="mb-4"
                >
                  <img
                    ref={imgRef}
                    src={capturedImage}
                    alt="Captured"
                    style={{ maxWidth: '100%', maxHeight: '400px' }}
                    onLoad={() => console.log('Captured image loaded')}
                  />
                </ReactCrop>
                <div className="flex gap-4 justify-center">
                  <motion.button
                    type="button"
                    onClick={saveCroppedImage}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-sky-500 to-orange-300 text-white rounded-lg font-semibold"
                  >
                    Save
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => setCapturedImage(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold"
                  >
                    Retake
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={closeCamera}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold"
                  >
                    Cancel
                  </motion.button>
                </div>
              </>
            )}
            <canvas ref={canvasRef} style={{ display: 'none' }} />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default GetStarted;



