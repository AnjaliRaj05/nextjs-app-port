// src/components/RightSection.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

export default function RightSection() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ width: '30vw', position: 'relative' }}>
      <div className="position-absolute border d-flex justify-content-center align-items-center" style={{ width: '400px', height: '500px', top: '50%',left:'25%', transform: 'translate(-50%, -50%)' }}>
        
      </div>
      <div className="position-absolute border d-flex justify-content-center align-items-center" style={{ width: '350px', height: '500px', top: '55%', left: '25%', transform: 'translate(-50%, -50%)' }}>
        <h2>Hii There!, I Am</h2>
       
      </div>
    </div>
  );
}
