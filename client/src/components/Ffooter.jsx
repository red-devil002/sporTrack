import React from "react";
import { Box } from "@mui/material";


const Ffooter = () => {
  return (
    <Box>
        <section id="cta" className="w-full px-8 md:px-20 py-16 sm:pt-10 flex flex-col gap-2 sm:gap-4 bg-black">
                <div className="max-w-7xl flex gap-10 flex-col sm:mb-20 lg:flex-row items-end mx-auto w-full">
                    <div>
                        <span className="sm:leading-normal text-lg text-white uppercase tracking-wider font-semibold">About</span>
                            <h2 className="font-semibold font-custom text-3xl sm:text-4xl md:text-5xl xl:text-6xl sm:leading-tight tracking-tight text-white max-w-3xl">Website</h2>
                            <p className="sm:leading-tight tracking-tight text-white max-w-3xl sm:p-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem magni illum quia reiciendis at sed officia ipsa, itaque dolores ad similique temporibus soluta? Natus voluptate officiis, inventore maxime magnam eaque.</p>
                    </div>
                </div>
            </section>
            <div>
                <a href="https://github.com/black-devil00" target="_blank" className="bg-white/80 hover:bg-white transition duration-200 border border-black/10 shadow-sm text-slate-700 hover:scale-110 hover:text-opacity-80 backdrop-blur-xl px-4 py-2 rounded-full fixed bottom-4 text-sm left-4 font-semibold">Built by Swetang
                </a>
            </div>
    </Box>
  );
};

export default Ffooter;