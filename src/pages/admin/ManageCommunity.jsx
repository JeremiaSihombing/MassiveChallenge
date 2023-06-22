import React, { useState } from "react";
import { RiPencilLine, RiDeleteBin2Line } from "react-icons/ri";
import PageTitle from "../../utilities/PageTitle";
import AddButton from "../../utilities/AddButton";

const ManageCommunity = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Community 1",
      description: "Lorem ipsum dolor sit amet",
      memberCount: 5,
    },
    {
      id: 2,
      name: "Community 2",
      description: "Consectetur adipiscing elit",
      memberCount: 3,
    },
    // Tambahkan data lainnya di sini jika diperlukan
  ]);

  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [updatedMemberCount, setUpdatedMemberCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const handleUpdate = (community) => {
    setSelectedCommunity(community);
    setUpdatedName(community.name);
    setUpdatedDescription(community.description);
    setUpdatedMemberCount(community.memberCount);
    setShowUpdatePopup(true);
  };

  const handleDelete = (community) => {
    setSelectedCommunity(community);
    setShowDeletePopup(true);
  };

  const handleConfirmDelete = () => {
    const updatedData = data.filter((item) => item.id !== selectedCommunity.id);
    setData(updatedData);
    setShowDeletePopup(false);
  };

  const handleUpdateSubmit = () => {
    const updatedData = data.map((item) => {
      if (item.id === selectedCommunity.id) {
        return {
          ...item,
          name: updatedName,
          description: updatedDescription,
          memberCount: updatedMemberCount,
        };
      }
      return item;
    });

    setData(updatedData);
    setShowUpdatePopup(false);
  };

  // Mendapatkan indeks item pada halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Mengubah halaman saat ini
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <PageTitle title="Manage Community" />
      <div className="flex justify-between py-3">
        <AddButton text="Community" />
        <div className="flex items-center justify-center">
          <div className="relative">
            <input type="text" placeholder="Search Content" className="pl-10 pr-4 py-2 rounded-lg border border-slate border-opacity-50 focus:border-transparent" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <table className="w-full bg-white shadow-md rounded my-4">
          <thead>
            <tr>
              <th className="py-2">No</th>
              <th className="py-2">Name</th>
              <th className="py-2">Description</th>
              <th className="py-2">Member Count</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((community, index) => (
              <tr key={community.id}>
                <td className="py-2 text-center">{indexOfFirstItem + index + 1}</td>
                <td className="py-2">{community.name}</td>
                <td className="py-2">{community.description}</td>
                <td className="py-2">{community.memberCount}</td>
                <td className="py-2">
                  <button className="text-blue-500 hover:text-blue-700" onClick={() => handleUpdate(community)}>
                    <RiPencilLine />
                  </button>
                  <button className="text-red-500 hover:text-red-700 ml-2" onClick={() => handleDelete(community)}>
                    <RiDeleteBin2Line />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showUpdatePopup && selectedCommunity && (
          <div className="fixed inset-0 flex items-center justify-center z-10">
            <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
            <div className="bg-white p-6 rounded-lg z-20">
              <h2 className="text-lg font-semibold mb-4">Update Community</h2>
              <input type="text" value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} className="w-full mb-2 px-2 py-1 rounded border border-gray-300" placeholder="Name" />
              <textarea value={updatedDescription} onChange={(e) => setUpdatedDescription(e.target.value)} className="w-full mb-2 px-2 py-1 rounded border border-gray-300" placeholder="Description"></textarea>
              <input type="number" value={updatedMemberCount} onChange={(e) => setUpdatedMemberCount(e.target.value)} className="w-full mb-2 px-2 py-1 rounded border border-gray-300" placeholder="Member Count" />
              <button onClick={handleUpdateSubmit} className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">
                Update
              </button>
              <button onClick={() => setShowUpdatePopup(false)} className="ml-2 text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 py-1 px-2 rounded">
                Cancel
              </button>
            </div>
          </div>
        )}

        {showDeletePopup && selectedCommunity && (
          <div className="fixed inset-0 flex items-center justify-center z-10">
            <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
            <div className="bg-white p-6 rounded-lg z-20">
              <h2 className="text-lg font-semibold mb-4">Delete Community</h2>
              <p>Are you sure you want to delete {selectedCommunity.name}?</p>
              <button onClick={handleConfirmDelete} className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded">
                Delete
              </button>
              <button onClick={() => setShowDeletePopup(false)} className="ml-2 text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 py-1 px-2 rounded">
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className="flex items-center justify-end">
          <div className="flex mt-4">
            {data.length > itemsPerPage && (
              <div className="flex">
                <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="py-2 px-4 border border-gray-300 rounded-l">
                  Previous
                </button>
                <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastItem >= data.length} className="py-2 px-4 border border-gray-300 rounded-r">
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageCommunity;
