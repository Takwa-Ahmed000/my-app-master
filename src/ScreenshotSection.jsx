// ScreenshotSection.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ScreenshotSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section
      id="screenshot"
      style={{
        padding: '100px 0',
        backgroundColor: '#f9f9f9',
        direction: 'rtl',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="container text-center">
        <h2 className="mb-4" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1c8c56' }}>
          لقطات من التطبيق
        </h2>
        <p className="mb-5" style={{ fontSize: '1.1rem', color: '#555' }}>
          تطبيق وصلني يساعدك على حجز سيارة بسهولة وسرعة، مع واجهة مستخدم احترافية لكل من الراكب والسائق. وفر وقتك مع أكثر من 200 ساعة تصميم جاهزة.
        </p>

        {/* أزرار */}
        <div className="mb-5 d-flex justify-content-center gap-4 flex-wrap">
          <button className="btn btn-success rounded-pill px-4 py-2">المستخدم</button>
          <button className="btn btn-outline-success rounded-pill px-4 py-2"> السائق</button>
        </div>

        <Slider {...settings}>
          <div><img src="https://via.placeholder.com/300x600?text=Screen+1" alt="Screenshot 1" className="img-fluid" /></div>
          <div><img src="https://via.placeholder.com/300x600?text=Screen+2" alt="Screenshot 2" className="img-fluid" /></div>
          <div><img src="https://via.placeholder.com/300x600?text=Screen+3" alt="Screenshot 3" className="img-fluid" /></div>
          <div><img src="https://via.placeholder.com/300x600?text=Screen+4" alt="Screenshot 4" className="img-fluid" /></div>
        </Slider>
      </div>
    </section>
  );
};

export default ScreenshotSection;
