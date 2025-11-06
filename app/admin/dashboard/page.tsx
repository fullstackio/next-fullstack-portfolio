import { ModeToggle } from "@/components/theme-toggler";

export default function DashboardPage() {
  return (
    <>
      <ModeToggle />
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-muted-foreground mb-8">
        Welcome to your admin dashboard. Here you can manage users, settings,
        and more.
      </p>
      {/* Add dashboard widgets or stats here */}
    </>
  );
}
