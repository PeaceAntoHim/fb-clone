import Image from 'next/image'
import { session } from 'next-auth/client';
import { useSession } from 'next-auth/client';

function InputBox() {
    const [session] = useSession();

    return (
        <div>
            <div className="flex space-x-4 p-4 items-center">
                <Image 
                    className="rounded-full"
                    src={session.user.image}
                    width={40}
                    height={40}
                    layout="fixed"
                />
                 <form className="flex flex-1">
                    <input
                        className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none" 
                        type="text"
                        placeholder={`What on you mind, ${session.user.name}`}
                />
                </form>
            </div>
        </div>
    )
}

export default InputBox;