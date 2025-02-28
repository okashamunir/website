import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-primary to-pink-500 text-transparent bg-clip-text">
            Unlock Student Discounts Across Pakistan
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Join thousands of students saving money at their favorite restaurants. 
            Dhoond makes it easy to discover and enjoy exclusive student discounts.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild>
              <a href="https://linktr.ee/Dhoond" target="_blank" rel="noopener noreferrer">Download Now</a>
            </Button>
            <Button variant="ghost" size="lg">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
