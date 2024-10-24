import { RxDownload } from "react-icons/rx";

export const Hero = () => {
    return (
        <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-[96px] relative overflow-clip">
            <div className='absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[3000px] lg:h-[600px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]'></div>
            <div className="container relative">
                <div className='font-bold tracking-tighter text-center'>
                    <h2 className='text-3xl sm:text-2xl mt-16'>
                        Hi I&#39;m
                    </h2>
                    <h1 className='text-6xl sm:text-9xl mt-8'>
                        Bintang Timurlangit
                    </h1>
                </div>

                <div className='flex justify-center'>
                    <p className='text-center mt-24 text-xl max-w-md'>
                        Fullstack Developer based in Indonesia.
                    </p>
                </div>

                <div className='flex justify-center justify-items-center gap-4 mt-24'>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <button
                            className='border-2 border-white box-border hover:bg-white hover:text-black transition py-2 px-4 rounded-lg text-white font-semibold flex items-center '>
                            <RxDownload className="mr-2"/> Resume
                        </button>
                    </a>
                    <a href="https://wa.link/t8bau8" target="_blank" rel="noopener noreferrer">
                        <button className='hover:bg-transparent hover:border-white hover:text-white transition bg-white box-border border-2 border-white py-2 px-4 rounded-lg text-black font-semibold'>
                            Let&#39;s Talk
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}