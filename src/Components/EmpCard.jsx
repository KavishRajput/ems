import { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";
import { Link } from "react-router";

export const EmpCard = ({ detail }) => {
  const { handleDeleteEmpData } = useContext(ApiContext);

  return (
    <div className="w-fit border-2 border-gray-300 rounded-lg shadow-md bg-white p-4 flex gap-10 items-center my-3">
      <img
        className="w-24 h-24 rounded-full object-cover"
        src={`https://api.dicebear.com/9.x/initials/svg?seed=${detail.firstname}${detail.lastname}`}
        alt={`${detail.firstname} ${detail.lastname}`}
      />
      <div className="flex-1">
        <h2 className="text-xl font-bold font-serif">
          {detail.firstname} {detail.lastname}
        </h2>
        <h3 className="text-gray-600 font-serif">{detail.department}</h3>
        <h3 className="text-gray-600 font-serif">{detail.designation}</h3>
        <div className="mt-4 flex gap-3">
          <Link to={`/employee/view/${detail.id}`}>
            <button className="bg-blue-700 text-white px-4 py-2 rounded">View</button>
          </Link>
          <Link to={`/edit_employee/${detail.id}`}>
          <button className="bg-green-700 text-white px-4 py-2 rounded">Edit</button>
          </Link>
          <button className="bg-red-700 text-white px-4 py-2 rounded" onClick={() => handleDeleteEmpData(detail.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};
