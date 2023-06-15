import React from 'react'
import PageTitle from '../../utilities/PageTitle'
import AddButton from '../../utilities/AddButton'

function ManageArticle() {
  return (
    <div>
      <PageTitle title="Manage Article" />
      <div className="flex justify-between py-3">
        <AddButton text="Article" />
        <div className="flex items-center justify-center">
          <div className="relative">
            <input type="text" placeholder="Search Content" className="pl-10 pr-4 py-2 rounded-lg border border-slate border-opacity-50  focus:border-transparent" />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-black">
              <th>No</th>
              <th>Judul</th>
              <th>Description</th>
              <th>Activation date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td className="text-ellipsis">Perbedaan Food Loss dan ... </td>
              <td className="text-ellipsis ">Food loss adalah penurunan kualitas makanan</td>
              <td>21 Mei 2021</td>
              <td>TEST</td>
            </tr>
            <tr>
              <th>2</th>
              <td className="text-ellipsis">Perbedaan Food Loss dan ... </td>
              <td className="text-ellipsis ">Food loss adalah penurunan kualitas makanan</td>
              <td>21 Mei 2021</td>
              <td>TEST</td>
            </tr>
            <tr>
              <th>3</th>
              <td className="text-ellipsis">Perbedaan Food Loss dan ... </td>
              <td className="text-ellipsis ">Food loss adalah penurunan kualitas makanan</td>
              <td>21 Mei 2021</td>
              <td>TEST</td>
            </tr>
            <tr>
              <th>4</th>
              <td className="text-ellipsis">Perbedaan Food Loss dan ... </td>
              <td className="text-ellipsis ">Food loss adalah penurunan kualitas makanan</td>
              <td>21 Mei 2021</td>
              <td>TEST</td>
            </tr>
            <tr>
              <th>5</th>
              <td className="text-ellipsis">Perbedaan Food Loss dan ... </td>
              <td className="text-ellipsis ">Food loss adalah penurunan kualitas makanan</td>
              <td>21 Mei 2021</td>
              <td>TEST</td>
            </tr>
            <tr>
              <th>6</th>
              <td className="text-ellipsis">Perbedaan Food Loss dan ... </td>
              <td className="text-ellipsis ">Food loss adalah penurunan kualitas makanan</td>
              <td>21 Mei 2021</td>
              <td>TEST</td>
            </tr>
            <tr>
              <th>7</th>
              <td className="text-ellipsis">Perbedaan Food Loss dan ... </td>
              <td className="text-ellipsis ">Food loss adalah penurunan kualitas makanan</td>
              <td>21 Mei 2021</td>
              <td>TEST</td>
            </tr>
            <tr>
              <th>8</th>
              <td className="text-ellipsis">Perbedaan Food Loss dan ... </td>
              <td className="text-ellipsis ">Food loss adalah penurunan kualitas makanan</td>
              <td>21 Mei 2021</td>
              <td>TEST</td>
            </tr>
            <tr>
              <th>9</th>
              <td className="text-ellipsis">Perbedaan Food Loss dan ... </td>
              <td className="text-ellipsis ">Food loss adalah penurunan kualitas makanan</td>
              <td>21 Mei 2021</td>
              <td>TEST</td>
            </tr>
            <tr>
              <th>10</th>
              <td className="text-ellipsis">Perbedaan Food Loss dan ... </td>
              <td className="text-ellipsis ">Food loss adalah penurunan kualitas makanan</td>
              <td>21 Mei 2021</td>
              <td>TEST</td>
            </tr>
            
          </tbody>
        </table>
      </div>
      <div className="join py-4 flex justify-center gap-2 ">
        <button className="join-item btn hover:bg-blue-700 hover:text-white">1</button>
        <button className="join-item btn hover:bg-blue-700 hover:text-white">2</button>
        <button className="join-item btn hover:bg-blue-700 hover:text-white">3</button>
        <button className="join-item btn hover:bg-blue-700 hover:text-white">4</button>
        <div className="flex items-center justify-center"></div>
      </div>
    </div>
  );
}

export default ManageArticle