import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const companies = [
    {
    label: 'About us',
    to: 'about'
}, 
{
    label: 'Contact',
    to: 'contact'
}, 
{
    label: 'Blog',
    to: 'blog'
}, 
{
    label: 'Service',
    to: '#'
}, 
{
    label: 'Case Study',
    to: '#'
}, 
]
const support = [
    {
        label: 'Community',
        to: '#'
    },
    {
        label: 'Resources',
        to: '#'
    },
    {
        label: 'FAQS',
        to: '#'
    },
    {
        label: 'Careers',
        to: '#'
    },
    {
        label: 'Privacy Policy',
        to: '#'
    },
]

const Footer =()=>{
    return(
        <div className="bg-gray-200 px-28 py-16 mx-auto" style={{minHeight: 450}}>
            <div className="grid md:grid-cols-4 md:gap-16 gap-10">
                <div className="w-11/12 flex flex-col gap-y-5">
                    <img src="/images/logo.png" alt="Logo" className="w-28" />
                    <p>This is a practice webApplication</p>
                    <button className="flex items-center gap-x-1 text-sm text-bold hover:text-blue-600">
                        Read More 
                        <ArrowLongRightIcon className='w-5 h-5' />
                    </button>
                </div>
                <div>
                    <h4 className="font-semibold text-lg mb-4">Company</h4>
                    <div className="flex flex-col gap-y-2">
                        {
                            companies.map((item, index) => (
                                <Link key={index} to={item.to} className="hover:text-blue-600">{item.label}</Link>
                            ))
                        }

                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-lg mb-4">Support</h4>
                    <div className="flex flex-col gap-y-2">
                        {
                            support.map((item, index) => (
                                <Link key={index} to={item.to} className="hover:text-blue-600">{item.label}</Link>
                            ))
                        }

                    </div>
                </div>
                <div className="flex flex-col gap-y-2">
                    <h4 className="font-semibold text-lg mb-4">Get In Touch</h4>
                    <div className="flex gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <p className="text-sm">
                        somethin@somethin.com
                    </p>
                    </div>
                    <div className="flex gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>

                    <p className="text-sm">
                        98889898998
                    </p>
                    </div>
                    <div className="flex gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                   <p className="text-sm">
                        Kathnmandu, Dattebayo
                    </p>
                    </div>
                    
                </div>
            </div>

        </div>
    );
}
export default Footer;