import Login from "@/app/page"

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
        <h1 className = "text-5xl font-bold mb-20">chatGPT</h1>
        
        <div className = "flex space-x-2 text-center">
          <div className = "flex flex-col items-center mb-5 space-y-3">
            {/* sun icon*/}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
            <h2 className="text-2xl">Example</h2>

            <div className="text- space-y-2">
              <p className="infoText ">"Explain Somthimg to me"</p>
              <p className="infoText">"What is the differnce between"</p>
              <p className="infoText">"What id the color of cat?"</p>
            </div>
          </div>


          <div className = "flex flex-col items-center mb-5 space-y-3">
            {/* Capabilities icon*/}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>

            <h2 className="text-2xl">Capabilities</h2>

            <div className="space-y-2">
              <p className="infoText">"Explain Somthimg to me"</p>
              <p className="infoText">"What is the differnce between"</p>
              <p className="infoText">"What id the color of cat?"</p>
            </div>
          </div>


          <div className = "flex flex-col items-center mb-5 space-y-3">
            {/* Limitations icon*/}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>

            <h2 className="text-2xl">Limitations</h2>

            <div className="space-y-2">
              <p className="infoText">"Explain Somthimg to me"</p>
              <p className="infoText">"What is the differnce between"</p>
              <p className="infoText">"What id the color of cat?"</p>
            </div>
          </div>

        </div>  
    </div>
  )
}

export default HomePage
//export default Login