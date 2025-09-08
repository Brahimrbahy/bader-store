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
                <div className="flex items-center justify-between my-4">
                    <h2 className="text-xl font-normal text-[28px]">Most Popular</h2>
                    <Link to="/" className="flex items-center ">
                        Shop All
                        <span className="ml-1">
                            <FaAngleRight />
                        </span>
                    </Link>
                    <div>

                    </div>
                </div>

            </section>



        </div>
            <div className="fixed bottom-4 right-4 bg-green-500 text-white p-2 rounded-full shadow-lg cursor-pointer">
                <FaWhatsapp size={24} />
            </div>

        </>
    );
}

export default Home;
