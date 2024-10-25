import { X, MessageSquare, User, Mail } from 'lucide-react';
import { Post, Comment, User as UserType } from '../types';

interface PostDetailProps {
  post: Post;
  user?: UserType;
  comments: Comment[];
  onClose: () => void;
}

export function PostDetail({ post, user, comments, onClose }: PostDetailProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Post Details</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex items-center gap-4 mb-6 text-gray-600">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{user?.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>{user?.email}</span>
            </div>
          </div>
          
          <p className="text-gray-700 mb-8 whitespace-pre-line">{post.body}</p>
          
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <MessageSquare size={20} />
              Comments ({comments.length})
            </h3>
            
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-2">{comment.email}</div>
                  <p className="text-gray-700">{comment.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}