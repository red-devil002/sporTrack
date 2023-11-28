import React from 'react';
import { Box } from "@mui/material"
import Fheader from 'components/Fheader';
import Ffooter from 'components/Ffooter';
import { Link } from 'react-router-dom';

const Builder = () => {
  return (
    <Box>
        <Fheader title="Welcome to organization's Workspace" subtitle=""></Fheader>
            <section>
                <div className="flex min-h-screen flex-col justify-center py-6 w-full">
                    <div className="relative bg-white px-6 pt-5 pb-5 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                        <div className="mx-auto max-w-md">
                            <h2 className="text-5xl text-center font-bold leading-tight">
                                Organization Workspace
                            </h2>
                            <div className="divide-y divide-gray-300/50">
                                <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                                    <form id="user_form">
                                        <button type="submit" id="Submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                            <Link to="/blogin/Builder/organization">Organization Information</Link>
                                        </button>
                                        <br />
                                        <button type="submit" id="Submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                            <Link to="/blogin/Builder/stake">Stake holders</Link>
                                        </button>
                                        <br />
                                        <button type="submit" id="Submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                            <Link to="/blogin/Builder/achive">Achievement planning</Link>
                                        </button>
                                        <br />
                                        <button type="submit" id="Submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                            <Link to="/blogin/Builder/site">Site Information</Link>
                                        </button>
                                        <br />
                                        <button type="submit" id="Submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                            <Link to="/blogin/Builder/dashboard">Site Dashboard</Link>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <Ffooter></Ffooter>
    </Box>
  );
}

export default Builder;
