function NewChat() {
  return (
    <div className="flex space-x-0 items-center p-2 border-gray-600 border chatRow">
        <PlusIcon />
        <p className="text-xl">New Chat</p>
    </div>
  )
}

function PlusIcon(){
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-5">
    <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
</svg>)
}
export default NewChat; 