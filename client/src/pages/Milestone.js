import Fheader from "components/Fheader";
import Ffooter from "components/Ffooter";
import { Box } from "@mui/material";


function Milestone() {
  return (
      <Box>
          <Fheader title="Stake holders insertion"></Fheader>
          <div class="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 bg-gray-50">
            <div class="relative bg-white px-6 pt-5 pb-5 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                <div class="mx-auto max-w-md">
                    <h2 class="text-3xl text-center font-bold leading-tight">
                      Milestone
                    </h2>
                    <div class="divide-y divide-gray-300/50">
                        <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
                            <form id="user_form">
                                  <label for="Id" class="text-md w-40 inline-block font-medium leading-5 text-gray-700">
                                    Milestone
                                  </label>
                                  <input required type="text" id="Id" name="Id"
                                class="bg-gray-100 inline-block rounded-lg shadow-md px-4 py-3 mb-5 text-base leading-6 placeholder-gray-500" placeholder="Enter milestone" /><br />
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

export default Milestone
