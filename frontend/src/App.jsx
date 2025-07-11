import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/ui/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Countries from './components/Countries';
import Testimonials from './components/Testimonials';
import JoinCTA from './components/ui/JoinCTA';
import Footer from './components/ui/Footer';
import BackToTop from './components/ui/BackToTop';
import Preloader from './components/ui/Preloader';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import GetStarted from './components/GetStarted';
import PrivacyPolicy from './components/documents/PrivacyPolicy';
import TermsAndConditions from './components/documents/TermsAndConditions';
import BusinessRegistrationConsent from './components/documents/BusinessRegistrationConsent';
import FreelancerRegistrationConsent from './components/documents/FreelancerRegistrationConsent';
import DataProcessingAgreement from './components/documents/DataProcessingAgreement';
import NondiscriminationStatement from './components/documents/NondiscriminationStatement';
import Freelancer from './components/Freelancer';
import Business from './components/Business';
import Copyright from './components/documents/Copyright';
import FAQ from './components/FAQ';
import WhyRefloHub from './components/WhyRefloHub';
import NotFound from './components/ui/NotFound';
import Cookies from './components/Cookies';
import Document from './components/Document';
import Career from './components/Career';
import Feature from './components/Feature';
import AllCategoryPage from './components/ui/AllCategoryPage';
import Pricing from './components/Pricing';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Smooth scrolling for anchor links on Home page
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const targetId = target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-dark-bg text-dark-text min-h-screen">
        <Preloader isLoading={isLoading} />
        {!isLoading && (
          <>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <main>
                    <Hero />
                    <WhyRefloHub />
                    <HowItWorks />
                    <Countries />
                    <Testimonials />
                    <JoinCTA />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
              <Route
                path="/about"
                element={
                  <main>
                    <About />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
              <Route
                path="/contact"
                element={
                  <main>
                    <Contact />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
              <Route
                path="/blog"
                element={
                  <main>
                    <Blog />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
              <Route
                path="/get-started"
                element={
                  <main>
                    <GetStarted />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
              <Route
                path="/all-categories"
                element={
                  <main>
                    <AllCategoryPage />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
              <Route 
                path="/pricing"
                element={
                  <main>
                    <Pricing />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
              <Route
                path="/privacy-policy"
                element={
                  <main>
                    <PrivacyPolicy />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
              <Route
                path="/terms-and-conditions"
                element={
                  <main>
                    <TermsAndConditions />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
              <Route
                path="/business-registration-consent"
                element={
                  <main>
                    <BusinessRegistrationConsent />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
              <Route
                path="/freelancer-registration-consent"
                element={
                  <main>
                    <FreelancerRegistrationConsent />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
              <Route
                path="/data-processing-agreement"
                element={
                  <main>
                    <DataProcessingAgreement />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
              <Route
                path="/nondiscrimination-statement"
                element={
                  <main>
                    <NondiscriminationStatement />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
              <Route
                path="/freelancer"
                element={
                  <main>
                    <Freelancer />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
              <Route
                path="/business"
                element={
                  <main>
                    <Business />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
              <Route
                path="/copyright"
                element={
                  <main>
                    <Copyright />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
              <Route
                path="/faq"
                element={
                  <main>
                    <FAQ />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
              <Route
                path="/cookies"
                element={
                  <main>
                    <Cookies />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
              <Route
                path="/data-policies"
                element={
                  <main>
                    <Document />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
              <Route
                path="/career"
                element={
                  <main>
                    <Career />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
              <Route
                path="/features"
                element={
                  <main>
                    <Feature />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
              <Route
                path="*"
                element={
                  <main>
                    <NotFound />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
            </Routes>
          </>
        )}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1A1A1A',
              color: '#EDEDED',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;