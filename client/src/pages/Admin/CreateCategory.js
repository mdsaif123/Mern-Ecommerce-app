import React, { useEffect, useState } from "react";
import AdminMenu from "../../Components/AdminMenu";
import Navbar from "../../Components/Navbar";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Modal } from "antd";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CreateCategory = () => {
  const [categories, setcategories] = useState([]);
  const [name, setname] = useState("");
  const [selected, setselected] = useState(null);
  const [updatedname, setupdatedname] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    handleupdate();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8080/create-category",
        { name }
      );
      if (data?.success) {
        toast.success(`${name} is created`);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/get-category");
      if (data.success) {
        setcategories(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while getting categories");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  const handleupdate = async () => {
    try {
      const { data } = await axios.put(
        `http://localhost:8080/update-category/${selected._id}`,
        { name: updatedname }
      );
      if (data.success) {
        toast.success(`${updatedname} is updated`);
        setselected(null);
        setupdatedname("");
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const handleDelete = async (Pid) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8080/delete-category/${Pid}`
      );
      if (data.success) {
        toast.success(`Category is deleted`);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <Navbar />
      <Toaster />
      <div className="container p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h2 className="text-center text-secondary">Manage Category</h2>
            <form
                    className="d-flex justify-content-center my-5"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        className=" form-control"
                        placeholder="Enter category"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary mx-2 ">
                        Add
                    </button>
                </form>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col" className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((c) => (
                  <tr key={c._id}>
                    <td>{c.name}</td>
                    <td className="text-end">
                    
                      <button
                        className="btn btn-primary mx-2"
                        onClick={() => {
                          showModal();
                          setselected(c);
                          setupdatedname(c.name);
                        }}
                      >
                      <FaRegEdit />
                      </button>
                      <button
                        className="btn btn-danger mx-2"
                        onClick={() => {
                          handleDelete(c._id);
                        }}
                      >
                       <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Modal
            title="Edit Category"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Enter category"
              value={updatedname}
              onChange={(e) => setupdatedname(e.target.value)}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;
