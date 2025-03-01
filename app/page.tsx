import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {  // с большой буквы
  return (
    <div className="max-w-[380px] h-svh mx-auto">
      <div className="justify-center p-10 g-2">
        <h1 className="font-bold text-xl">Hello! It&apos;s my starter for my per projects</h1>
        <div className="g-4">
        <li>Posthog</li>
        <li>Prisma</li>
        <li>Zod</li>
        <li>Shadcn</li>
        <li>Lucidreact</li>
        </div>
        <p>This is my attempt to write organic code without AI, or use AI with responsible usage</p>
        <Button asChild>
          <Link href="https://x.com/useing2">
          Visit my portfolio
          </Link>
          </Button>
      </div>
    </div>
  );
};

export default Page;