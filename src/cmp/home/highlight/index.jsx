import { useState } from "react";


const Highlight = () => {
    const tabModel = {
    setting: false,
    report: false,
    safety: false,
    app: false
    }
   const[tab, setTab] = useState({
    setting: true,
    report: false,
    safety: false,
    app: false
   })
        

    return(
        <div className="bg-white p-24 ">
            <div className="grid md:grid-cols-3">

               <div className="flex flex-col p-4">
                    <button className="flex border-r-4 focus:border-blue-700 focus:text-blue-600 hover:border-blue-300 items-center gap-x-2 py-2 hover:text-blue-400 hover:font-semibold"
                      onClick={()=> setTab({...tabModel,setting: true})}>
                        <button className="bg-zinc-200 rounded-full focus:text-white focus:bg-blue-600 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        </button>
                        <label>Setting</label>
                    </button>

                    <button onClick={()=> setTab({...tabModel,report: true})} className="flex border-r-4 focus:border-blue-700 focus:text-blue-600 hover:border-blue-300 items-center gap-x-2 py-2 hover:text-blue-400 hover:font-semibold">
                    <button className="bg-zinc-200 rounded-full focus:text-white focus:bg-blue-600 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                    </button>
                    <label>Safety</label>
                    </button>

                    <button onClick={()=> setTab({...tabModel,safety: true})} className="flex border-r-4 focus:border-blue-700 focus:text-blue-600 hover:border-blue-300 items-center gap-x-2 py-2 hover:text-blue-400 hover:font-semibold">
                    <button className="bg-zinc-200 rounded-full focus:text-white focus:bg-blue-600 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                        </svg>
                        </button>
                        <label>Report</label>
                    </button>

                    <button onClick={()=> setTab({...tabModel,app: true})} className="flex border-r-4 focus:border-blue-700 focus:text-blue-600 hover:border-blue-300 items-center gap-x-2 py-2 hover:text-blue-400 hover:font-semibold">
                    <button className="bg-zinc-200 rounded-full focus:text-white focus:bg-blue-600 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                    </button>
                    <label>App Lock</label>
                    </button>
                    
               </div>

            <div>
               <div >
                    {
                        tab.setting &&
                        <div>
                            <img src="/images/01_home_app_style_01.png" alt="setting-pic" />
                        </div>
                    }                
               </div>
               <div >
                    {
                        tab.safety &&
                        <div>
                            <img src="/images/01_home_app_style_01.png" alt="setting-pic" />
                        </div>
                    }                
               </div>
               <div >
                    {
                        tab.report &&
                        <div>
                            <img src="/images/01_home_app_style_01.png" alt="setting-pic" />
                        </div>
                    }                
               </div>
               <div >
                    {
                        tab.app &&
                        <div>
                            <img src="/images/01_home_app_style_01.png" alt="setting-pic" />
                        </div>
                    }                
               </div>
            </div>

               <div className="px-8">
                <div >
                    {
                        tab.setting &&
                    <div className="flex flex-col gap-y-8">
                        <p className="text-blue-600 font-semibold">Custom Reactions</p>
                        <h1 className="text-5xl font-semibold">Setting the app features</h1>
                        <p className="text-md">You think you are hot shit huh bruh? When I was 9 years old I was already 22</p>
                        <button className="bg-blue-500 rounded p-2 text-md text-white border-2 border-white hover:border-blue-300 hover:bg-white hover:text-blue-600 w-fit">Load More</button>
                    </div>
                    }
                </div>
                <div>
                    {
                        tab.report &&
                    <div className="flex flex-col gap-y-8">
                        <p className="text-blue-600 font-semibold">Custom Reactions</p>
                        <h1 className="text-5xl font-semibold">Safety the app features</h1>
                        <p className="text-md">You think you are hot shit huh bruh? When I was 9 years old I was already 22</p>
                        <button className="bg-blue-500 rounded p-2 text-md text-white border-2 border-white hover:border-blue-300 hover:bg-white hover:text-blue-600 w-fit">Load More</button>
                    </div>
                    }
                </div>
                <div>
                    {
                        tab.safety &&
                    <div className="flex flex-col gap-y-8">
                        <p className="text-blue-600 font-semibold">Custom Reactions</p>
                        <h1 className="text-5xl font-semibold">Report the app features</h1>
                        <p className="text-md">You think you are hot shit huh bruh? When I was 9 years old I was already 22</p>
                        <button className="bg-blue-500 rounded p-2 text-md text-white border-2 border-white hover:border-blue-300 hover:bg-white hover:text-blue-600 w-fit">Load More</button>
                    </div>
                    }
                </div>
                    <div>
                    {
                        tab.app &&
                    <div className="flex flex-col gap-y-8">
                        <p className="text-blue-600 font-semibold">Custom Reactions</p>
                        <h1 className="text-5xl font-semibold">Applock the app features</h1>
                        <p className="text-md">You think you are hot shit huh bruh? When I was 9 years old I was already 22</p>
                        <button className="bg-blue-500 rounded p-2 text-md text-white border-2 border-white hover:border-blue-300 hover:bg-white hover:text-blue-600 w-fit">Load More</button>
                    </div>
                    }
                </div>
               </div>
            </div>
        </div>
    )
}

export default Highlight;