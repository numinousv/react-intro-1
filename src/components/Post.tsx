interface PostProps {
  title: string;
  author: string;
  content: string;
}

function Post({ title, author, content }: Readonly<PostProps>) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-5 hover:shadow-sm">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <span className="text-gray-500 text-sm">2h ago</span>
      </div>
      
      <p className="text-gray-800 mb-4">{content}</p>
      
      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center">
          <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
          <span className="text-gray-700 font-medium">{author}</span>
        </div>
        
        <div className="flex gap-3">
          <button className="text-gray-600 hover:text-blue-600">
            Like
          </button>
          <button className="text-gray-600 hover:text-blue-600">
            Comment
          </button>
          <button className="text-gray-600 hover:text-blue-600">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;