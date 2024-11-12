import MenuIcon from '@/public/icons/menu.svg';

export const Navbar = () => {
    return (
        <div className="bg-black">
            <div className="px-4">
                <div className="py-4 flex items-center justify-end">
                    <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
                        <MenuIcon className="text-white"/>
                    </div>
                    <nav className='gap-6 items-center justify-center hidden flex-1 sm:flex'>
                        <a href='#' className='text-white text-opacity-60 hover:text-opacity-100 transition'>
                            About
                        </a>
                        <a href='#' className='text-white text-opacity-60 hover:text-opacity-100 transition'>
                            Works
                        </a>
                        <a href='#' className='text-white text-opacity-60 hover:text-opacity-100 transition'>
                            Projects
                        </a>
                        <a href='#' className='text-white text-opacity-60 hover:text-opacity-100 transition'>
                            Volunteer
                        </a>
                        <a href='#' className='text-white text-opacity-60 hover:text-opacity-100 transition'>
                            Contact
                        </a>
                        <a href='#' className='text-green-500 font-medium'>
                            ANKAA
                        </a>

                        <a href="https://wa.link/t8bau8" target="_blank" rel="noopener noreferrer">
                            <button className='text-black border-2 border-box bg-white py-2 px-4 rounded-lg hover:border-2 hover:border-white hover:bg-black hover:border-black hover:text-white transition'>
                                Let&#39;s Talk
                            </button>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
};