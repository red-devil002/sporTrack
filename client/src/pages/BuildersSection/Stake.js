import React from 'react';
import { Box } from "@mui/material";
import Fheader from 'components/Fheader';
import Ffooter from 'components/Ffooter';
import { Link } from 'react-router-dom';

function Stake() {
  return (
    <Box>
        <Fheader></Fheader>
        <div class="flex min-h-screen flex-col justify-center py-6 w-full"> 
            <div class="relative bg-white px-6 pt-5 pb-5 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                <div class="mx-auto max-w-md">
                    <h2 class="text-3xl text-center font-bold leading-tight">
                        Stake holders Information
                    </h2>
                    <div class="divide-y divide-gray-300/50">
                        <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
                            <form id="user_form">
                                <button type="submit" id="Submit"
                                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    <Link to="/Sadd">Add site data</Link>
                                </button>
                                <br />
                                <button type="submit" id="Submit"
                                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    <a href="./display_site.php">View site data</a>
                                </button>
                                <br />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Ffooter></Ffooter>
    </Box>
  );
}

export default Stake;
