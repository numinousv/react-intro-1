function Sidebar() {
  const categories = ['General', 'React', 'JavaScript', 'CSS', 'Projects'];
  
  return (
    <div className="w-64 space-y-6">
      {/* Categories */}
      <div className="border rounded p-4">
        <h3 className="font-bold mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <div key={cat} className="flex justify-between hover:bg-gray-100 p-2 rounded">
              <span>{cat}</span>
              <span className="text-gray-500">0</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Simple Stats */}
      <div className="border rounded p-4">
        <h3 className="font-bold mb-3">Stats</h3>
        <div className="space-y-2">
          <div>Posts: 0</div>
          <div>Users: 0</div>
          <div>Online: 0</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;