const data = [
    {
        title: 'Carefully Designed',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, veniam?',
        color: 'bg-red-400 text-white rounded-full drop-shadow-xl'
    },
    {
        title: 'Choose Wisely',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, veniam?',
        color: 'bg-green-400 text-white rounded-full drop-shadow-xl'
    },
    {
        title: 'Seamless Sync',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, veniam?',
        color: 'bg-purple-400 text-white rounded-full drop-shadow-xl'
    },
    {
        title: 'Be Interactive',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, veniam?',
        color: 'bg-blue-400 text-white rounded-full drop-shadow-xl'
    },
]
const Traffic = () => {
    return(
        <div className="p-24">
            <div className="grid grid-cols-2">
                <div className="flex flex-col">
                    <p className="text-blue-600 font-semibold">Traffic</p>
                    <h1 className="text-5xl font-bold text-left  mt-2 mb-4">Stage reports with 50k queries</h1>
                    <p className="text-lg py-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Dicta repudiandae quae exercitationem ipsa quam facere voluptate modi. Tempora, 
                        itaque illum.</p>
                        <div className="grid md:grid-cols-2 mt-4 p-4 md:gap-x-8 gap-y-8">
                            {

                                data.map((item,index) => (
                                <div key={index}>
                                    <div className="flex items-center gap-2 font-semibold text-2xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`h-10 w-10 ${item.color}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <h1>{item.title}</h1>
                                    </div>
                                    <p className="text-lg ">{item.desc}</p>
                                </div>
                            ))
                            }
                        </div>
                </div>

                <div className="relative">
                    <img src="/images/traffic-thumb.94f93be8.png" alt="Traffic Thumb" className="md:visible invisible absolute left-24 top-24"/>
                </div>

            </div>

        </div>
    )
}
export default Traffic;