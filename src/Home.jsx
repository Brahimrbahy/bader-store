import React from 'react';
import Images from './constant/Images';
import { Link } from 'react-router';
import { FaAngleRight, FaWhatsapp } from 'react-icons/fa';

const Home = () => {
    return (


        <> <div>
            <div>
                <div className="responsive-bg">
                    <img src={Images.bg1} alt="Background 1" className="desktop-bg" />
                    <img src={Images.bg2} alt="Background 2" className="mobile-bg" />
                </div>

            </div>
            <section>
                <div className="pt-[56px] px-[20px] md:pt-[112px] md:px-[48px]">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-around">
                        {/* Left (always left aligned) */}
                        <h2 className="text-[24px] font-normal">Most Popular</h2>

                        {/* Right (moves to right on desktop) */}
                        <Link
                            to="/"
                            className="flex items-center font-normal text-[15px] mt-2 md:mt-0 md:ml-auto"
                        >
                            Shop All
                            <span className="ml-1 bg-gray-300 p-1 rounded-full">
                                <FaAngleRight />
                            </span>
                        </Link>
                    </div>




                </div>
                <div className="pt-[56px] px-[20px] md:pt-[112px] md:px-[48px]">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-around">
                        {/* Left (always left aligned) */}
                        <h2 className="text-[24px] font-normal">TRENDING NOW</h2>

                        {/* Right (moves to right on desktop) */}
                        <Link
                            to="/"
                            className="flex items-center font-normal text-[15px] mt-2 md:mt-0 md:ml-auto"
                        >
                            Shop All
                            <span className="ml-1 bg-gray-300 p-1 rounded-full">
                                <FaAngleRight />
                            </span>
                        </Link>
                    </div>




                </div>
                <div className="pt-[56px] px-[20px] md:pt-[112px] md:px-[48px]">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-around">
                        {/* Left (always left aligned) */}
                        <h2 className="text-[24px] font-normal">NEW IN DESIGNS</h2>

                        {/* Right (moves to right on desktop) */}
                        <Link
                            to="/"
                            className="flex items-center font-normal text-[15px] mt-2 md:mt-0 md:ml-auto"
                        >
                            Shop All
                            <span className="ml-1 bg-gray-300 p-1 rounded-full">
                                <FaAngleRight />
                            </span>
                        </Link>
                    </div>




                </div>

            </section>

            <section>
                <div>

                </div>
            </section>

        </div>
            <Link to="https://wa.me/212636794596">
                <div className="fixed bottom-4 right-4 bg-green-500 text-white p-2 rounded-full shadow-lg cursor-pointer">
                    <FaWhatsapp size={24} />
                </div>
            </Link>

        </>
    );
}

export default Home;
