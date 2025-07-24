import axios from 'axios';
import { useState, useEffect, createContext } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [employee, setEmployee] = useState([]);
  const [filterdata, setFilterdata] = useState([]);
  const [department, setDepartment] = useState("departments");
  const[deleteempdata,setDeleteempdata]=useState("");

  const getEmpdata = async () => {  
    try {
      const getresponse = await axios.get("http://localhost:3000/employeesnpx");
      setEmployee(getresponse.data);
      setFilterdata(getresponse.data);
    } catch (err) {
      console.error("Error fetching employee data:", err);
    }
  };

  const handleDeleteEmpData = async (id) => {
    try {
      const check = confirm("Are You Sure You Want To Delete This Employee?");
      if (check) {
        const response = await axios.delete(`http://localhost:3000/employeesnpx/${id}`);
        console.log(response);
        setDeleteempdata(response.data);
        getEmpdata();
      }
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  useEffect(() => {
    getEmpdata();
  }, []);

  // 🔧 Called from dropdown in UI
  const filterbydepartment = (e) => {
    const selected = e.target.value;
    setDepartment(selected);
  };

  // 🔁 Apply filter whenever department or employee changes
  useEffect(() => {
    if (department && department !== "departments") {
      const filtered = employee.filter((item) => item.department === department);
      setFilterdata(filtered);
    } else {
      setFilterdata(employee);
    }
  }, [department, employee]);

  return (
    <ApiContext.Provider value={{ filterdata, filterbydepartment, handleDeleteEmpData}}>
      {children}
    </ApiContext.Provider>
  );
};
