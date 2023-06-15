import React from 'react'

const AddArticle = () => {
  return (
    <div>
      <PageTitle title="Manage Article" />
      <AddButton text="Article" />
      <div>AddArticle</div>
      <div className="flex flex-col mt-4 gap-3">
        <label className="mb-1 text-sm font-medium text-gray-700">Title</label>
        <input type="text" placeholder="Titile" className="input border-[#d9d9d9] w-full max-w-xs" />
        <label className="mb-1 text-sm font-medium text-gray-700">Description</label>
        <textarea className="textarea border-[#d9d9d9]  w-full h-[400px]" placeholder="Write Your Artikel..."></textarea>
      </div>
      <div className="flex gap-4 mt-5">
        <button className="btn bg-[#324054] text-white hover:bg-slate-600 hover:text-white">Cancel</button>
        <button className="btn bg-[#137038] text-white hover:bg-green-700 hover:text-white">Create</button>
      </div>
    </div>
  );
}

export default AddArticle