import { useSession } from 'next-auth/client';
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon,
} from '@heroicons/react/outline';
import {
    CalenderIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,
} from '@heroicons/react/solid';

function Sidebar() {
    const [session, loading] = useSession();
    
    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            {/* <SidebarRow Icon/> */}
        </div>
    )
}
export default Sidebar;