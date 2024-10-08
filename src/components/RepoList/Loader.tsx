export default function Loader({ show }: { show: boolean }) {
  return (
    <div className="my-2 flex space-x-2 justify-center p-2">
      {show && (
        <>
          <span className="sr-only">Loading...</span>
          <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"></div>
        </>
      )}
    </div>
  );
}
