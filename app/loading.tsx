function loading() {
  return (
      <div className="fixed inset-0 bg-black bg-opacity/90 flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
        <p className="text-lg font-medium text-white">Loading...</p>
      </div>
    </div>
  )
}
export default loading