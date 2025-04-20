import React from 'react';

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#1c8c56',
        color: '#fff',
        padding: '60px 0 20px',
        direction: 'rtl',
        marginTop: '0',
        minHeight: '300px' 
      }}
    >
      <div className="container">
        <div className="row text-right justify-content-center text-center">
          {

          }
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">عن وصلني</h5>
            <p>
              وصلني هو تطبيق ذكي يساعدك في حجز رحلتك بسهولة وسرعة. مصمم خصيصًا لتقديم تجربة آمنة وسلسة للركاب والسائقين.
            </p>
          </div>

          {

          }
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">روابط سريعة</h5>
            <ul className="list-unstyled">
              <li><a href="#home" style={{ color: '#fff' }}>الرئيسية</a></li>
              <li><a href="#feature" style={{ color: '#fff' }}>المميزات</a></li>
              <li><a href="#screenshot" style={{ color: '#fff' }}>صور التطبيق</a></li>
              <li><a href="#documentation" style={{ color: '#fff' }}>التوثيق</a></li>
              <li><a href="#hire-us" style={{ color: '#fff' }}>تواصل معنا</a></li>
            </ul>
          </div>

          {

          }
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">تحميل التطبيق</h5>
            <p>قم بتحميل تطبيق وصلني الآن على:</p>
            <button className="btn btn-light btn-sm mb-2" style={{ width: '160px' }}> المستخدم</button><br />
            <button className="btn btn-light btn-sm" style={{ width: '160px' }}> السائق</button>
          </div>
        </div>

        <hr style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />
        <div className="text-center">
          <p>جميع الحقوق محفوظة &copy; 2025 وصلني</p>
        </div>
      </div>
    </footer>

    
  );
}

export default Footer;
