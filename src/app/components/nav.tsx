'use client'
import { LanguageIcon } from "@heroicons/react/16/solid";
import { useState } from "react";



export function Menu() {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    return (
        <>



            <div className="navbar bg-base-100 px-4 py-4 sm:flex sm:items-center sm:justify-between ">
                <div className="flex-1">
                    <img src="./images/logo-nasdaq.png" alt="" className="w-40 h-16" />
                </div>

                <div className="flex-none padding m-3 ">
                    <ul className="menu menu-horizontal px-1 space-x-3 hover:bg-none ">
                        <li className="border-solid border-2 border[#F3F6F9] bg-[#F3F6F9] shadow-md padding: 8px"><a>Nasdaq-100 indice</a></li>
                        <li className="border-solid border-2 border[#F3F6F9] bg-[#F3F6F9] shadow-md" >
                            <details>
                                <summary> <LanguageIcon className="size-6 text-black" />ES</summary>
                                <ul className=" rounded-t-none p-2">
                                    <li><a>EN</a></li>

                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>


        </>
    )

}


