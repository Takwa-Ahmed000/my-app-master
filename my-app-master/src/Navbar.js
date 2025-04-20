import './Navbar.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 px-4" dir="rtl">
      <div className="container-fluid">
        {/* اللوجو */}
        <a className="navbar-brand fw-bold text-success fs-3" href="#home">
          وصلني
        </a>

        {/* زر القائمة في الموبايل */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* روابط النافبار */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item px-2">
              <a className="nav-link text-dark" href="#home">الرئيسية</a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link text-dark" href="#feature">المميزات</a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link text-dark" href="#screenshot">الصور</a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link text-dark" href="#core-feature">الخصائص الأساسية</a>
            </li>
            <li className="nav-item px-2">
              <a
                className="nav-link text-dark"
                href="doc.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                الوثائق
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link text-dark" href="#hire-us">احجز الآن</a>
            </li>
          </ul>

          {/* زر تحميل التطبيق */}
          <button className="btn btn-success rounded-pill px-4 ms-3">حمّل التطبيق الآن</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


