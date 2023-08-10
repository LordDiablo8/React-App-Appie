const cards = [
    {
        title: 'Searching',
        desc: 'Makasam tmi bada chwak xauuu'
    },
    {
        title: 'Designing',
        desc: 'Makasam tmi bada chwak xauuu'
    },
    {
        title: 'Building',
        desc: 'Makasam tmi bada chwak xauuu'
    },
    {
        title: 'Supporting',
        desc: 'Makasam tmi bada chwak xauuu'
    },
]
const Applicant = () =>{
    return(
        <div className="px-24 py-32 bg-slate-200 flex flex-col items-center gap-y-4 text-center">
            <h1 className="font-bold text-5xl leading-12">Designed with <br />The applicant in mind</h1>
            <p className="text-lg">There is no such thing as a good tomorrow when there is today</p>
            <div className="grid md:grid-cols-4 gap-8">
                {
                    cards.map((item,index) =>(
                        <div key={index} className="bg-white px-8 py-24 flex flex-col gap-y-4 items-center h-90 justify-center rounded-lg hover:bg-slate-100
                        hover:drop-shadow-xl">
                            <h4 className="font-semibold text-2xl">{item.title}</h4>
                            <p className="text-center">{item.desc}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
export default Applicant;