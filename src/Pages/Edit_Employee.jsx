import axios from "axios"
import { EmployeeForm } from "../Components/Employeeform"
import { useParams } from "react-router"
import { useEffect, useState } from "react"
export const Edit_Employee=()=>{
    const {id}=useParams()
    const [employee, setEmployee] = useState({})
    const getsingleempdata=async()=>{
        const getsingleemp = await axios.get(`http://localhost:3000/employeesnpx/${id}`);
        const data=getsingleemp.data
        setEmployee(data)
    }
    useEffect(()=>{
        getsingleempdata()
    },[])
    return(
        <>
        <div className="flex flex-col mx-auto">
        <h2 className="text-3xl font-bold mx-auto mt-8">Edit Employee Form</h2>
        <EmployeeForm onedit={true} defaultdata={employee}/>
        </div>
        </>
    )
}