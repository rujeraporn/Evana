import { useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log('ค้นหา:', searchTerm);
  };

  return (
    <div className="layout-container">
      {/* ฝั่งซ้าย - Sidebar */}
      <div className="sidebar">
        <div className="search-panel">
          <h1 className="title-header">Evana</h1>
          <p className="subtitle">ระบบแนะนำเส้นทางสำหรับ EV</p>

          <div className="search-input-container">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="ค้นหาสถานที่หรือจุดหมายปลายทาง"
            />
            <button className="search-button" onClick={handleSearch}>
              🔍 ค้นหา
            </button>
          </div>

          <div className="route-container">
            <div className="route-option route-option-selected">
              เส้นทางที่แนะนำ<br />
              ระยะเวลา 1 ชม. ระยะทาง 80 กม. <br />
              1 จุดชาร์จ
            </div>

            <div className="route-option route-option-unselected">
              แนะนำสถานที่ท่องเที่ยว (Hidden Gems)<br />
              5 จุดท่องเที่ยว
            </div>
          </div>

          <button className="map-button animate-pulse-green">
            🗺️ แสดงแผนที่
          </button>

          <button className="assistant-button">
            💬 สอบถามข้อมูลกับผู้ช่วย Evana
          </button>
        </div>
      </div>

      {/* ฝั่งขวา - แผนที่ */}
      <div className="main-content">
        <div className="map-container map-view">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.7193936143523!2d99.42574531520412!3d18.271875287649847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30d96e9e68f0d731%3A0x4e4a1844572c91f1!2z4Lia4Lij4Li04Lip4Li44Lih4LiKIOC4reC4s-C4muC4h-C4peC4o-C5gOC4meC4o-C4p-C4sOC4oQ!5e0!3m2!1sth!2sth!4v1662046795123!5m2!1sth!2sth"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
