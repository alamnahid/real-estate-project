import { Link } from 'react-router-dom';
import './Categories.css'

const Categories = () => {
    return (
        <div className="flex mx-[5%] gap-32 mt-32">
            <Link className='flex-1'>
            <div className="ongoing h-[15rem] bg-blue-300 flex-1 rounded-3xl flex justify-center items-end pb-8">
                <h1 className="text-3xl text-white font-semibold">Ongoing Projects</h1>
            </div>
            </Link>
           <Link className='flex-1'>
           <div className="upcoming h-[15rem] bg-blue-300 flex-1 rounded-3xl flex justify-center items-end pb-8">
                <h1 className="text-3xl text-white font-semibold">Ongoing Projects</h1>
            </div>
            </Link>
            <Link className='flex-1'>
            <div className="completed h-[15rem] bg-blue-300 flex-1 rounded-3xl flex justify-center items-end pb-8">
                <h1 className="text-3xl text-white font-semibold">Ongoing Projects</h1>
            </div>
            </Link>
            
        </div>
    );
};

export default Categories;