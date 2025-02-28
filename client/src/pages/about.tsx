import { Avatar } from "@/components/ui/avatar";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container py-24">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="text-5xl font-bold mb-8">About Dhoond</h1>
          <div className="prose prose-lg mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Dhoond, a start-up incubated at LUMS, is a student discount app dedicated to connecting students with exclusive deals and savings. Our mission is to make everyday life more affordable while adding an element of excitement to the experience. Through partnerships with local and national brands, we bring tailored discounts directly to students.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              We also gamify savings with our treasure hunts, turning discounts into an interactive experience. Participants can locate hidden prizes and win cash rewards, ensuring they save money while having fun.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <h2 className="text-4xl font-bold text-center mb-16">Our Team</h2>
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Zohaib */}
          <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="mb-8">
              <img
                src="/assets/zohaibpic.jpeg"
                alt="Zohaib"
                className="rounded-2xl w-full h-96 object-cover"
              />
            </div>
            <h3 className="text-3xl font-bold mb-4">Zohaib</h3>
            <h4 className="text-xl text-primary mb-4">Co-Founder</h4>
            <p className="text-gray-600 leading-relaxed">
              An Economics student at LUMS, brings strategic financial insight and a results-driven approach to his role as CFO. Combining analytical skills with innovative thinking, he ensures financial operations align with organizational goals, fostering growth and sustainability.
            </p>
          </div>

          {/* Ahmad Okasha */}
          <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="mb-8">
              <img
                src="/assets/ahmadokasha.jpeg"
                alt="Ahmad Okasha"
                className="rounded-2xl w-full h-96 object-cover"
              />
            </div>
            <h3 className="text-3xl font-bold mb-4">Ahmad Okasha</h3>
            <h4 className="text-xl text-primary mb-4">Co-founder</h4>
            <p className="text-gray-600 leading-relaxed">
              A student at Goldsmiths, University of London, with a strong background in marketing, sales, and technical development. He plays a pivotal role in driving the company's growth by crafting innovative marketing strategies, building and managing client relationships, and overseeing the technical aspects of the business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}