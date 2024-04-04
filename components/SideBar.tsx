import { useSession } from "next-auth/react";
import NewChat from "./NewChat";
import { useRouter } from 'next/router';
import Image from "next/image"

function SideBar(){
    

    const handleButtonClick = () => {
    };
    return <div className="p-2 flex flex-col h-screen">
                <div className="flex-1">
                    <div>
                        <NewChat />
                        <div>
                        
                            {/* model selection */}
                        </div>

                        {/* map */}
                    </div>

                </div>
                
                <div className="items-center justify-center">
                        <Image
                            src="https://links.papareact.com/2i6"
                            width={50}
                            height={50} 
                            alt="logo"
                            className="rounded-full cursor-auto mx-auto mb-2
                            hover:opacity-50"
                        />
                </div>
        </div>;

}

export default SideBar;