import banner from "../assets/LG 1.png";
import { Container, Row, Col } from "react-bootstrap";
const Banner = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={banner} className="banner-image d-block w-100" alt="Banner" />
          <div className="carousel-caption d-none d-md-block text-banner">
            <Container>
              <Row>
                <Col>
                  <h1 className="text-white">
                    Selamat Datang SMK Negeri 4 <br /> Payakumbuh
                  </h1>
                  <p className="text-white">
                    Sekolah dengan akreditasi terbaik tentunya memiliki
                    kurikulum pembelajaran terkini. Kurikulum yang tidak hanya
                    mengedepankan prestasi akademik, tapi juga mempertimbangkan
                    sisi minat serta bakat siswa.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
