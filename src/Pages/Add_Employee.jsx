import { EmployeeForm } from "../Components/Employeeform"

export const Add_Employee=()=>{
    return(
        <>
        <div className="flex flex-col mx-auto">
        <h2 className="text-3xl font-bold mx-auto mt-8">Add Employee Form</h2>
        <EmployeeForm/>
        </div>
        </>
    )
}