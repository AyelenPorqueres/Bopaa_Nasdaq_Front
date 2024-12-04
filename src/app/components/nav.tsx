'use client'
import { CheckIcon, LanguageIcon } from "@heroicons/react/16/solid";
import { useTranslation } from "next-i18next";
import '../i18n';
import { useState } from "react";
import { useCurrency } from "../context/currency.context";


//Realizo una funcion donde implemento el cambio de moneda y el idioma.
export function Menu() {
  const { currency, changeCurrency } = useCurrency();
  const [selectedLanguage, setselectedLanguage] = useState('ENGLISH');

  //Actualizo la configuracion de i18n y genero un hook para realizar la traducción y acceder a los datos.
  const handleLaguageChange = (language: any) => {
    setselectedLanguage(language);
    i18n.changeLanguage(language);
  }
  const { t, i18n } = useTranslation();


  return (
    <>
      <div className="navbar bg-base-100 px-4 py-4 sm:flex sm:items-center sm:justify-between ">
        <div className="flex-1">
          <a href="/"><img src="./images/logo-nasdaq.png" alt="" className="w-44 h-14" /></a>
        </div>

        <div className="flex-none  ">
          <ul className="menu menu-horizontal px-1 space-x-3  ">
            <li className="h-9 rounded-lg border-solid border-2  border[#F3F6F9] bg-[#F3F6F9] shadow-md"><a href="/indice">{t('buttons.index')} NDX</a></li>

            <li className=" h-9 rounded-lg border-solid border-2 border[#F3F6F9] bg-[#F3F6F9] shadow-md z-10" >
              <details >
                <summary> {currency}</summary>
                <ul className=" rounded-t-none ">
                  <li>
                    <a onClick={() => changeCurrency('$USD')}>
                      $USD {currency === '$USD' && <span><CheckIcon className="size-4"></CheckIcon></span>}
                    </a>
                  </li>
                  <li>
                    <a onClick={() => changeCurrency('€EUR')}>
                      €EUR{currency === '€EUR' && <span><CheckIcon className="size-4"></CheckIcon></span>}
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li className=" h-9 rounded-lg border-solid border-2 border[#F3F6F9] bg-[#F3F6F9] shadow-md z-10" >
              <details >
                <summary> <LanguageIcon className="size-5 text-black"></LanguageIcon>{selectedLanguage == "ENGLISH" ? t('buttons.english') : t('buttons.spanish')}</summary>
                <ul className=" rounded-t-none p-2 w-32">
                  <li>
                    <a onClick={() => handleLaguageChange('ENGLISH')}>
                      {t('buttons.english')}  {selectedLanguage === 'ENGLISH' && <span><CheckIcon className="size-4"></CheckIcon></span>}
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleLaguageChange('SPANISH')}>
                      {t('buttons.spanish')}{selectedLanguage === 'SPANISH' && <span><CheckIcon className="size-4"></CheckIcon></span>}
                    </a>
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


