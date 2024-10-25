import { Post, User, Comment } from '../types';

const API_BASE = 'https://jsonplaceholder.typicode.com';

export async function fetchPosts(): Promise<Post[]> {
  const response = await fetch(`${API_BASE}/posts`);
  if (!response.ok) throw new Error('Failed to fetch posts');
  return response.json();
}

export async function fetchUsers(): Promise<User[]> {
  const response = await fetch(`${API_BASE}/users`);
  if (!response.ok) throw new Error('Failed to fetch users');
  return response.json();
}

export async function fetchComments(): Promise<Comment[]> {
  const response = await fetch(`${API_BASE}/comments`);
  if (!response.ok) throw new Error('Failed to fetch comments');
  return response.json();
}