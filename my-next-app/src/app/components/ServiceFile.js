// components/ServicesSection.js
export default function ServiceFile() {
  return (
    <section id="services" style={{ padding: '150px 0 27px', backgroundColor: '#1d1b19', color: '#888' }}>
      <div className="container">
        <div className="row text-center mb-4">
          <div className="col-12">
            <h3 className="subtitle" style={{ color: '#007aff' }}>Services</h3>
            <h3 className="title" style={{ fontSize: '2rem', color: '#fff' }}>What I Do</h3>
            <p className="desc" style={{ fontSize: '1rem', color: '#ccc' }}>
              I help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall sales.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-4">
            <div className="card text-light" style={{ backgroundColor: "#181715", border: 'none', borderRadius: '10px' }}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="item_left" style={{ flex: 1 }}>
                    <h5 className="card-title" style={{ fontSize: '1.25rem' }}>Brand Consultant</h5>
                    <p className="card-text" style={{ fontSize: '1rem' }}>
                      I build brands through cultural insights &amp; strategic vision. Custom crafted business solutions.
                    </p>
                  </div>
                  <div className="divider" style={{ width: '1px', backgroundColor: '#ccc', margin: '0 10px' }}></div>
                  <div className="item_right text-end" style={{ flex: 1 }}>
                    <p>Starts from</p>
                    <h4>$599</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mb-4">
            <div className="card text-light" style={{ backgroundColor: "#181715", border: 'none', borderRadius: '10px' }}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="item_left" style={{ flex: 1 }}>
                    <h5 className="card-title" style={{ fontSize: '1.25rem' }}>Global Marketing</h5>
                    <p className="card-text" style={{ fontSize: '1rem' }}>
                      Custom marketing solutions. Get your business on the next level. We provide worldwide marketing.
                    </p>
                  </div>
                  <div className="divider" style={{ width: '1px', backgroundColor: '#ccc', margin: '0 10px' }}></div>
                  <div className="item_right text-end" style={{ flex: 1 }}>
                    <p>Starts from</p>
                    <h4>$399</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mb-4">
            <div className="card text-light" style={{ backgroundColor: "#181715", border: 'none', borderRadius: '10px' }}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="item_left" style={{ flex: 1 }}>
                    <h5 className="card-title" style={{ fontSize: '1.25rem' }}>UI/UX Solutions</h5>
                    <p className="card-text" style={{ fontSize: '1rem' }}>
                      Design direction for business. Get your business on the next level. We help to create great experiences.
                    </p>
                  </div>
                  <div className="divider" style={{ width: '1px', backgroundColor: '#ccc', margin: '0 10px' }}></div>
                  <div className="item_right text-end" style={{ flex: 1 }}>
                    <p>Starts from</p>
                    <h4>$499</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
