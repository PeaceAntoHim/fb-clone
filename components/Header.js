import Image from 'next/image';
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGuideicon,
    ViewGirdIcon,
} from '@heroicons/react/solid';
import {
    FlagIcon,
    playIcon,
    SearchIcon,
    ShoppingCartIcon,
} from '@heroicons/react/solid';

function Header() {
    return(
        <div>
            <h1 className="text-6xl">Header</h1>

            {/* Left */}
            <div className="flex items-center">
                <Image 
                    src="https://links.papareact.com/5me"
                    width={40}
                    height={40}
                    layout="fixed"
                    alt="Facebook" 
                />

                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-600" />
                    <input 
                        className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-500"
                        type="text"
                        placeholder="Search Facebook"
                    />
                </div>
            </div>
            {/* Center */}

            {/* Right */}
        </div>
    )
}

export default Header