import type { Metadata } from "next";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Courses | MyApp",
  description:
    "Contact me for freelance or full-time opportunities. Let's work together!",
  keywords: ["hire", "freelance", "developer", "contact", "work"],
  openGraph: {
    title: "Courses | MyApp",
    description:
      "Contact me for freelance or full-time opportunities. Let's work together!",
  },
};

export default function Courses() {
  return (
    <main className="container my-8 m-auto px-4">
      <h1>Courses</h1>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </main>
  );
}
