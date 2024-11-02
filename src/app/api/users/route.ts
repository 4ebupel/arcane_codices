import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const apiUrl = 'https://x8ki-letl-twmt.n7.xano.io/api:9M56GPMG';

    const response = await axios.get(`${apiUrl}/user`);
    const users = response.data;

    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}
