import { Button } from "@/components/ui/button";
import { blogService } from "../services/blog.service";

export default async function HomePage() {
  const { data } = await blogService.getBlogPost();
  console.log(data);
  return (
    <div>
      <h1 className="text-5xl">This is Home</h1>
      <Button variant="outline">Click Here</Button>
    </div>
  );
}
