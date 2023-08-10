import { UserIcon } from  '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

const menus = [
    {
        label: 'Home',
        to: '/'
    },
    {
        label: 'About',
        to: '/about'
    },
    {
        label: 'Blog',
        to: '/blog'
    },
    {
        label: 'Contact',
        to: '/contact'
    }
]

const Navbar =()=>{
    return(
        <nav className='flex md:flex-row flex-col items-center md:justify-around md:bg-white bg-blue-200 md:gap-x-4 mb-2 py-2'>
            <div className='flex md:flex-row flex-col items-center gap-x-16'> 
                <img src="/images/logo.png" alt="Logo" className='w-28' />
                <div className='flex md:flex-row flex-col items-center gap-y-2 justify-between w-96'>
                {
                    menus.map((item, index) => (
                        <Link to={item.to} key={index} className='text-sm font-semibold'>{item.label}</Link>
                        ))
                    }
                </div>
            </div>


            <div className='flex md:flex-row flex-col md:items-center md:justify-between gap-8'> 
                <button > 
                <Link className='text-sm font-semibold flex w-16 justify-around' to='/login'>
                    <UserIcon className='w-4 h-4 mt-1'/>
                     Login
                </Link>
                    </button>
                <button className='p-2 border-2 md:border-white border-0 rounded bg-blue-500 md:hover:border-2 hover:bg-white hover:border-blue-500 hover:text-blue-500'>
                    <Link className='text-sm text-white font-semibold hover:text-blue-500' to= '/signup'>
                    Get Started
                    </Link></button>
            </div>
        </nav>
    );
}
export default Navbar;