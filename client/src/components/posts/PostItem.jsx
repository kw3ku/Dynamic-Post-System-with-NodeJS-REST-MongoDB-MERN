import { Link } from 'react-router-dom';

export default function PostItem({ post }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p className="mt-2 text-gray-600">{post.content}</p>
      <div className="mt-4 flex space-x-4">
        <Link
          to={`/posts/${post.id}/edit`}
          className="text-blue-600 hover:text-blue-800"
        >
          Edit
        </Link>
        <button className="text-red-600 hover:text-red-800">
          Delete
        </button>
      </div>
    </div>
  );
}