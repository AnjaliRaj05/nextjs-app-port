
import 'bootstrap/dist/css/bootstrap.min.css'; 
export default function FooterSection() {
  return (
    <footer
      id="footer"
      className="bg-dark text-light text-center py-4"
    >
      <div className="position-relative">
        <a
          href="#"
          className="btn btn-primary position-fixed bottom-0 end-0 m-3 rounded-circle d-flex justify-content-center align-items-center"
          style={{ width: '40px', height: '40px' }}
        >
          <span style={{ display: 'block', width: '20px', height: '20px' }}></span>
        </a>
      </div>
      <div className="container">
        <p className="mb-0">
          Copyright © 2024. All rights reserved. <br />
          Developed by{' '}
          <a
            href="https://themeforest.net/user/trendycoder"
            target="_blank"
            rel="noreferrer"
            className="text-primary text-decoration-none"
          >
            TrendyCoder
          </a>
        </p>
      </div>
    </footer>
  );
}
