import React, { useState } from "react";
import { RiEdit2Line, RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import PageTitle from "../../utilities/PageTitle";
import AddButton from "../../utilities/AddButton";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const ManageArticle = () => {
  const [data, setData] = useState([
    { id: 1, title: "Judul 1", description: "Deskripsi 1", uploadDate: "2023-06-20" },
    { id: 2, title: "Judul 2", description: "Deskripsi 2", uploadDate: "2023-06-21" },
    { id: 3, title: "Judul 3", description: "Deskripsi 3", uploadDate: "2023-06-22" },
    // Tambahkan data sesuai kebutuhan
  ]);

  const [editItemId, setEditItemId] = useState(null);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateData, setUpdateData] = useState({ id: null, title: "", description: "", uploadDate: "" });

  const handleUpdate = (id) => {
    const selectedItem = data.find((item) => item.id === id);
    setUpdateData({ id: selectedItem.id, title: selectedItem.title, description: selectedItem.description, uploadDate: selectedItem.uploadDate });
    setShowUpdateModal(true);
  };

  const handleCancelUpdate = () => {
    setShowUpdateModal(false);
  };

  const handleUpdateSubmit = () => {
    const updatedData = data.map((item) => (item.id === updateData.id ? { ...item, title: updateData.title, description: updateData.description, uploadDate: updateData.uploadDate } : item));
    setData(updatedData);
    setShowUpdateModal(false);
  };

  const handleDelete = (id) => {
    setDeleteItemId(id);
    setShowConfirmDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    const updatedData = data.filter((item) => item.id !== deleteItemId);
    setData(updatedData);
    setShowConfirmDeleteModal(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmDeleteModal(false);
  };

  return (
    <>
      <PageTitle title="Manage Article" />
      <div className="flex justify-between py-3">
        <AddButton text="Article" />
        <div className="flex items-center justify-center">
          <div className="relative">
            <input type="text" placeholder="Search Content" className="pl-10 pr-4 py-2 rounded-lg border border-slate border-opacity-50 focus:border-transparent" />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      No
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Judul
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Deskripsi
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tanggal Upload
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.map((item, index) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{item.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{item.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{item.uploadDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleUpdate(item.id)}
                          className="mr-2 px-4 py-2 text-xs font-medium text-blue-500 bg-blue-100 rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                          <RiEdit2Line />
                        </button>
                        <button onClick={() => handleDelete(item.id)} className="px-4 py-2 text-xs font-medium text-red-500 bg-red-100 rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                          <RiDeleteBin5Line />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              {/* Tanda panah kiri */}
              <span className="sr-only">Previous</span>
            </a>
            <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              {/* Nomor halaman */}1
            </a>
            {/* Tambahkan nomor halaman sesuai kebutuhan */}
            <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              {/* Nomor halaman */}2
            </a>
            <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              {/* Tanda panah kanan */}
              <span className="sr-only">Next</span>
            </a>
          </nav>
        </div>
      </div>

      {/* Modal Konfirmasi Delete */}
      <Modal open={showConfirmDeleteModal} onClose={handleCancelDelete} center>
        <h2 className="text-xl font-semibold mb-4">Konfirmasi Hapus</h2>
        <p>Apakah Anda yakin ingin menghapus data ini?</p>
        <div className="mt-6 flex justify-end">
          <button onClick={handleConfirmDelete} className="px-4 py-2 mr-2 text-sm font-medium text-red-500 bg-red-100 rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
            Ya
          </button>
          <button onClick={handleCancelDelete} className="px-4 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
            Tidak
          </button>
        </div>
      </Modal>

      {/* Modal Update */}
      <Modal open={showUpdateModal} onClose={handleCancelUpdate} center>
        <h2 className="text-xl font-semibold mb-4">Update Data</h2>
        <div className="flex flex-col">
          <label htmlFor="update-title" className="mb-2 font-medium text-gray-700">
            Title
          </label>
          <input
            id="update-title"
            type="text"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={updateData.title}
            onChange={(e) => setUpdateData({ ...updateData, title: e.target.value })}
          />
        </div>
        <div className="mt-4 flex flex-col">
          <label htmlFor="update-description" className="mb-2 font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="update-description"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={updateData.description}
            onChange={(e) => setUpdateData({ ...updateData, description: e.target.value })}
          />
        </div>
        <div className="mt-4 flex justify-end">
          <button onClick={handleUpdateSubmit} className="px-4 py-2 text-sm font-medium text-blue-500 bg-blue-100 rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Update
          </button>
          <button onClick={handleCancelUpdate} className="px-4 py-2 ml-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
            Batal
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ManageArticle;
