import React from 'react';
import Images from './constant/Images';
import { Link } from 'react-router';
import { FaAngleRight, FaWhatsapp } from 'react-icons/fa';
import { JsonData } from './json';
import { MdOutlineShoppingCart } from 'react-icons/md';

const Home = () => {
    const tshirts = JsonData.products["t-shirt"].slice(0, 4);
    const hoodie = JsonData.products["hoodie"].slice(0, 4);
    const newt = JsonData.products["new"].slice(0, 4);

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
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4  mt-6">
                        {tshirts.map((item, index) => (
                            <div key={index} className="text-center relative">
                                {/* Image container with fixed width & height */}
                                <div className="w-full aspect-square relative mt-4">
                                    <img
                                        src={Images[item.image]}
                                        alt={item.name}
                                        className="w-full h-full object-cover  "
                                    />
                                    {/* Add to Cart button on top-right */}
                                    <button className="absolute bottom-2 right-2 bg-white p-2 w-[36px] h-[36px] shadow hover:bg-gray-100">
                                        <MdOutlineShoppingCart className="text-gray-800" size={20} />

                                    </button>
                                </div>

                                {/* Product name */}
                                <h3 className="mt-2 text-start text-[16px] font-normal">{item.name}</h3>

                                <div className='flex gap-1'>
                                    <p className="text-[16px] line-through font-normal text-gray-600">250.00 Dh</p>

                                    <p className="text-[16px] font-normal text-black-600">{item.price}</p>

                                </div>

                                {/* Optional color dots */}

                            </div>
                        ))}
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

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4  mt-6">
                        {hoodie.map((item, index) => (
                            <div key={index} className="text-center relative">
                                {/* Image container with fixed width & height */}
                                <div className="w-full aspect-square relative mt-4">
                                    <img
                                        src={Images[item.image]}
                                        alt={item.name}
                                        className="w-full h-full object-cover  "
                                    />
                                    {/* Add to Cart button on top-right */}
                                    <button className="absolute bottom-2 right-2 bg-white p-2 w-[36px] h-[36px] shadow hover:bg-gray-100">
                                        <MdOutlineShoppingCart className="text-gray-800" size={20} />

                                    </button>
                                </div>

                                {/* Product name */}
                                <h3 className="mt-2 text-start text-[16px] font-normal">{item.name}</h3>

                                <div className='flex gap-1'>
                                    <p className="text-[16px] line-through font-normal text-gray-600">250.00 Dh</p>

                                    <p className="text-[16px] font-normal text-black-600">{item.price}</p>

                                </div>

                                {/* Optional color dots */}

                            </div>
                        ))}
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
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4  mt-6">
                        {newt.map((item, index) => (
                            <div key={index} className="text-center relative">
                                {/* Image container with fixed width & height */}
                                <div className="w-full aspect-square relative mt-4">
                                    <img
                                        src={Images[item.image]}
                                        alt={item.name}
                                        className="w-full h-full object-cover  "
                                    />
                                    {/* Add to Cart button on top-right */}
                                    <button className="absolute bottom-2 right-2 bg-white p-2 w-[36px] h-[36px] shadow hover:bg-gray-100">
                                        <MdOutlineShoppingCart className="text-gray-800" size={20} />

                                    </button>
                                </div>

                                {/* Product name */}
                                <h3 className="mt-2 text-start text-[16px] font-normal">{item.name}</h3>

                                <div className='flex gap-1'>
                                    <p className="text-[16px] line-through font-normal text-gray-600">250.00 Dh</p>

                                    <p className="text-[16px] font-normal text-black-600">{item.price}</p>

                                </div>

                                {/* Optional color dots */}

                            </div>
                        ))}
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
