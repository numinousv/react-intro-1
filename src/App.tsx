import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Post from './components/Post';
// import { Plus } from 'lucide-react';

function App() {
  // Simple posts array - easy to edit!
  const posts = [
    {
      id: 1,
      title: "First Post",
      author: "user1",
      content: "first post idk"
    },
    {
      id: 2,
      title: "React Q",
      author: "beginner",
      content: "usestate test"
    },
    {
      id: 3,
      title: "showcase",
      author: "dev123",
      content: "observation"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-4">Forum Posts</h1>
            
            <button className="mb-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              + New Post
            </button>
            
            {/* Posts List */}
            <div>
              {posts.map(post => (
                <Post
                  key={post.id}
                  title={post.title}
                  author={post.author}
                  content={post.content}
                />
              ))}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="hidden md:block">
            <Sidebar />
          </div>
        </div>
      </div>
      
      {/* Simple Footer */}
      <div className="border-t p-4 text-center text-gray-600">
        <p>Simple Forum © 2024</p>
      </div>
    </div>
  );
}

export default App;