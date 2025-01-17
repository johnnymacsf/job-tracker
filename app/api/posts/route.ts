import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }

  try {
    const posts = await prisma.application.findMany({
      where: { authorId: userId },
    });
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest){
  const {searchParams} = req.nextUrl;
  
  const postId = searchParams.get('postId');

  if (!postId) {
    return NextResponse.json({ error: 'Post ID is required' }, { status: 400 });
  }

  try {
    await prisma.application.delete({
      where: { id: postId },
    });
    return NextResponse.json({ message: 'Post deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest){
  const {searchParams} = req.nextUrl;
  const postId = searchParams.get('postId');

  if(!postId){
    return NextResponse.json({error: 'Post ID is required'}, {status: 400})
  }

  try {
    const body = await req.json();
    const { status } = body;

    if(!status){
      return NextResponse.json({ error: 'Status is required' }, { status: 400 });
    }
    const updatedPost = await prisma.application.update({
      where: { id: postId},
      data: {status},
    });

    return NextResponse.json(updatedPost);
  }catch(error: any){
    console.error('Error updating post:', error);
    return NextResponse.json({ error: 'Failed to update post'}, { status: 500});
  }
}