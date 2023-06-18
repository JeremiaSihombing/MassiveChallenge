import React from "react";
import PageTitle from "../../utilities/PageTitle";
import AddButton from "../../utilities/AddButton";


function ManageCommunity() {
  return (
    <div>
      <PageTitle title="Manage Community" />
      <div className="flex justify-between py-3">
        <AddButton text="Community" />
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
              <th></th>
              <th>Name</th>
              <th>Description</th>
              <th>Community</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Green Bites</td>
              <td className="text-ellipsis ">Green Bites adalah sebuah komunitas</td>
              <td>8 Person</td>
              <td>TEST</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Green Bites</td>
              <td className="text-ellipsis ">Green Bites adalah sebuah komunitas</td>
              <td>8 Person</td>
              <td>TEST</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Green Bites</td>
              <td className="text-ellipsis ">Green Bites adalah sebuah komunitas</td>
              <td>8 Person</td>
              <td>TEST</td>
            </tr>
            <tr>
              <th>4</th>
              <td>Green Bites</td>
              <td className="text-ellipsis ">Green Bites adalah sebuah komunitas</td>
              <td>8 Person</td>
              <td>TEST</td>
            </tr>
            <tr>
              <th>5</th>
              <td>Green Bites</td>
              <td className="text-ellipsis ">Green Bites adalah sebuah komunitas</td>
              <td>8 Person</td>
              <td>TEST</td>
            </tr>
            <tr>
              <th>6</th>
              <td>Green Bites</td>
              <td className="text-ellipsis ">Green Bites adalah sebuah komunitas</td>
              <td>8 Person</td>
              <td>TEST</td>
            </tr>
            <tr>
              <th>7</th>
              <td>Green Bites</td>
              <td className="text-ellipsis ">Green Bites adalah sebuah komunitas</td>
              <td>8 Person</td>
              <td>TEST</td>
            </tr>
            <tr>
              <th>8</th>
              <td>Green Bites</td>
              <td className="text-ellipsis ">Green Bites adalah sebuah komunitas</td>
              <td>8 Person</td>
              <td>TEST</td>
            </tr>
            <tr>
              <th>9</th>
              <td>Green Bites</td>
              <td className="text-ellipsis ">Green Bites adalah sebuah komunitas</td>
              <td>8 Person</td>
              <td>TEST</td>
            </tr>
            <tr>
              <th>10</th>
              <td>Green Bites</td>
              <td c3lassName="text-ellipsis ">Green Bites adalah sebuah komunitas</td>
              <td>8 Person</td>
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

export default ManageCommunity;
