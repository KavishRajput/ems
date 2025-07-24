import { useContext, useEffect, useState} from "react";
import { ApiContext } from "../../context/ApiContext";
import { EmpCard } from "../Components/EmpCard";
import axios from "axios";

export const Employee = () => {
  const { filterdata,filterbydepartment,deleteempdata } = useContext(ApiContext);
  const [page,setPage]=useState(1);
  const [totalpages,setTotalpages]=useState(0);

const getPeginationEmpdata = async () => {  
    try {
      const getpeginationresponse = await axios.get("http://localhost:3000/employeesnpx/?_page=1&_per_page=4");
      console.log(getpeginationresponse.data)
      setTotalpages(getpeginationresponse.data.pages)
    } catch (err) {
      console.error("Error fetching employee data:", err);
    }
  };

  useEffect(()=>{
    getPeginationEmpdata();
  },[])

  return (
    <>
    <div className="flex flex-col mx-auto">

      <div className="w-full h-30 flex justify-around items-center">
        <input type="text" placeholder="Search by name..." className="border p-2 rounded w-full sm:w-1/3"/>
        <select className="border p-2 rounded w-full sm:w-1/3" onChange={filterbydepartment}>
            <option value="departments">All Departments</option>
            <option value="Marketing">Marketing</option>
            <option value="Engineering">Engineering</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Finance">Finance</option>
            <option value="Design">Design</option>
            <option value="Operations">Operations</option>
        </select>
      </div>

      <div className="py-5 flex flex-wrap justify-around gap-2">
            {filterdata?.length > 0 ? (
              filterdata.map((emp) => <EmpCard key={emp.id} detail={emp} deleteempdata={deleteempdata}/>)
              ) : (
              <p className="text-center text-gray-600">No employees found.</p>
              )}
      </div>

      <div className="mx-auto my-6">
        <button className=" bg-blue-500 px-4 py-1 rounded disabled:bg-red-500" onClick={()=>setPage(page-1)} disabled={page==1?true:false}>Previous</button>
        <span className="mx-4">{page}</span>
        <button className="bg-blue-500 px-4 py-1 rounded disabled:bg-red-500" onClick={()=>setPage(page+1)} disabled={page==totalpages?true:false}>Next</button>
      </div>
      </div>
    </>
  );
};
