import ContactForm from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="container py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
        <p className="text-lg text-muted-foreground text-center mb-12">
          Have questions or want to partner with us? We'd love to hear from you!
        </p>
        <Card>
          <CardContent className="p-6">
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
