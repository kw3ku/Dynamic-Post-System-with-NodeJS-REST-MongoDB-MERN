import { useState } from 'react';
import axios from 'axios';

export default function CreatePostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, content };
    try {
      const response = await axios.post('http://localhost:5000/api/posts', newPost);
      setTitle('');
      setContent('');
      setMessage({ type: 'success', text: 'Post created successfully!' });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error creating post:', error.response ? error.response.data : error.message);
      setMessage({ type: 'error', text: `Failed to create post: ${error.response ? error.response.data.message : error.message}` });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
          Create Post
        </button>
      </form>
      {message && (
        <div className={`mt-4 p-2 rounded ${message.type === 'success' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
          {message.text}
        </div>
      )}
    </div>
  );
}