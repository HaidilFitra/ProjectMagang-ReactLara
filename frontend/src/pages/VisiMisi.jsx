import { Container, Row, Col } from "react-bootstrap";

const VisiMisi = () => {
  return (
    <Container className="visi-misi">
      <Row>
        <Col>
          <h1>Visi</h1>
          <p className="caption-visi">
            MEWUJUDKAN LULUSAN YANG BERKARAKTER, BERKOMPETENSI UNGGUL, BERMUTU
            DAN BERWAWASAN LINGKUNGAN
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Misi</h2>
          <ul className="caption-misi">
            <li>Meningkatkan iman dan taqwa kepada Tuhan Yang Maha Esa.</li>
            <li>Meningkatkan pembelajaran berbasis kompetensi dan produksi.</li>
            <li>
              Meningkatkan kerjasama dengan IDUKA dalam mempersiapkan lulusan
              yang siap kerja dan kompetitif.
            </li>
            <li>
              Mewujudkan lingkungan sekolah yang ramah anak, bersih, sehat dan
              asri.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default VisiMisi;
