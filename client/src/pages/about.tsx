import JourneyTimeline from "@/components/journey-timeline";

export default function About() {
  return (
    <div className="py-16">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-6">About Dhoond</h1>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          We're on a mission to make student life more affordable by connecting students 
          with exclusive discounts at their favorite restaurants across Pakistan.
        </p>
      </div>
      <JourneyTimeline />
    </div>
  );
}
