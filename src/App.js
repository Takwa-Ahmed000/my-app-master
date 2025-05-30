import React, { useState } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ScreenshotSection from './ScreenshotSection';
import CoreFeatureSection from './CoreFeatureSection';
import ContactForm from './ContactForm';
import Footer from './Footer';
import FeedbackWizard from './FeedbackWizard'; // ✅ النموذج الجديد متعدد الخطوات
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showFeedback, setShowFeedback] = useState(false);

  const handleOpenFeedback = () => setShowFeedback(true);
  const handleCloseFeedback = () => setShowFeedback(false);

  return (
    <div>
      {/* ✅ Navbar */}
      <Navbar onOpenFeedback={handleOpenFeedback} />

      {/* ✅ Hero Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* ✅ Feature Section */}
      <section id="feature" style={{ padding: '100px 0', direction: 'rtl' }}>
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: '#1c8c56', fontWeight: 'bold' }}>
            ليه تختار وصلني؟
          </h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <h4 className="text-success mb-3">وفر وقتك</h4>
                <p>مع وصلني، تقدر تحجز عربيتك في ثواني وتختار المعاد المناسب ليك بكل سهولة.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <h4 className="text-success mb-3">أمان وراحة</h4>
                <p>نتابع رحلتك من أول لحظة، وكمان التطبيق مناسب لذوي الهمم.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <h4 className="text-success mb-3">طرق دفع مرنة</h4>
                <p>ادفع بالطريقة اللي تريحك، سواء كاش أو أونلاين بكل أمان.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Screenshot Section */}
      <ScreenshotSection />

      {/* ✅ Core Feature Section */}
      <CoreFeatureSection />

      {/* ✅ Contact Section */}
      <section id="contact" style={{ padding: '100px 0', direction: 'rtl' }}>
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: '#1c8c56', fontWeight: 'bold' }}>تواصل معنا</h2>
          <ContactForm />
        </div>
      </section>

      {/* ✅ Footer */}
      <Footer />

      {/* ✅ Modal لتقييم التطبيق */}
      {showFeedback && (
        <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered" dir="rtl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">تقييم التطبيق</h5>
                <button type="button" className="btn-close" onClick={handleCloseFeedback}></button>
              </div>
              <div className="modal-body">
                <FeedbackWizard />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
