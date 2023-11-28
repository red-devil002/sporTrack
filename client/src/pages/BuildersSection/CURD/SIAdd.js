import Ffooter from 'components/Ffooter';
import Fheader from 'components/Fheader';
import React from 'react';
import { Box } from "@mui/material";

function SIAdd() {
  return (
    <Box>
        <Fheader title="Site information insertion"></Fheader>
        <div class="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 bg-gray-50">
              <div class="relative bg-white px-6 pt-5 pb-5 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                  <div class="mx-auto max-w-md">
                      <h2 class="text-3xl text-center font-bold leading-tight">
                          Site Information
                      </h2>
                      <div class="divide-y divide-gray-300/50">
                          <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
                              <form id="user_form">
                                    <label for="Id" class="text-md w-40 inline-block font-medium leading-5 text-gray-700">
                                       ID
                                    </label>
                                    <input required type="text" id="Id" name="Id"
                                  class="bg-gray-100 inline-block rounded-lg shadow-md px-4 py-3 mb-5 text-base leading-6 placeholder-gray-500" placeholder="Enter Id" /><br />

                                  <label for="Organization name" class="text-md w-40 inline-block font-medium leading-5 text-gray-700">
                                    Site name
                                 </label>
                                 <input required type="text" id="sitename" name="sitename"
                                 class="bg-gray-100 inline-block rounded-lg shadow-md px-4 py-3 mb-5 text-base leading-6 placeholder-gray-500" placeholder="Enter site name" /><br />


                                  <label for="Organization name" class="text-md w-40 inline-block font-medium leading-5 text-gray-700">
                                    Organization name
                                 </label>
                                 <input required type="text" id="Organizationname" name="organizationname"
                                 class="bg-gray-100 inline-block rounded-lg shadow-md px-4 py-3 mb-5 text-base leading-6 placeholder-gray-500" placeholder="Enter Organization name" /><br />

                                 <label for="email" class="text-md w-40 inline-block font-medium leading-5 text-gray-700">
                                     Email
                                 </label>
                                 <input required type="email" id="email" name="email"
                                 class="bg-gray-100 inline-block rounded-lg shadow-md px-4 py-3 mb-5 text-base leading-6 placeholder-gray-500" placeholder="Enter Email" /><br />
                                 
                                 <label for="Area" class="text-md w-40 inline-block font-medium leading-5 text-gray-700">
                                    Area
                                 </label>
                                 <input required type="tel" id="Area" name="Area"
                                 class="bg-gray-100 inline-block rounded-lg shadow-md px-4 py-3 mb-5 text-base leading-6 placeholder-gray-500" placeholder="Enter area in squr-foot" /><br />


                                  <label for="Budget" class="text-md w-40 inline-block font-medium leading-5 text-gray-700">
                                    Budget
                                </label>
                                <input required type="tel" id="Budget" name="Budget"
                                class="bg-gray-100 inline-block rounded-lg shadow-md px-4 py-3 mb-5 text-base leading-6 placeholder-gray-500" placeholder="Enter budget amount" /><br />

                                <label for="Site address" class="text-md w-40 inline-block font-medium leading-5 text-gray-700">
                                    Site Address
                                </label>
                                <input required type="text" id="Siteaddress" name="Siteaddress"
                                class="bg-gray-100 inline-block rounded-lg shadow-md px-4 py-3 mb-5 text-base leading-6 placeholder-gray-500" placeholder="Enter Site Address"/><br />

                                <label for="Site address" class="text-md w-40 inline-block font-medium leading-5 text-gray-700">
                                    Upload file
                                </label><br />
                                   <br /> 
                                   <input  type="file" id="Siteaddress" name="Siteaddress"
                                   class="block w-full text-sm text-slate-500
                                   file:mr-4 file:py-2 file:px-4
                                   file:rounded-full file:border-0
                                   file:text-sm file:font-semibold
                                   file:bg-violet-50 file:text-violet-700
                                   hover:file:bg-violet-100" placeholder="Enter Site Address"/><br />

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

export default SIAdd
