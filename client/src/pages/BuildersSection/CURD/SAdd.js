import { useState } from "react";
import Fheader from "components/Fheader";
import Ffooter from "components/Ffooter";
import { Box } from "@mui/material";



const defaultValue = {
    ID: '' ,
    Name:'',
    category: '',
    contactnubmer: '',
    email:'',
    address: ''
}


const SAdd = () => {

const [user, setuser] = useState({defaultValue});

    const onValueChange = (e) => {
        console.log(e.target.name ,e.target.value)
        setuser({ ...user, [e.target.name]:e.target.value});
        console.log(user);
    }
      return( 
        <Box>
          <Fheader title="Stake holders insertion"></Fheader>
          <div class="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 bg-gray-50">
            <div class="relative bg-white px-6 pt-5 pb-5 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                <div class="mx-auto max-w-md">
                    <h2 class="text-3xl text-center font-bold leading-tight">
                      Stake holders
                    </h2>
                    <div class="divide-y divide-gray-300/50">
                        <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
                            <form id="user_form">
                                  <label for="Id" class="text-md w-40 inline-block font-medium leading-5 text-gray-700">
                                    ID
                                  </label>
                                  <input required type="text" id="Id" name="Id"
                                class="bg-gray-100 inline-block rounded-lg shadow-md px-4 py-3 mb-5 text-base leading-6 placeholder-gray-500" placeholder="Enter ID" onChange={(e) => onValueChange(e)}/><br />
                                
                                <label for="name" class="text-md w-40 inline-block font-medium leading-5 text-gray-700">
                                    Name
                                </label>
                                <input required type="text" id="name" name="name"
                                class="bg-gray-100 inline-block rounded-lg shadow-md px-4 py-3 mb-5 text-base leading-6 placeholder-gray-500" placeholder="Enter Full Name" onChange={(e) => onValueChange(e)}/><br />
                                <label for="category" class="text-md w-40 inline-block font-medium leading-5 text-gray-700">
                                  category
                                </label>
                                <input required type="text" id="category" name="category"
                                class="bg-gray-100 inline-block rounded-lg shadow-md px-4 py-3 mb-5 text-base leading-6 placeholder-gray-500" placeholder="gov/ptr/cont" onChange={(e) => onValueChange(e)}/><br />

                                <label for="contect" class="text-md w-40 inline-block font-medium leading-5 text-gray-700">
                                    contact
                                </label>
                                <input required type="int" id="contect" name="contect"
                                class="bg-gray-100 inline-block rounded-lg shadow-md px-4 py-3 mb-5 text-base leading-6 placeholder-gray-500" placeholder="Enter contact number" onChange={(e) => onValueChange(e)}/><br />

                                <label for="email" class="text-md w-40 inline-block font-medium leading-5 text-gray-700">
                                    Email
                                </label>
                                <input required type="email" id="email" name="email"
                                class="bg-gray-100 inline-block rounded-lg shadow-md px-4 py-3 mb-5 text-base leading-6 placeholder-gray-500" placeholder="Enter Email" /><br />

                                <label for="Address" class="text-md w-40 inline-block font-medium leading-5 text-gray-700">
                                  Address
                                </label>
                                <input required type="text" id="Address" name="Address"
                                class="bg-gray-100 inline-block rounded-lg shadow-md px-4 py-3 mb-5 text-base leading-6 placeholder-gray-500" placeholder="Enter Address" onChange={(e) => onValueChange(e)}/><br />

                                <button type="submit" id="Submit"
                                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <Ffooter></Ffooter>  
        </Box>
      )
}

export default SAdd;