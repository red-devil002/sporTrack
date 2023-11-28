import React from "react";
import { useState } from "react";
import Dash from "./Dash";
import { useNavigate } from "react-router-dom";
import Fheader from "components/Fheader";
import Ffooter from "components/Ffooter";
import { Box } from "@mui/material";
import Authority from "./Authority";

function Alogin() {
    const navigate = useNavigate();
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [authenticated, setauthenticated] = useState(
        localStorage.getItem(localStorage.getItem("authenticated") || false)
    );
    const users = [{ username: "swetang", password: "password" }];
    const handleSubmit = (e) => {
        e.preventDefault();
        const account = users.find((user) => user.username === username);
        if (account && account.password === password) {
        localStorage.setItem("authenticated", true);
        navigate("Dash");
        }
    };
    return(
        <Box>
            <Fheader title="Authority login page" subtitle=""></Fheader>
            <section>
                <div class="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 bg-gray-50">
                    <div class="relative bg-white px-6 pt-5 pb-5 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                        <div class="mx-auto max-w-md">
                            <h2 class="text-3xl text-center font-bold leading-tight">
                                Login 
                            </h2>
                            <div class="divide-y divide-gray-300/50">
                                <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
                                    <form id="user_form" onSubmit={handleSubmit}>
                                        <label for="username" class="text-md w-40 inline-block font-medium leading-5 text-gray-700 ">
                                            Username
                                        </label>
                                        <input required type="text" id="username" name="username"
                                        class="bg-gray-100 inline-block rounded-lg shadow-md px-4 py-3 mb-5 text-base leading-6 placeholder-gray-500" placeholder="Enter Full Name" value={username}
                                        onChange={(e) => setusername(e.target.value)}/><br />

                                        <label for="Password" class="text-md w-40 inline-block font-medium leading-5 text-gray-700">
                                            Password
                                        </label>
                                        <input required type="password" id="password" name="password"
                                        class="bg-gray-100 inline-block rounded-lg shadow-md px-4 py-3 mb-5 text-base leading-6 placeholder-gray-500" placeholder="Enter Password" value={password}
                                        onChange={(e) => setpassword(e.target.value)} /><br />

                                        <button type="submit" id="Submit" href="../footer.js"
                                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                            Submit
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
    )
}

export default Alogin;