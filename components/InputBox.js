import { useRef, useState } from 'react';
import Image from 'next/image';
import { db } from '../firebase';
import firebase from 'firebase';
import { useSession } from 'next-auth/client';
import { EmojiHappyIcon } from '@heroicons/react/outline';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid';

function InputBox() {
    /* This const to save all use in session and react hook */
    const [session] = useSession();
    const inputRef = useRef(null);
    const filepickerRef = useRef(null);
    const [imagePost, setImagePost] = useState(null);

    /* This function for create data to firebase */
    const sendPost = (e) => {
        e.preventDefault();

        if (!inputRef.current.value) return;

        db.collection("posts").add({
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        inputRef.current.value = "";
    };

    /* This function for add image to post */
    const addImageToPost = (e) => {

    }

    return (
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
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
                        ref={inputRef}
                        placeholder={`What on you mind, ${session.user.name}?`}
                    />
                <button hidden type="submit" onClick={sendPost}>Submit</button>
                </form>
            </div>

            {/* This div for all icon in Input components */}
            <div className="flex justify-evenly p-3 border-t">
                <div className="inputIcon">
                    <VideoCameraIcon className="h-7 text-red-500" />
                    <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
                </div>

                <div 
                    onClick={() => filepickerRef.current.click()}
                    className="inputIcon"
                >
                    <CameraIcon className="h-7 text-green-400" />
                    <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
                    <input 
                        ref={filepickerRef} 
                        onChange={addImageToPost} 
                        type="text"
                        hidden 
                    />
                </div>

                <div className="inputIcon">
                    <EmojiHappyIcon className="h-7 text-yellow-300" />
                    <p className="text-xs sm:text-sm xl:text-base">Fealing/Activity</p>
                </div>
            </div>
        </div>
    )
}

export default InputBox;