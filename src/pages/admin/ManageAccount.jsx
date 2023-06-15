import React from 'react'
import PageTitle from '../../utilities/PageTitle'

function ManageAccount() {
  return (
    <div>
      <PageTitle title="Manage Account" />
      <div className="flex items-center justify-end mr-3 py-4">
        <div className="relative">
          <input type="text" placeholder="Search Content" className="pl-10 pr-4 py-2 rounded-lg border border-slate border-opacity-50  focus:border-transparent" />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-black">
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>No.Handphone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className=" bg-white ">
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Irsyad Nafi Alif Perdana</td>
              <td className="text-ellipsis ">irsyadnad@gmail.com </td>
              <td>+628172387123</td>
              <td>TEST</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Irsyad Nafi Alif Perdana</td>
              <td className="text-ellipsis ">irsyadnad@gmail.com </td>
              <td>+628172387123</td>
              <td>TEST</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Irsyad Nafi Alif Perdana</td>
              <td className="text-ellipsis ">irsyadnad@gmail.com </td>
              <td>+628172387123</td>
              <td>TEST</td>
            </tr>
            <tr>
              <th>4</th>
              <td>Irsyad Nafi Alif Perdana</td>
              <td className="text-ellipsis ">irsyadnad@gmail.com </td>
              <td>+628172387123</td>
              <td>TEST</td>
            </tr>
            <tr>
              <th>5</th>
              <td>Irsyad Nafi Alif Perdana</td>
              <td className="text-ellipsis ">irsyadnad@gmail.com </td>
              <td>+628172387123</td>
              <td>TEST</td>
            </tr>
            <tr>
              <th>6</th>
              <td>Irsyad Nafi Alif Perdana</td>
              <td className="text-ellipsis ">irsyadnad@gmail.com </td>
              <td>+628172387123</td>
              <td>TEST</td>
            </tr>
            <tr>
              <th>7</th>
              <td>Irsyad Nafi Alif Perdana</td>
              <td className="text-ellipsis ">irsyadnad@gmail.com </td>
              <td>+628172387123</td>
              <td>TEST</td>
            </tr>
            <tr>
              <th>8</th>
              <td>Irsyad Nafi Alif Perdana</td>
              <td className="text-ellipsis ">irsyadnad@gmail.com </td>
              <td>+628172387123</td>
              <td>TEST</td>
            </tr>
            <tr>
              <th>9</th>
              <td>Irsyad Nafi Alif Perdana</td>
              <td className="text-ellipsis ">irsyadnad@gmail.com </td>
              <td>+628172387123</td>
              <td>TEST</td>
            </tr>
            <tr>
              <th>10</th>
              <td>Irsyad Nafi Alif Perdana</td>
              <td className="text-ellipsis ">irsyadnad@gmail.com </td>
              <td>+628172387123</td>
              <td>TEST</td>
            </tr>
            <tr>
              <th>11</th>
              <td>Irsyad Nafi Alif Perdana</td>
              <td className="text-ellipsis ">irsyadnad@gmail.com </td>
              <td>+628172387123</td>
              <td>TEST</td>
            </tr>
            <tr>
              <th>12</th>
              <td>Irsyad Nafi Alif Perdana</td>
              <td className="text-ellipsis ">irsyadnad@gmail.com </td>
              <td>+628172387123</td>
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

export default ManageAccount