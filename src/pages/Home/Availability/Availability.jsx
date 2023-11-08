import {  FaCalendarDay, FaClock, FaMapMarkedAlt, FaMobileAlt} from 'react-icons/fa';

const Availability = () => {
    return (
        <>
              <div className="flex justify-evenly items-center bg-black h-48 mt-4 rounded-xl ml-4 text-white mb-2 w-full">
                
                  <div>
                    <div className="flex items-center relative">
                    <FaCalendarDay className='mr-4 h-12 w-12' />
                    <FaClock className='mr-4 h-9 w-9 absolute top-9 left-4 bg-slate-500 rounded-full' />
                        <div>
                            <p>We are open monday-friday</p>
                            <h3 className="text-2xl font-bold">7:00 am - 9:00 pm</h3>
                        </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                  <FaMobileAlt className='mr-4 h-12 w-12' />
                  
                    <div>
                        <p>Have a question ?</p>
                        <h2 className="text-2xl font-bold">+02546251  2658</h2>
                    </div>
                  </div>
                  <div className="flex items-center">
                  <FaMapMarkedAlt  className='mr-4 h-12 w-12' />
                    <div>
                        <p>Need a repair? Our address</p>
                        <h3 className="text-2xl font-bold">Liza Street, New York</h3>
                    </div>
                  </div>
                </div> 
        </>
    );
};

export default Availability;