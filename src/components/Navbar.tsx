function Navbar() {
  return (
    <div className="bg-white border-b p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="text-xl font-bold">Forum</div>
          <div className="hidden md:flex gap-4">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">Categories</a>
            <a href="#" className="hover:text-blue-600">About</a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <input 
            type="text" 
            placeholder="Search..." 
            className="border px-3 py-1 rounded"
          />
          <button className="bg-blue-500 text-white px-4 py-1 rounded">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;