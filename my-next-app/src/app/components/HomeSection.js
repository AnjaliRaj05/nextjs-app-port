// components/HomeSection.js
import RightSection from './RightSection';
export default function HomeSection() {
    return (
      <section id="home" className="d-flex align-items-center min-vh-100 py-5  " style={{
        padding: '150px 0 200px',
        backgroundColor: '#1d1b19',
        color: '#888',
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h3 className="subtitle mb-3">Introduction</h3>
              <h3 className="title mb-4">UI/UX Designer</h3>
              <p className="desc mb-4">
                I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
              </p>
              <img src="https://resumo-react.vercel.app/img/signature.png" alt="Signature" className="img-fluid" />
            </div>
          </div>
        </div>
        <RightSection/>
      </section>
      
    );
  };
  
  
