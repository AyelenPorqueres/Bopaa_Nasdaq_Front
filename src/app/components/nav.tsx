'use client'
import { CheckIcon, LanguageIcon } from "@heroicons/react/16/solid";
import { useState } from "react";



export function Menu() {
    const [selectedCurrency, setSelectedCurrency] = useState ('$USD');
    const [selectedLanguage, setselectedLanguage] = useState('ES');

    const handleCurrencyChange = (currency:any) =>{
      setSelectedCurrency (currency);
    };
    const handleLaguageChange = (language:any) =>{
      setselectedLanguage(language)
    }
    return (
        <>



            <div className="navbar bg-base-100 px-4 py-4 sm:flex sm:items-center sm:justify-between ">
                <div className="flex-1">
                    <img src="./images/logo-nasdaq.png" alt="" className="w-44 h-14" />
                </div>

                <div className="flex-none  ">
                    <ul className="menu menu-horizontal px-1 space-x-3  ">
                        <li className="h-9 rounded-lg border-solid border-2  border[#F3F6F9] bg-[#F3F6F9] shadow-md"><a>INDICE NDX</a></li>
                        <li className="h-9 rounded-lg border-solid border-2  border[#F3F6F9] bg-[#F3F6F9] shadow-md z-10">
                        <details >
                                <summary>$ USD</summary>
                                <ul className=" rounded-t-none p-2 w-24  ">
                                    <li><a>€ EUR</a></li>

                                </ul>
                            </details>
                        </li>
                        <li className=" h-9 rounded-lg border-solid border-2 border[#F3F6F9] bg-[#F3F6F9] shadow-md z-10" >
                            <details >
                                <summary> {selectedCurrency}</summary>
                                <ul className=" rounded-t-none p-2 w-24  ">
                                    <li>
                                      <button
                                      className="flex items-center"
                                      onClick={()=> handleCurrencyChange('$ USD')}
                                      
                                      >
                                        {selectedCurrency === '$ USD' && <span><CheckIcon></CheckIcon></span>}
                                      </button>
                                    </li>
                                    <li>
                  <button
                    className="flex items-center"
                    onClick={() => handleCurrencyChange('€ EUR')}
                  >
                    {selectedCurrency === '€ EUR' && <span>✔️</span>}
                    <span className="ml-1">€ EUR</span>
                  </button>
                </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>


        </>
    )

}


