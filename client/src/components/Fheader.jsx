import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import logo from "./logo.png";

const Fheader = ({ title, subtitle }) => {
  return (
    <Box className="text-2xl lg:text-3xl text-slate-800">
        <turbo-cable-stream-source channel="Turbo::StreamsChannel" signed-stream-name="ImlmcmFtZV9pbmRleCI=--d5187adae8222d0990630810547cd2f1cdc28c92c200efd8ad34c5da24dd731f" connected=""></turbo-cable-stream-source>
            <section className="flex relative overflow-hidden flex-col justify-between text-white bg-black">
                <div className="z-50 isolate p-4 sm:px-8 lg:px-16 pb-6 sm:pb-16 md:pb-24">
                    <nav className="mx-auto gap-3 flex font-custom flex-col sm:flex-row mb-8 sm:mb-24 w-full justify-between items-center">
                        <div className="flex gap-4 justify-center items-center">
                            <img src={logo} alt="logo"></img>
                            <a className="text-white text-4xl text-decoration-none font-semibold" >SporTrack</a>
                        </div>
                        <div className="flex text-base sm:text-lg justify-center gap-0.5 items-center">
                            <Link className="hover:bg-black/5 transition-all duration-200 rounded-lg whitespace-nowrap text-white text-decoration-none px-3 sm:px-4 py-1.5 hover:opacity-80" to="/">Home</Link>
                            <Link className="hover:bg-black/5 transition-all duration-200 rounded-lg whitespace-nowrap text-white text-decoration-none px-3 sm:px-4 py-1.5 hover:opacity-80" to="/alogin">Authourity</Link>
                            <Link className="hover:bg-black/5 transition-all duration-200 rounded-lg whitespace-nowrap text-white text-decoration-none px-3 sm:px-4 py-1.5 hover:opacity-80" to="/blogin">Organization</Link>
                            <Link className="hover:bg-black/5 transition-all duration-200 rounded-lg whitespace-nowrap text-white text-decoration-none px-3 sm:px-4 py-1.5 hover:opacity-80">Contractor</Link>
                            <Link className="hover:bg-black/5 transition-all duration-200 rounded-lg whitespace-nowrap text-white text-decoration-none px-3 sm:px-4 py-1.5 hover:opacity-80" to="https://github.com/red-devil002">About us</Link>

                        </div>
                    </nav>
                    <div className="max-w-7xl mx-auto flex-col lg:flex-row gap-4 lg:gap-16 mt-6 sm:mt-16 flex h-full w-full md:items-start">
                        <h1 className="font-semibold font-custom text-3xl sm:text-4xl md:text-5xl xl:text-6xl sm:leading-tight tracking-tight text-white max-w-4xl flex-1">{title}</h1>
                        <div className="w-full flex-1">
                            <p className="sm:leading-normal text-lg sm:text-xl text-white  mb-6">{subtitle}</p>
                        </div>
                    </div>
                </div>
                <div className="z-0 opacity-60">
                    <div className="absolute bottom-0 rotate-180 left-0 opacity-50">
                        <svg width="743" height="531" viewBox="0 0 743 531" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.1" x="635.507" y="425.247" width="106.312" height="106.312" transform="rotate(180 635.507 425.247)" fill="currentColor"></rect>
                            <rect opacity="0.08" x="743" y="318.935" width="106.312" height="106.312" transform="rotate(180 743 318.935)" fill="currentColor"></rect>
                            <rect opacity="0.1" x="424.065" y="425.247" width="106.312" height="106.312" transform="rotate(180 424.065 425.247)" fill="currentColor"></rect>
                            <rect opacity="0.06" x="529.196" y="425.247" width="106.312" height="106.312" transform="rotate(180 529.196 425.247)" fill="currentColor"></rect>
                            <rect opacity="0.1" x="317.753" y="318.935" width="106.312" height="106.312" transform="rotate(180 317.753 318.935)" fill="currentColor"></rect>
                            <rect opacity="0.5" x="317.753" y="212.624" width="106.312" height="106.312" transform="rotate(180 317.753 212.624)" fill="currentColor"></rect>
                            <rect opacity="0.4" x="424.065" y="318.935" width="106.312" height="106.312" transform="rotate(180 424.065 318.935)" fill="currentColor"></rect>
                            <rect opacity="0.1" x="424.065" y="212.624" width="106.312" height="106.312" transform="rotate(180 424.065 212.624)" fill="currentColor"></rect>
                            <rect opacity="0.3" x="424.065" y="106.312" width="106.312" height="106.312" transform="rotate(180 424.065 106.312)" fill="currentColor"></rect>
                            <rect opacity="0.15" x="530.377" y="212.624" width="106.312" height="106.312" transform="rotate(180 530.377 212.624)" fill="currentColor"></rect>
                            <rect opacity="0.1" x="636.688" y="106.312" width="106.312" height="106.312" transform="rotate(180 636.688 106.312)" fill="currentColor"></rect>
                            <rect opacity="0.2" x="212.623" y="425.247" width="106.312" height="106.312" transform="rotate(180 212.623 425.247)" fill="currentColor"></rect>
                            <rect opacity="0.08" x="106.312" y="425.247" width="106.312" height="106.312" transform="rotate(180 106.312 425.247)" fill="currentColor"></rect>
                            <rect opacity="0.05" x="317.753" y="530.377" width="106.312" height="106.312" transform="rotate(180 317.753 530.377)" fill="currentColor"></rect>
                            <rect opacity="0.2" x="530.377" y="318.935" width="106.312" height="106.312" transform="rotate(180 530.377 318.935)" fill="currentColor"></rect>
                        </svg>
                    </div>
                    <div className="absolute top-0 right-4 opacity-80">
                        <svg width="743" height="531" viewBox="0 0 743 531" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.1" x="635.507" y="425.247" width="106.312" height="106.312" transform="rotate(180 635.507 425.247)" fill="currentColor"></rect>
                            <rect opacity="0.08" x="743" y="318.935" width="106.312" height="106.312" transform="rotate(180 743 318.935)" fill="currentColor"></rect>
                            <rect opacity="0.1" x="424.065" y="425.247" width="106.312" height="106.312" transform="rotate(180 424.065 425.247)" fill="currentColor"></rect>
                            <rect opacity="0.06" x="529.196" y="425.247" width="106.312" height="106.312" transform="rotate(180 529.196 425.247)" fill="currentColor"></rect>
                            <rect opacity="0.1" x="317.753" y="318.935" width="106.312" height="106.312" transform="rotate(180 317.753 318.935)" fill="currentColor"></rect>
                            <rect opacity="0.5" x="317.753" y="212.624" width="106.312" height="106.312" transform="rotate(180 317.753 212.624)" fill="currentColor"></rect>
                            <rect opacity="0.4" x="424.065" y="318.935" width="106.312" height="106.312" transform="rotate(180 424.065 318.935)" fill="currentColor"></rect>
                            <rect opacity="0.1" x="424.065" y="212.624" width="106.312" height="106.312" transform="rotate(180 424.065 212.624)" fill="currentColor"></rect>
                            <rect opacity="0.3" x="424.065" y="106.312" width="106.312" height="106.312" transform="rotate(180 424.065 106.312)" fill="currentColor"></rect>
                            <rect opacity="0.15" x="530.377" y="212.624" width="106.312" height="106.312" transform="rotate(180 530.377 212.624)" fill="currentColor"></rect>
                            <rect opacity="0.1" x="636.688" y="106.312" width="106.312" height="106.312" transform="rotate(180 636.688 106.312)" fill="currentColor"></rect>
                            <rect opacity="0.2" x="212.623" y="425.247" width="106.312" height="106.312" transform="rotate(180 212.623 425.247)" fill="currentColor"></rect>
                            <rect opacity="0.08" x="106.312" y="425.247" width="106.312" height="106.312" transform="rotate(180 106.312 425.247)" fill="currentColor"></rect>
                            <rect opacity="0.05" x="317.753" y="530.377" width="106.312" height="106.312" transform="rotate(180 317.753 530.377)" fill="currentColor"></rect>
                            <rect opacity="0.2" x="530.377" y="318.935" width="106.312" height="106.312" transform="rotate(180 530.377 318.935)" fill="currentColor"></rect>
                        </svg>
                    </div>
                </div>
            </section>
    </Box>
  );
};

export default Fheader;