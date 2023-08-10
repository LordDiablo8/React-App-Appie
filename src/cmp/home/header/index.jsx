const Header = () => {
    return(
        <div className="py-48 px-24" style={{
            height: 900 
        }}>
            <div className="w-11/12 mx-auto">
                <div className="grid md:grid-cols-2 gap-20">
                    <div className="flex flex-col gap-y-6">
                        <h2 className="font-lg text-blue-600">Welcome to papa</h2>
                        <h1 className="text-5xl font-bold">Manage Everything with this system</h1>
                        <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Eveniet facere doloremque, rem porro iusto amet 
                            soluta voluptatem</p>
                             <div className="flex gap-x-4">
                                <button className="flex gap-x-1 items-center py-3 px-5 rounded bg-neutral-900 text-white hover:bg-white hover:text-neutral-900 border-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                </svg>

                                    Download For iOS</button>
                                <button className="flex gap-x-1 items-center py-3 px-5 rounded hover:bg-blue-200 border-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                </svg>

                                    Download For Android</button>
                             </div>
                    </div>
                    <div className="md:visible invisible">
                        <div className="relative ">
                            <img src="/images/ellipse.png" alt="ellipse" className="absolute"/>
                            <img src="/images/image.png" alt="mobile" className="absolute left-16 -top-24"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Header;