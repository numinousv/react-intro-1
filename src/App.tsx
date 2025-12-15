import Navbar from './components/Navbar';
import Post from './components/Post';

function App() {
  const posts = [
    {
      id: 1,
      title: "First Post Idk",
      author: "user1",
      content: "First Post Yes"
    },
    {
      id: 2,
      title: "React Question",
      author: "beginner",
      content: "Wtf is usestate"
    },
    {
      id: 3,
      title: "Project Showcase",
      author: "dev123",
      content: "wow"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Centered Container */}
      <div className="max-w-3xl mx-auto p-4 md:p-6">
        <div className="bg-white rounded-lg shadow-sm border p-4 md:p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Forum Posts</h1>
          <p className="text-gray-600 mb-4">Board</p>
          
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            + Create New Post
          </button>
        </div>
        
        {/* Posts List - Centered */}
        <div className="space-y-4">
          {posts.map(post => (
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              content={post.content}
            />
          ))}
        </div>
        
        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="border border-gray-300 hover:bg-gray-50 px-5 py-2 rounded text-gray-700">
            Load More Posts
          </button>
        </div>
      </div>
      
      {/* Simple Footer */}
      <div className="mt-8 border-t bg-white p-4 text-center text-gray-600">
        <p>Simple Forum</p>
      </div>
    </div>
  );
}

export default App;