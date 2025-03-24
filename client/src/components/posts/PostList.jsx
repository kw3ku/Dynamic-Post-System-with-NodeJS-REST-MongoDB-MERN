import { Link } from 'react-router-dom';
import PostItem from './PostItem';

export default function PostList() {
  // Temporary mock data - replace with API calls
  const posts = [
    { id: 1, title: 'First Post', content: 'This is my first post' },
    { id: 2, title: 'Second Post', content: 'Another post example' }
  ];

  return (
    <div className="space-y-4">
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}