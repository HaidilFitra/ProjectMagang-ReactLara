import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const notif = () => toast.success('Successfully toasted!')

export const Admin = () => { 
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    fetchBerita();
  }, []);

  const fetchBerita = async () => {
      const response = await axios.get("http://127.0.0.1:8000/api/v1/berita");
      setBerita(response.data);
  };

  const deleteBerita = async (id) => {
      await axios.delete(`http://127.0.0.1:8000/api/v1/delete/${id}`);
      setBerita(berita.filter((beritaItem) => beritaItem.id !== id));
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-12">
          <Link
            to="/create/berita"
            className="btn btn-md btn-success rounded shadow border-0 mb-3"
          >
            ADD NEW POST
          </Link>
          <div className="card border-0 rounded shadow">
            <div className="card-body">
              <table className="table table-bordered">
                <thead className="bg-dark text-white">
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Content</th>
                    <th scope="col" style={{ width: "15%" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {berita.length > 0 ? (
                    berita.map((beritaItem, index) => (
                      <tr key={index}>
                        <td className="text-center">
                          <img
                            src={`http://127.0.0.1:8000/storage/images/${beritaItem.image}`}
                            alt=""
                            width="200"
                            className="rounded"
                          />
                        </td>
                        <td>{beritaItem.judul}</td>
                        <td>{beritaItem.deskripsi}</td>
                        <td className="text-center">
                          <Link
                            to={`/edit/berita/${beritaItem.id}`}
                            className="btn btn-sm btn-primary rounded-sm shadow border-0 me-2"
                          >
                            EDIT
                          </Link>
                          <button
                            onClick={() => deleteBerita(beritaItem.id)}
                            className="btn btn-sm btn-danger rounded-sm shadow border-0"
                          >
                            DELETE
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center">
                        <div className="alert alert-danger mb-0">
                          Data Belum Tersedia!
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
