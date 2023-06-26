import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Table = ({ columns, handleViewLink, handleEditLink, handleDeleteLink, url, method, contentType }) => {
  
  const tableColumns = ["No", ...columns];
  
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const fetchData = async () => {
    try {
      const result = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': contentType,
          // authorization: token ? `${token}` : '',
        }
      })
        .then((response) => response.json())
        .then((resData) => {
          const newData = Object.keys(resData).map((id) => ({ ...resData[id], id }));
          setData(newData);

          // console.log(resData);
        })
        .catch((error) => {
          console.error('Error Fetch:', error);
        });
    } catch (err) {
      console.log(err);
    }
  };


  // Tampilan tabel dengan menggunakan data
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table bg-white">
        <thead>
          <tr>
            {tableColumns.map((column) => (
              <th
                key={column}
                className="px-6 py-3 text-black text-left text-xs leading-4 font-medium uppercase tracking-wider"
              >
                {column}
              </th>
            ))}
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
          
            <tr key={index} className="border-t border-gray-300 text-ellipsis">
            
              <td className="px-6 py-4 whitespace-no-wrap">
                {index + 1}
              </td>
              {columns.map((column) => (
                <td
                  key={`${index}-${column}`}
                  className="px-6 py-4 whitespace-no-wrap"
                >
                  {item[column]}
                </td>
              ))}
              <td className="px-6 py-4 whitespace-no-wrap">
                <Link
                  to={handleViewLink(item.id)}
                  className="text-blue-500 hover:text-blue-700 mr-2"
                >
                  Lihat
                </Link>
                <Link
                  to={handleEditLink(item.id)}
                  className="text-green-500 hover:text-green-700 mr-2"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDeleteLink(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
  
  
  
};

export default Table;
