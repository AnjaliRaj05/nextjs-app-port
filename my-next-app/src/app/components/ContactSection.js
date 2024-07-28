// components/ContactSection.js
import "bootstrap/dist/css/bootstrap.min.css";

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        padding: "150px 0 200px",
        backgroundColor: "#1d1b19",
        color: "#888",
      }}
    >
      <div className="container">
        <div className="row text-center mb-4">
          <div className="col-12">
            <h3 className="subtitle" style={{ color: "#007aff" }}>
              Contact
            </h3>
            <h3 className="title" style={{ fontSize: "2rem", color: "#fff" }}>
              Get In Touch
            </h3>
            <p className="desc" style={{ fontSize: "1rem", color: "#ccc" }}>
              If you have any suggestion, project or even you want to say
              “hello”, please fill out the form below and I will reply you
              shortly.
            </p>
          </div>
        </div>
        <form className="contact_form">
          <div
            className="success"
            data-success="Your message has been received, we will contact you soon."
            style={{ display: "none" }}
          >
            <span className="contact_success">
              Your message has been received, we will contact you soon.
            </span>
          </div>
          <div className="empty_notice" style={{ display: "none" }}>
            <span>Please Fill Required Fields!</span>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="input_wrapper">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  style={{
                    backgroundColor: "#1d1b19",
                    borderRadius: "5px",
                    borderColor: "#888",
                    color: "#fff",
                  }}
                />
                <span
                  className="moving_placeholder"
                  style={{ color: "#987750" }}
                >
                  Name *
                </span>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input_wrapper">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  style={{
                    backgroundColor: "#1d1b19",
                    borderRadius: "5px",
                    borderColor: "#888",
                    color: "#fff",
                  }}
                />
                <span
                  className="moving_placeholder"
                  style={{ color: "#987750" }}
                >
                  Email *
                </span>
              </div>
            </div>
            <div className="col-md-12 mb-3">
              <div className="input_wrapper">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="form-control"
                  style={{
                    backgroundColor: "#1d1b19",
                    borderRadius: "5px",
                    borderColor: "#888",
                    color: "#fff",
                  }}
                />
                <span
                  className="moving_placeholder"
                  style={{ color: "#987750" }}
                >
                  Phone
                </span>
              </div>
            </div>
            <div className="col-md-12 mb-3">
              <div className="input_wrapper">
                <textarea
                  name="msg"
                  id="message"
                  className="form-control"
                  style={{
                    backgroundColor: "#1d1b19",
                    borderRadius: "5px",
                    borderColor: "#888",
                    color: "#fff",
                  }}
                />
                <span
                  className="moving_placeholder"
                  style={{ color: "#987750" }}
                >
                  Message
                </span>
              </div>
            </div>
            <div className="col-md-12 mb-3 d-flex justify-content-center">
              <input
                type="text"
                id="phone"
                name="phone"
                className="form-control"
                value="Send Message"
                style={{
                  backgroundColor: "#1d1b19",
                  borderRadius: "5px",
                  borderColor: "#888",
                  color: "#fff",
                  textAlign: "center",
                }}
              />
            </div>
          </div>
        </form>
        <div className="resumo_fn_contact_info text-center mt-4">
          <p style={{ color: "#ccc" }}>Address</p>
          <h3 style={{ color: "#fff" }}>69 Queen St, London, United Kingdom</h3>
          <p style={{ color: "#ccc" }}>Phone</p>
          <h3>
            <a href="tel:+7068980751" style={{ color: "#007aff" }}>
              (+706) 898-0751
            </a>
          </h3>
          <p>
            <a
              href="mailto:trendycoder.com@gmail.com"
              style={{ color: "#007aff" }}
            >
              trendycoder.com@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
