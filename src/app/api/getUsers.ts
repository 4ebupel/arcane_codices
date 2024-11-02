import { User } from '../types/User';

export async function getUsers(): Promise<User[]> {
  try {
    const response = await fetch(`/api/users`);

    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }

    const users = await response.json();
    return users;
  } catch (error) {
    console.error('Error fetching users (getUsers):', error);
    return [];
  }
}
