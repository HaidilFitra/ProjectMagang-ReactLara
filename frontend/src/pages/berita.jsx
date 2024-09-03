import { useState, useEffect } from "react";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import Navigation from "../components/navbar";
const Berita = () => {
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/v1/berita").then((response) => {
      setBerita(response.data);
    });
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="container">
      <h1 className="fw-semibold berita">Berita Terbaru</h1>
      <p className="caption-berita">
        Memberikan informasi terbaru terkait dengan acara dan kegiatan serta
        foto dokumentasi.
      </p>
      <div
        className="row py-4"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        {berita.map((beritas, index) => (
          <div className="card mx-3" style={{ width: "15rem" }} key={index}>
            <img
              src={"http://127.0.0.1:8000/storage/images/" + beritas.image}
              className="card-img-top py-3"
              alt={beritas.title}
            />
            <div className="card-body">
              <h5 className="card-title">{beritas.judul}</h5>
              <p className="card-text">{beritas.deskripsi}</p>
              <a href="#" className="btn btn-primary button-lihat">
                Lihat
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Berita;
