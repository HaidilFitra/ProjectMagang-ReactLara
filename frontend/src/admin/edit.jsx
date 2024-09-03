import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const EditBerita = () => {
  const [judul, setJudul] = useState("");
  const [image, setImage] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/v1/posts/${id}`
        );
        setJudul(response.data.judul);
        setDeskripsi(response.data.deskripsi);
      } catch (error) {
        console.log("Failed to fetch post data", error);
      }
    };

    fetchPost();
  }, [id]);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const updatePost = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("judul", judul);
    formData.append("image", image);
    formData.append("deskripsi", deskripsi);

    try {
      await axios.post(`http://127.0.0.1:8000/api/v1/update/${id}`, formData);
      navigate("/admin");
    } catch (error) {
      console.log("errors", error);
      setErrors(error.response.data);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 rounded shadow">
            <div className="card-body">
              <form onSubmit={updatePost}>
                <div className="mb-3">
                  <label className="form-label fw-bold">Judul</label>
                  <input
                    type="text"
                    className="form-control"
                    value={judul}
                    onChange={(e) => setJudul(e.target.value)}
                    placeholder="Judul Berita"
                  />
                </div>
                {errors.judul && (
                  <div className="alert alert-danger mt-2">
                    {errors.judul[0]}
                  </div>
                )}

                <div className="mb-3">
                  <label className="form-label fw-bold">Image</label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="form-control"
                  />
                </div>
                {errors.image && (
                  <div className="alert alert-danger mt-2">
                    {errors.image[0]}
                  </div>
                )}

                <div className="mb-3">
                  <label className="form-label fw-bold">Deskripsi</label>
                  <textarea
                    className="form-control"
                    value={deskripsi}
                    onChange={(e) => setDeskripsi(e.target.value)}
                    rows="5"
                    placeholder="Deskripsi Berita"
                  ></textarea>
                </div>
                {errors.deskripsi && (
                  <div className="alert alert-danger mt-2">
                    {errors.deskripsi[0]}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-md btn-primary rounded-sm shadow border-0"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
