'use client'

import { useTranslation } from "next-i18next";
import '../i18n';

export function Footer() {
    const { t } = useTranslation();
    return (
        <>
            <footer className="footer footer-center bg-[#F3F6F9] text-primary-content p-10">
                <aside>
                    <img src="../images/logo-nasdaq.png" className="w-30 h-16"></img>

                    <p className="text-black"> {t('subtitleFooter1')} {new Date().getFullYear()} - {t('subtitleFooter2')}</p>
                </aside>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.instagram.com/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 64 64" className="fill-current text-blue-950" >
                                <path d="M 31.820312 12 C 13.438312 12 12 13.439312 12 31.820312 L 12 32.179688 C 12 50.560688 13.438313 52 31.820312 52 L 32.179688 52 C 50.561688 52 52 50.560688 52 32.179688 L 52 32 C 52 13.452 50.548 12 32 12 L 31.820312 12 z M 43.994141 18 C 45.099141 17.997 45.997 18.889141 46 19.994141 C 46.003 21.099141 45.110859 21.997 44.005859 22 C 42.900859 22.003 42.003 21.110859 42 20.005859 C 41.997 18.900859 42.889141 18.003 43.994141 18 z M 31.976562 22 C 37.498562 21.987 41.987 26.454563 42 31.976562 C 42.013 37.498562 37.545437 41.987 32.023438 42 C 26.501437 42.013 22.013 37.545437 22 32.023438 C 21.987 26.501437 26.454563 22.013 31.976562 22 z M 31.986328 26 C 28.672328 26.008 25.992 28.701625 26 32.015625 C 26.008 35.328625 28.700672 38.008 32.013672 38 C 35.327672 37.992 38.008 35.299328 38 31.986328 C 37.992 28.672328 35.299328 25.992 31.986328 26 z"></path>
                            </svg>
                        </a>
                        <a href="https://www.facebook.com" target="_blank" >
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 64 64" className="fill-current text-blue-950">
                                <path d="M40.227,12C51.146,12,52,12.854,52,23.773v16.453C52,51.145,51.146,52,40.227,52h-2.089V37.438h5.134l0.807-5.77h-5.941	c0,0-0.009-3.378,0-4.221c0.017-1.649,1.394-2.483,2.577-2.471c1.183,0.012,3.634,0.004,3.634,0.004v-5.317	c0,0-2.123-0.275-4.349-0.298c-1.871-0.019-3.937,0.487-5.604,2.167c-1.696,1.709-1.963,4.254-1.996,7.364	c-0.009,0.9,0,2.772,0,2.772h-5.024v5.77H32.4V52h-8.626C12.854,52,12,51.145,12,40.227V23.773C12,12.854,12.854,12,23.773,12	H40.227z"></path>
                            </svg>
                        </a>

                        <a href="https://es.linkedin.com/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 64 64" className="fill-current text-blue-950">
                                <path d="M40.227,12C51.145,12,52,12.854,52,23.773v16.453C52,51.145,51.145,52,40.227,52H23.773C12.855,52,12,51.145,12,40.227	V23.773C12,12.854,12.855,12,23.773,12H40.227z M25.029,43V26.728h-5.057V43H25.029z M22.501,24.401	c1.625,0,2.947-1.322,2.947-2.949c0-1.625-1.322-2.947-2.947-2.947c-1.629,0-2.949,1.32-2.949,2.947S20.87,24.401,22.501,24.401z M44,43v-8.925c0-4.382-0.946-7.752-6.067-7.752c-2.46,0-4.109,1.349-4.785,2.628H33.08v-2.223h-4.851V43h5.054v-8.05	c0-2.122,0.405-4.178,3.036-4.178c2.594,0,2.628,2.427,2.628,4.315V43H44z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
            </footer>





        </>

    )

} 