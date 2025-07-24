import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../context/ApiContext";
import { Users, User, HandCoins, Landmark } from "lucide-react";

export const Dashboard = () => {
  const { filterdata } = useContext(ApiContext);
  const [department, setDepartment] = useState(0);
  const [activeemp, setActiveemp] = useState(0);
  const [avrsalery, setAvrsalery] = useState(0);


  const getDepartment = () => {
    let dep = [];
    filterdata?.forEach((emp) => {
      if (!dep.includes(emp.department)) {
        dep.push(emp.department);
      }
    });
    setDepartment(dep.length);
  };

  const getActiveEmp = () => {
    const activeEmployees = filterdata?.filter((emp) => emp.active === true);
    setActiveemp(activeEmployees?.length || 0);
  };

  const getAveragesalery = () => {
    if (filterdata?.length > 0) {
      const totalSalary = filterdata.reduce((acc, cur) => acc + Number(cur.salary), 0);
      const averageSalary = totalSalary / filterdata.length;
      setAvrsalery(averageSalary.toFixed(2));
    } else {
      setAvrsalery(0);
    }
  };

  useEffect(() => {
    getDepartment();
    getActiveEmp();
    getAveragesalery();
  }, [filterdata]);

  return (
    <>
      <div className="flex flex-col mx-auto w-full">
        <div className="font-extrabold font-serif text-4xl mt-3 ms-7">Dashboard</div>
        <div className="flex justify-around mt-4 m-5">
          <div className="bg-red-500 w-full p-5 m-3 rounded flex">
            <Users size={100} />
            <div className="my-auto ms-10">
              <p className="text-xl font-bold">Total Employees</p>
              <p className="font-bold">{filterdata.length}</p>
            </div>
          </div>
          <div className="bg-orange-500 w-full p-5 m-3 rounded flex">
            <Landmark size={100} />
            <div className="my-auto ms-10">
              <p className="text-xl font-bold">Department</p>
              <p className="font-bold">{department}</p>
            </div>
          </div>
          <div className="bg-blue-500 w-full p-5 m-3 rounded flex">
            <User size={100} />
            <div className="my-auto ms-10">
              <p className="text-xl font-bold">Active User</p>
              <p className="font-bold">{activeemp}</p>
            </div>
          </div>
          <div className="bg-green-500 w-full p-5 m-3 rounded flex">
            <HandCoins size={100} />
            <div className="my-auto ms-10">
              <p className="text-xl font-bold">Average Salary</p>
              <p className="font-bold">₹{avrsalery}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
