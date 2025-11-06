import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IconGitBranch } from "@tabler/icons-react";
import { ModeToggle } from "@/components/theme-toggler";

export default function Home() {
  return (
    <div className="">
      <Button variant="outline" size="sm">
        <IconGitBranch /> New Branch
      </Button>
      <ModeToggle />
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
    </div>
  );
}
