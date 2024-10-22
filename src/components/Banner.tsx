export const Banner = () => {
    return(
        <div className="py-3 text-center bg-[linear-gradient(to_right,rgb(252,_214,_255,_0.7),rgb(41,_216,_255,_0.7),rgb(255,_253,_128,_0.7),rgb(248,_154,_191,_0.7),rgb(252,_215,_255,_0.7))]">
            <div className="container">
                <p className="font-medium">
                    <span className="hidden sm:inline"> Currently working on some fantastic projects with 2 slots remaining! — </span>
                    <a href='https://wa.link/t8bau8' target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                        Book now!
                    </a>
                </p>
            </div>
        </div>
    );
};