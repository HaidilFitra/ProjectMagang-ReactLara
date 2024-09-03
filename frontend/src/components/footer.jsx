import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <img src={logo} className="logo-footer" />
            <h3 className="fw-semibold alamat text-white">
              Jl. Koto Kociak, Kel. Padang Sikabu, Kec. Lamposi Tigo Nagori
            </h3>
          </Col>
          <Col>
            <div className="informasi-footer">
              <h3 className="text-white">Informasi</h3>
              <ul className="list-inform">
                <li className="text-white">Informasi Terbaru</li>
                <li className="text-white">Album Foto</li>
                <li className="text-white">Album Video</li>
              </ul>
            </div>
          </Col>
          <Col>
          <div className="contact-footer">
            <h3 className="text-white">Contact</h3>
            <div className="email">
            <i class="bi bi-envelope text-white"></i>
            <p className="text-white">smkn4pyk@gmail.com</p>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
