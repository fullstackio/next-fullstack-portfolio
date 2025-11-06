// app/admin/page.tsx
import { redirect } from "next/navigation";

export default function AdminPage() {
  // instantly redirect to /admin/auth/login
  redirect("/admin/auth/login");
}
