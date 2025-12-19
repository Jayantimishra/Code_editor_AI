import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      
      {/* Full-screen Background Image */}
      <Image
        src="/bg.jpg"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay (optional but recommended) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        
        <div className="flex flex-col items-center my-5">
          <Image
            src="/hero2.svg"
            alt="Hero Section"
            width={500}
            height={500}
            priority
          />

          <h1 className="mt-6 text-center text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-sky-700 to-sky-900 leading-tight">
            Vibe Code With Intelligence
          </h1>
        </div>

        <p className="mt-4 max-w-2xl text-center text-lg text-gray-200">
          VibeCode Editor is a powerful and intelligent code editor that enhances
          your coding experience with advanced features and seamless integration.
          It is designed to help you write, debug, and optimize your code efficiently.
        </p>

        <Link href="/dashboard" className="mt-6">
          <Button size="lg" variant="brand">
            Get Started
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>

      </div>
    </div>
  );
}
