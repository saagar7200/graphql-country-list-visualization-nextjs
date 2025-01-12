import React from 'react';

const TableRowSkeleton = () => {
  return (
    <>
    {new Array(20).fill(0).map((_, index) => (
      <tr key ={index} className="h-8 bg-gray-200 rounded-md animate-pulse space-y-2">
       <td className="h-8 bg-gray-200 rounded-md"></td>
      <td className="h-8 bg-gray-200 rounded-md"></td>
      <td className="h-8 bg-gray-200 rounded-md"></td>
      <td className="h-8 bg-gray-200 rounded-md"></td>
      <td className="h-8 bg-gray-200 rounded-md"></td> 
    </tr>
    ))}
    </>
  );
};

export default TableRowSkeleton;