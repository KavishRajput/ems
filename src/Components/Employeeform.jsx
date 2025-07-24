import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";


export const EmployeeForm = ({onedit=false,defaultdata=null}) => {
  const { 
    register,
    handleSubmit,
    reset,
    formState: { errors,isSubmitSuccessful },
            } = useForm({
                  defaultValues: defaultdata
            });

    const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("data",data);
    if(onedit){
      //update employee
      const putresponse = await axios.put(`http://localhost:3000/employeesnpx/${defaultdata.id}`, data);
      console.log("putresponse",putresponse);
      toast.success('Successfully toasted!')
        navigate("/employee")
    }


    else{
      const postresponse = await axios.post(`http://localhost:3000/employeesnpx`,data);
      console.log(postresponse)
      
      if(isSubmitSuccessful || !onedit){
        reset({
            firstname: "",
            lastname: "",
            fathername:"",
            email: "",
            mobilenumber:"",
            address:"",
            joining_date:"",
            active:"",
            designation:"",
            department:"",
            salary:"",
          })
        }
      }
  };

  useEffect(() => {
    reset(defaultdata);
}, [defaultdata]);


  return (
    <div className="max-w-4xl mt-10 bg-white shadow-lg rounded-xl p-8 w-full mx-auto">

      <form onSubmit={handleSubmit(onSubmit)} method='POST' className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* First Name */}
        <div>
          <input
            className="p-3 border rounded-lg w-full"
            type="text"
            placeholder="First Name"
            {...register("firstname", {
              required: "First name is required",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "Only letters allowed",
              },
              minLength: {
                value: 3,
                message: "Min 3 characters",
              },
              maxLength: {
                value: 20,
                message: "Max 20 characters",
              },
            })}
          />
          {errors.firstname && <p className="text-red-600 text-sm">{errors.firstname.message}</p>}
        </div>

        {/* Last Name */}
        <div>
          <input
            className="p-3 border rounded-lg w-full"
            type="text"
            placeholder="Last Name"
            {...register("lastname", {
              required: "Last name is required",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "Only letters allowed",
              },
            })}
          />
          {errors.lastname && <p className="text-red-600 text-sm">{errors.lastname.message}</p>}
        </div>

        {/* Father's Name */}
        <div>
          <input
            className="p-3 border rounded-lg w-full"
            type="text"
            placeholder="Father's Name"
            {...register("fathername", { required: "Father's name is required" })}
          />
          {errors.fathername && <p className="text-red-600 text-sm">{errors.fathername.message}</p>}
        </div>

        {/* Email */}
        <div>
          <input
            className="p-3 border rounded-lg w-full"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
        </div>

        {/* Mobile Number */}
        <div>
          <input
            className="p-3 border rounded-lg w-full"
            type="text"
            placeholder="Mobile Number"
            {...register("mobilenumber", {
              required: "Mobile number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Must be 10 digits",
              },
            })}
          />
          {errors.mobilenumber && <p className="text-red-600 text-sm">{errors.mobilenumber.message}</p>}
        </div>

        {/* Address */}
        <div>
          <input
            className="p-3 border rounded-lg w-full"
            type="text"
            placeholder="Address"
            {...register("address", { required: "Address is required" })}
          />
          {errors.address && <p className="text-red-600 text-sm">{errors.address.message}</p>}
        </div>

        {/* Joining Date */}
        <div>
          <input
            className="p-3 border rounded-lg w-full"
            type="date"
            {...register("joining_date", { required: "Joining date is required" })}
          />
          {errors.joining_date && <p className="text-red-600 text-sm">{errors.joining_date.message}</p>}
        </div>

        {/* Department */}
        <div>
          <select
            className="p-3 border rounded-lg w-full"
            {...register("department", { required: "Department is required" })}
          >
            <option value="">Select Department</option>
            <option value="Engineering">Engineering</option>
            <option value="Marketing">Marketing</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Finance">Finance</option>
            <option value="Design">Design</option>
            <option value="Operations">Operations</option>
          </select>
          {errors.department && <p className="text-red-600 text-sm">{errors.department.message}</p>}
        </div>

        {/* Designation */}
        <div>
          <input
            className="p-3 border rounded-lg w-full"
            type="text"
            placeholder="Designation"
            {...register("designation", { required: "Designation is required" })}
          />
          {errors.designation && <p className="text-red-600 text-sm">{errors.designation.message}</p>}
        </div>

        {/* Salary */}
        <div>
          <input
            className="p-3 border rounded-lg w-full"
            type="number"
            placeholder="Salary"
            {...register("salary", {
              required: "Salary is required",
              min: {
                value: 1000,
                message: "Salary must be at least 1000",
              },
            })}
          />
          {errors.salary && <p className="text-red-600 text-sm">{errors.salary.message}</p>}
        </div>

        {/* Active */}
        <div className="flex items-center gap-2 col-span-full">
          <input
            type="checkbox"
            className="w-4 h-4"
            {...register("active")}
          />
          <label className="text-gray-700">Active</label>
        </div>

        {/* Buttons */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg col-span-full transition-all" type="submit">Submit</button>
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg col-span-full transition-all" type="reset">Reset</button>
      </form>
    </div>
  );
};
