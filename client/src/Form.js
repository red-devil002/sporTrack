import Ffooter from "components/Ffooter";
import Fheader from "components/Fheader";
import React  from "react";


function Form() {
    return(
        <body className="text-2xl lg:text-3xl text-slate-800">
            <Fheader title="Welcome to my webpage" subtitle="Welcome to the home page of this website." ></Fheader>
            <section id="features" class="p-4 sm:px-8 lg:px-16 pb-6 sm:pb-16 md:pb-24 relative py-16 md:py-28">
                <div className="max-w-7xl mx-auto ">
                    <div className="mx-auto mb-16 text-center">
                        <h3 className="font-semibold font-custom text-3xl sm:text-4xl md:text-5xl xl:text-6xl sm:leading-tight tracking-tight text-slate-900 max-w-4xl mx-auto mb-2">Features</h3>
                        <p className="sm:leading-normal text-lg sm:leading-normal sm:text-2xl text-slate-900  opacity-80 mx-auto max-w-xl">Features</p>
                    </div>
                    <div className="flex flex-col mb-20">
                        <div className="text-center lg:text-left items-center gap-4 lg:gap-0 flex flex-col lg:flex-row">
                            <div className="lg:w-1/2 order-first">
                            </div>
                            <div className="lg:w-1/2 p-8 md:p-12 rounded-md bg-skin">
                                <h3 className="font-semibold font-custom text-3xl lg:text-3xl lg:leading-none text-slate-900 max-w-4xl mx-auto mb-2">Data Management</h3>
                                <p className="sm:leading-normal text-lg sm:text-xl text-slate-900  opacity-80 mx-auto max-w-xl">Effortlessly add, update, and view data with a unique ID.</p>
                            </div>
                        </div>
                        <div className="text-center lg:text-left items-center gap-4 lg:gap-0 flex flex-col lg:flex-row">
                            <div className="lg:w-1/2 lg:order-last">
                            </div>
                            <div className="lg:w-1/2 p-8 md:p-12 rounded-md bg-skin">
                                <h3 className="font-semibold font-custom text-3xl lg:text-3xl lg:leading-none text-slate-900 max-w-4xl mx-auto mb-2">Data Dashboard</h3>
                                <p className="sm:leading-normal text-lg sm:text-xl text-slate-900  opacity-80 mx-auto max-w-xl">Create a personalized dashboard to visualize and analyze your data.</p>
                            </div>
                        </div>
                        <div className="text-center lg:text-left items-center gap-4 lg:gap-0 flex flex-col lg:flex-row">
                            <div className="lg:w-1/2 order-first">
                            </div>
                            <div className="lg:w-1/2 p-8 md:p-12 rounded-md bg-skin">
                                <h3 className="font-semibold font-custom text-3xl lg:text-3xl lg:leading-none text-slate-900 max-w-4xl mx-auto mb-2">User Authentication</h3>
                                <p className="sm:leading-normal text-lg sm:text-xl text-slate-900  opacity-80 mx-auto max-w-xl">Securely login or sign up to access your data and dashboard.</p>
                            </div>
                        </div>
                        <div className="text-center lg:text-left items-center gap-4 lg:gap-0 flex flex-col lg:flex-row">
                            <div className="lg:w-1/2 lg:order-last">
                            </div>
                            <div className="lg:w-1/2 p-8 md:p-12 rounded-md bg-skin">
                                <h3 className="font-semibold font-custom text-3xl lg:text-3xl lg:leading-none text-slate-900 max-w-4xl mx-auto mb-2">Data Privacy</h3>
                                <p className="sm:leading-normal text-lg sm:text-xl text-slate-900  opacity-80 mx-auto max-w-xl">We prioritize the privacy and security of your data.</p>
                            </div>
                        </div>
                        <div className="text-center lg:text-left items-center gap-4 lg:gap-0 flex flex-col lg:flex-row">
                            <div className="lg:w-1/2 order-first">
                            </div>
                            <div className="lg:w-1/2 p-8 md:p-12 rounded-md bg-skin">
                                <h3 className="font-semibold font-custom text-3xl lg:text-3xl lg:leading-none text-slate-900 max-w-4xl mx-auto mb-2">Customization Options</h3>
                                <p className="sm:leading-normal text-lg sm:text-xl text-slate-900  opacity-80 mx-auto max-w-xl">Tailor the appearance and settings of your data and dashboard.</p>
                            </div>
                        </div>
                        <div className="text-center lg:text-left items-center gap-4 lg:gap-0 flex flex-col lg:flex-row">
                            <div class="lg:w-1/2 lg:order-last">
                            </div>
                            <div className="lg:w-1/2 p-8 md:p-12 rounded-md bg-skin">
                                <h3 className="font-semibold font-custom text-3xl lg:text-3xl lg:leading-none text-slate-900 max-w-4xl mx-auto mb-2">Collaboration Tools</h3>
                                <p className="sm:leading-normal text-lg sm:text-xl text-slate-900  opacity-80 mx-auto max-w-xl">Invite team members to collaborate and work on the same data.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Ffooter></Ffooter>
        </body>
    )
}

export default Form;