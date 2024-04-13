import banner_bg from "../../../assets/images/banner-bg.webp"
import CountUp from 'react-countup';

const Banner = () => {
    return (
        <div className="mx-[5%] bg-gradient-to-r from-[#C1DEE8] to-[#FBD9B9] min-h-[80vh] rounded-3xl flex justify-between items-center pl-[5%] gap-20">
            <div>
                <p className="text-lg font-medium">Welcome to Realstate</p>
                <h1 className="text-[3.5rem] font-medium leading-[4rem] my-5">Discover Your Dream <br /> Property with Estatein</h1>
                <p className="text-gray-600 w-[90%]">Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
                <div className="space-x-4 mt-8">
                    <button className="btn-neutral btn bg-black md:text-[15px] text-swhite hover:text-white px-8 rounded-[2rem] border-[1px] border-gray-200 shadow-none">Learn More</button>
                    <button className="btn-neutral btn bg-white md:text-[15px] text-slate-700 hover:text-white px-8 rounded-[2rem] border-[1px] border-gray-200 shadow-none">Browse Projects</button>
                </div>

                <div className="mt-8 flex gap-4">
                    <div className="border-2 w-fit px-8 py-4 rounded-3xl border-white hover:border-black">
                        <h1 className="text-4xl font-bold"><CountUp className="text-4xl font-bold" end={200} />+</h1>
                        <h3 className="mt-2 text-lg font-medium text-gray-600">Happy Customers</h3>
                    </div>
                    <div className="border-2 w-fit px-8 py-4 rounded-3xl border-black hover:border-white">
                        <h1 className="text-4xl font-bold"><CountUp className="text-4xl font-bold" end={10} />k</h1>
                        <h3 className="mt-2 text-lg font-medium text-gray-600">Properties For Clients</h3>
                    </div>
                    <div className="border-2 w-fit px-8 py-4 rounded-3xl border-white hover:border-black">
                        <h1 className="text-4xl font-bold"><CountUp className="text-4xl font-bold" end={16} />+</h1>
                        <h3 className="mt-2 text-lg font-medium text-gray-600">Years of Experience</h3>
                    </div>
                </div>

            </div>
            <div>
                <img src={banner_bg} alt="" />
            </div>
        </div>
    );
};

export default Banner;