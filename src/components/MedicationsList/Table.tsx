import React from "react";
import { IMedication } from "../../types/IMedication";
import { FaEdit, FaTrash } from "react-icons/fa";

interface medicationsTableProps {
  medications: IMedication[] | undefined;
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
}
const MedicationTable: React.FC<medicationsTableProps> = ({
  medications,
  onUpdate,
  onDelete,
}) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            ID
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Description
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {medications?.map((post) => (
          <tr key={post.id}>
            <td
              className="px-3 py-4 whitespace-nowrap max-w-[50px] overflow-hidden text-ellipsis"
              style={{ width: "50px" }}
            >
              {post.id}
            </td>
            <td className="px-6 py-4  max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
              {post.title}
            </td>
            <td className="relative px-6 py-4 whitespace-nowrap max-w-[200px] overflow-hidden text-ellipsis">
              <span
                className="block"
                title={post.body}
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {post.body}
              </span>
              <div className="absolute text-wrap bottom-0 left-0 w-full p-2 bg-black text-white text-xs opacity-0 hover:opacity-100 transition-opacity duration-300">
                {post.body}
              </div>
            </td>
            <td className="px-6 py-4  max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
              <button
                onClick={() => onUpdate(post.id)}
                className="text-blue-500"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => onDelete(post.id)}
                className="text-red-500"
              >
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MedicationTable;
