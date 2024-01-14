import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import dayjs from 'dayjs'

const getBlogs = async () => {
  const res = await fetch(
    "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=150"
  );
  //   console.log("getBlogs", res.statusText);

  if (!res.ok) {
    throw new Error("Could not retrieve blog posts");
  }
  return await res.json();
};

async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="p-10 flex flex-col">
      {blogs.blogs.length > 0 ? (
        <div className="flex gap-5 flex-wrap">
          {blogs.blogs.map((post: any) => (
            <Link href={`/blogs/${post.id}`} key={post.id}>
              <Card className="p-1 space-y-1">
              <CardContent className="max-w-xs">
                  <Image
                    src={post.photo_url}
                    alt={post.title}
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                </CardContent>
                <div  className="max-w-xs flex flex-col gap-1 p-4">
                  
                <CardTitle> {post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
<div className="flex justify-between items-center">

<Badge variant="default" className="capitalize">{post.category}</Badge>
<p className="font-bold">{post.created_at}</p>
</div>

                  </div>
              
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div>No Blog Found</div>
      )}
    </div>
  );
}

export default BlogsPage;
