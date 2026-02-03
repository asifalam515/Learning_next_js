import { AppSidebar } from "@/components/modules/sidebar/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default async function DashboardLayout({
  admin,
  user,
  children,
}: {
  admin: React.ReactNode;
  user: React.ReactNode;
  children: React.ReactNode;
}) {
  const userRole = "user"; // "user" or "admin"
  return (
    <SidebarProvider>
      {/* <AppSidebar userRole="admin" /> */}

      <AppSidebar userRole="user" />
      <SidebarInset>
        <header className="sticky top-0 z-10 bg-background flex h-16 items-center justify-between px-4 border-b">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Breadcrumb className="hidden sm:flex">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {/* {userRole === "user" ? "User" : "Admin"} */}
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <main
          className={`p-4 relative  pt-6 min-h-[calc(100vh-4rem)] gradientBg`}
        >
          {userRole === "user" ? user : admin}
          {/* {admin}
          {user} */}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
