import { createFileRoute } from "@tanstack/react-router";
import { posts } from "../posts";
import Post from "../components/Post";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

export function RouteComponent() {
  return (
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
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            content={post.content}
          />
        ))}
      </div>
    </div>
  );
}
