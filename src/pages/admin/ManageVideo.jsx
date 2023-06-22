import React, { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ReactPlayer from "react-player/youtube";
import PageTitle from "../../utilities/PageTitle";
import AddButton from "../../utilities/AddButton";

const TableComponent = ({ data, onDelete, onUpdate }) => {
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [updatedYoutubeLink, setUpdatedYoutubeLink] = useState("");

  const handleUpdateClick = (id) => {
    setSelectedItemId(id);
    setShowUpdatePopup(true);
  };

  const handleDeleteClick = (id) => {
    setSelectedItemId(id);
    setShowDeletePopup(true);
  };

  const handleUpdateSubmit = () => {
    onUpdate(selectedItemId, updatedYoutubeLink);
    setShowUpdatePopup(false);
    setSelectedItemId(null);
    setUpdatedYoutubeLink("");
  };

  const handleDeleteConfirm = () => {
    onDelete(selectedItemId);
    setShowDeletePopup(false);
    setSelectedItemId(null);
  };

  const handleDeleteCancel = () => {
    setShowDeletePopup(false);
    setSelectedItemId(null);
  };

  return (
    <div>
      <PageTitle title="Manage Video" />
      <div className="flex justify-between py-3">
        <AddButton text="Video" />
        <div className="flex items-center justify-center">
          <div className="relative">
            <input type="text" placeholder="Search Content" className="pl-10 pr-4 py-2 rounded-lg border border-slate border-opacity-50 focus:border-transparent" />
          </div>
        </div>
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
            <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preview Video YouTube</th>
            <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Link</th>
            <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300">
          {data.map((item, index) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="aspect-w-16 aspect-h-9">
                  <ReactPlayer url={item.youtubeLink} width="100%" height="100%" />
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <a href={item.link} className="text-blue-500 hover:underline">
                  {item.link}
                </a>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="mr-2 px-2 py-2 text-sm text-white bg-green-500 rounded-md hover:bg-green-600" onClick={() => handleUpdateClick(item.id)}>
                  <FiEdit />
                </button>
                <button className="px-2 py-2 text-sm text-white bg-red-500 rounded-md hover:bg-red-600" onClick={() => handleDeleteClick(item.id)}>
                  <FiTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update Popup */}
      {showUpdatePopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-4 rounded-md">
            <h2 className="text-lg font-medium mb-4">Update YouTube Link</h2>
            <input type="text" className="border border-gray-300 p-2 rounded-md mb-4" placeholder="New YouTube Link" value={updatedYoutubeLink} onChange={(e) => setUpdatedYoutubeLink(e.target.value)} />
            <div className="flex justify-end">
              <button className="mr-2 px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600" onClick={handleUpdateSubmit}>
                Update
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600" onClick={() => setShowUpdatePopup(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Popup */}
      {showDeletePopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-4 rounded-md">
            <h2 className="text-lg font-medium mb-4">Delete Item</h2>
            <p className="mb-4">Are you sure you want to delete this item?</p>
            <div className="flex justify-end">
              <button className="mr-2 px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600" onClick={handleDeleteConfirm}>
                Yes
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600" onClick={handleDeleteCancel}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [data, setData] = useState([
    {
      id: 1,
      youtubeLink: "https://www.youtube.com/watch?v=_gSE5nAp2rY",
      link: "https://example.com",
    },
    {
      id: 2,
      youtubeLink: "https://www.youtube.com/watch?v=_gSE5nAp2rY",
      link: "https://example.com",
    },
    // Tambahkan data lainnya sesuai kebutuhan
  ]);

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const handleUpdate = (id, updatedLink) => {
    const dataIndex = data.findIndex((item) => item.id === id);
    if (dataIndex !== -1) {
      const updatedData = [...data];
      updatedData[dataIndex] = { ...updatedData[dataIndex], youtubeLink: updatedLink };
      setData(updatedData);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <TableComponent data={data} onDelete={handleDelete} onUpdate={handleUpdate} />
    </div>
  );
};

export default App;
