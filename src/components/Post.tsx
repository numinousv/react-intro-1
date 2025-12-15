interface PostProps {
  title: string;
  author: string;
  content: string;
}

function Post({ title, author, content }: PostProps) {
  return (
    <div className="border rounded p-4 mb-4 hover:shadow">
      <div className="flex justify-between mb-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <span className="text-gray-500 text-sm">Just now</span>
      </div>
      
      <p className="text-gray-700 mb-3">{content}</p>
      
      <div className="flex justify-between text-sm">
        <span>By: {author}</span>
        <div className="flex gap-4">
          <button className="hover:text-blue-600">Like (0)</button>
          <button className="hover:text-blue-600">Comment (0)</button>
        </div>
      </div>
    </div>
  );
}

export default Post;