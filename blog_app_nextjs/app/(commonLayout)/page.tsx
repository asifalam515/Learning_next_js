import BlogCard from "@/components/modules/homepage/BlogCard";
import { BlogPost } from "@/types/blog.type";
import { blogService } from "../services/blog.service";

export default async function HomePage() {
  const { data } = await blogService.getBlogPost(
    {
      isFeatured: false,
    },
    {
      cache: "no-store",
    },
  );
  console.log(data);
  return (
    <div className="grid grid-cols-3 max-w-7xl mx-auto px-4 gap-2">
      {data.data?.map((post: BlogPost) => (
        <BlogCard key={post.id} post={post}></BlogCard>
      ))}
    </div>
  );
}
