import { MessageSquare, User } from 'lucide-react';
import { Post, Comment, User as UserType } from '../types';

interface PostCardProps {
  post: Post;
  user?: UserType;
  comments: Comment[];
  onClick: () => void;
}

export function PostCard({ post, user, comments, onClick }: PostCardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
    >
      <h2 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h2>
      <p className="text-gray-600 mb-4 line-clamp-3">{post.body}</p>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <User size={16} />
          <span>{user?.name || 'Loading...'}</span>
        </div>
        <div className="flex items-center gap-1">
          <MessageSquare size={16} />
          <span>{comments.length}</span>
        </div>
      </div>
    </div>
  );
}