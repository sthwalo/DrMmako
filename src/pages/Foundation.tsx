import { Calendar, Clock, MapPin, Users, Heart, Lightbulb, Target } from 'lucide-react';

export default function Foundation() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Dr. Mmako-Mkhonza Foundation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creating a society where Neurodiverse individuals are understood, accepted, and empowered to lead fulfilling lives.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Lightbulb className="h-6 w-6 text-[#00A86B] mr-2" /> Vision
              </h2>
              <p className="text-gray-600">
                To create a society where Neurodiverse individuals are understood, accepted, and empowered to lead fulfilling lives.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Target className="h-6 w-6 text-[#00A86B] mr-2" /> Mission
              </h2>
              <p className="text-gray-600">
                To provide support, resources, and advocacy for Neurodiverse individuals and their families, fostering an inclusive environment that promotes understanding and acceptance.
              </p>
            </div>
          </div>
        </div>

        {/* Foundation Interview Video */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Meet Our Founder</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                className="w-full h-full" 
                src="/images/Foundation Interview.mp4" 
                title="Dr. Mmako-Mkhonza Foundation Interview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Dr. Tracy Mmako: The Vision Behind the Foundation</h3>
              <p className="text-gray-600 mb-4">
                In this exclusive interview, Dr. Tracy Mmako shares her personal journey and the inspiration behind establishing the Dr. Mmako-Mkhonza Foundation. 
                Learn about her experiences as a neurologist and advocate, and how these have shaped her commitment to supporting individuals with neurodiverse disorders.
              </p>
              <p className="text-gray-600">
                Dr. Mmako discusses the foundation's goals, upcoming initiatives, and her vision for creating a more inclusive society where neurodiversity is understood and celebrated.
              </p>
            </div>
          </div>
        </div>

        {/* Upcoming Launch Event */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Foundation Launch Event</h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-[#00A86B] text-white p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Event Details</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Calendar className="h-6 w-6 mr-2 flex-shrink-0" />
                    <span>10th May 2025</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-6 w-6 mr-2 flex-shrink-0" />
                    <span>12:30 PM for 5:00 PM</span>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-6 w-6 mr-2 flex-shrink-0" />
                    <span>Emnotweni Arena</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl font-bold mb-4">About the Launch</h3>
                <p className="text-gray-600 mb-4">
                  The Dr. Mmako-Mkhonza Foundation is committed to supporting and empowering individuals on the Neurodiversity spectrum. This launch event aims to create awareness and promote understanding of Neurodiversity, emphasizing the importance of inclusivity and acceptance within our communities.
                </p>
                <p className="text-gray-600">
                  The event will feature a film screening of the Africa Moms Rising Movie, followed by official launch activities, including speeches and panel discussions with experts in the field of Neurodiversity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Objectives */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((objective, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-[#00A86B] mb-4">{objective.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{objective.title}</h3>
                <p className="text-gray-600">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Target Audience */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Target Audience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {audience.map((group, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-4 text-center">
                <Users className="h-8 w-8 text-[#00A86B] mx-auto mb-2" />
                <p className="text-gray-800">{group}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#00A86B] text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
          <p className="text-xl mb-6">Be part of this important initiative to support Neurodiverse individuals and their families.</p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[#00A86B] font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
          >
            Contact Us to Participate
          </a>
        </div>
      </div>
    </div>
  );
}

const objectives = [
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Raise Awareness",
    description: "Increase public knowledge about Neurodiversity and its significance"
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Showcase Foundation",
    description: "Present the foundation's mission and future initiatives"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Community Engagement",
    description: "Foster a sense of community, encouraging dialogue and collaboration"
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Inspire Action",
    description: "Encourage attendees to support the cause and become advocates for Neurodiversity"
  }
];

const audience = [
  "Families and individuals affected by Neurodiversity",
  "Educators and healthcare professionals",
  "Community leaders and advocates",
  "General public interested in supporting inclusivity"
];
