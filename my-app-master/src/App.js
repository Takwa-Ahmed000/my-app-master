import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ScreenshotSection from './ScreenshotSection';
import CoreFeatureSection from './CoreFeatureSection';
//import FeaturesSection from './FeaturesSection';
import Footer from './Footer';

function App() {
  return (
    <div>
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Hero Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* ✅ Feature Section - ليه تختار وصلني */}
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

      {/* ✅ Hire Us Section */}
      <section id="hire-us" style={{ padding: '100px 0' }}>
        {/* محتوى الحجز هيضاف هنا لاحقًا */}
      </section>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
}

export default App;
