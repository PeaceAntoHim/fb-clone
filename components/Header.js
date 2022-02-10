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
            <h1>Header</h1>

            {/* Left */}
            <div>
                <Image 
                    src="https://links.papareact.com/5me"
                    width={40}
                    height={40}
                    layout="fixed"
                    alt="Facebook" 
                />

                <div>
                    <input type="text" placeholder="Search Facebooks" />
                </div>
            </div>
            {/* Center */}

            {/* Right */}
        </div>
    )
}

export default Header