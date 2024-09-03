import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const notif = () => toast.success("Berita Berhasil Dibuat");

const Create = () => {
  const [judul, setJudul] = useState("");
  const [image, setImage] = useState(null);
  const [deskripsi, setDeskripsi] = useState("");
  const navigate = useNavigate();

  const handleFile = (e) => {
    setImage(e.target.files[0]);
  };

      console.log() 

  const storeBerita = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("judul", judul);
    formData.append("image", image);
    formData.append("deskripsi", deskripsi);

    const  token = localStorage.getItem("Authorization");

    await axios.post("http://127.0.0.1:8000/api/v1/store", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    notif();
    navigate("/admin");
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="py-5">
            <form onSubmit={storeBerita} >
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Judul
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Judul berita"
                  value={judul}
                  onChange={(e) => setJudul(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Default file input example
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  onChange={handleFile}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Deskripsi
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Create;
