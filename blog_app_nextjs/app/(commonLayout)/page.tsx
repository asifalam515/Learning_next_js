import { Button } from "@/components/ui/button";
import { cookies } from "next/headers";

export default async function HomePage() {
  const cookieStore = await cookies();
  console.log(cookieStore.toString());
  const res = await fetch("http://localhost:5000/api/auth/get-session", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  const session = await res.json();
  console.log(session);
  return (
    <div>
      <h1 className="text-5xl">This is Home</h1>
      <Button variant="outline">Click Here</Button>
    </div>
  );
}
