import { Avatar } from "@/components/ui/avatar";

export default function About() {
  return (
    <div className="py-16">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-6">About Dhoond</h1>

        {/* Mission Statement */}
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground text-center">
            Dhoond, a start-up incubated at LUMS, is a student discount app dedicated to connecting students with exclusive deals and savings. Our mission is to make everyday life more affordable while adding an element of excitement to the experience. Through partnerships with local and national brands, we bring tailored discounts directly to students.
          </p>
          <p className="text-lg text-muted-foreground text-center mt-4">
            We also gamify savings with our treasure hunts, turning discounts into an interactive experience. Participants can locate hidden prizes and win cash rewards, ensuring they save money while having fun.
          </p>
        </div>

        {/* Team Section */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Zohaib */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <img
                src="/assets/zohaibpic.jpeg"
                alt="Zohaib"
                className="rounded-full w-48 h-48 object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Zohaib</h3>
            <p className="text-muted-foreground">
              An Economics student at LUMS, brings strategic financial insight and a results-driven approach to his role as CFO. Combining analytical skills with innovative thinking, he ensures financial operations align with organizational goals, fostering growth and sustainability.
            </p>
          </div>

          {/* Ahmad Okasha */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <img
                src="/assets/ahmadokasha.jpeg"
                alt="Ahmad Okasha"
                className="rounded-full w-48 h-48 object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Ahmad Okasha</h3>
            <p className="text-muted-foreground">
              A student at Goldsmiths, University of London, with a strong background in marketing, sales, and technical development. He plays a pivotal role in driving the company's growth by crafting innovative marketing strategies, building and managing client relationships, and overseeing the technical aspects of the business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}