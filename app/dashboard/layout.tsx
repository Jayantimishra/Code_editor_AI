import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/features/dashboard/components/dashboard-sidebar";
import { getAllPlaygroundForUser } from "@/features/dashboard/actions";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const playgroundData = await getAllPlaygroundForUser();
  const technologyIcinMap: Record<string, string> = {
    REACT: "Zap",
    NEXTJS: "Lightbulb",
    EXPRESS: "Database",
    VUE: "Compass",
    HONO: "FlameIcon",
    ANGULAR: "Terminal",
  };

  const formattedPlaygroundData = playgroundData?.map((playground) => ({
    id: playground.id,
    name: playground.title,
    starred: playground.Starmark?.[0]?.isMarked || false,
    icon: technologyIcinMap[playground.template] || "Code2",
  })) || [];


  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full overflow-x-hidden">
        <DashboardSidebar initialPlaygroundData={formattedPlaygroundData } />
        <main className="flex-1 bg-zinc-900">{children}</main>
      </div>
    </SidebarProvider>
  );
}
