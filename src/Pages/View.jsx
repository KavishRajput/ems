import { useParams } from "react-router";
import { useEffect,useState } from "react";
import axios from "axios";
export const View = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const getviewdata= async()=>{
    try{
      const getviewresponse=await axios.get(`http://localhost:3000/employeesnpx/${id}`);
      setData(getviewresponse.data);
    }
    catch(error){
      console.log("Error While Featching Data",error);
    }
  }
  useEffect(()=>{
    getviewdata();
  },[id])
  return (
    <div className="w-screen h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-xl w-full max-w-5xl flex flex-col md:flex-row overflow-hidden">
        {/* Sidebar */}
        <div className="bg-gray-500 text-white flex flex-col items-center justify-center p-8 md:w-1/3">
          <div className="w-32 h-32 bg-white text-gray-600 rounded-full flex items-center justify-center text-4xl font-bold mb-4">
            <img className="rounded-full" src={`https://api.dicebear.com/9.x/initials/svg?seed=${data.firstname}${data.lastname}`} alt={`${data.firstname} ${data.lastname}`} /></div>
          <h2 className="text-2xl font-semibold">{data.firstname}{data.lastname}</h2>
          <p className="text-sm mt-1">{data.department}</p>
          <p className="text-sm">{data.designation}</p>
          <span className="mt-4 inline-block px-4 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800">
            {data.active?"active":"Inactive"}
          </span>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h3 className="text-sm font-semibold text-gray-500">Employee ID</h3>
              <p className="mt-1">{data.id}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500">Father's Name</h3>
              <p className="mt-1">{data.fathername}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500">Email</h3>
              <p className="mt-1">{data.email}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500">Mobile Number</h3>
              <p className="mt-1">{data.mobilenumber}</p>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-sm font-semibold text-gray-500">Address</h3>
              <p className="mt-1">{data.address}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500">Joining Date</h3>
              <p className="mt-1">{data.joining_date}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500">Salary</h3>
              <p className="mt-1">₹{data.salary}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
