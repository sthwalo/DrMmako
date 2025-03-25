import { Brain, Award, Users, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Dr. Tracy Mmako</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A renowned neurologist and advocate with a passion for improving the lives of individuals with neurodiverse disorders.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <img
              src="images/Tracy-.png"
              alt="Dr. Tracy Mmako"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Biography</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                Dr. Tracy Mmako is a renowned neurologist and advocate with a passion for improving the lives of individuals with neurodiverse disorders. Born and raised in Zebediela, Limpopo, Dr. Mmako pursued her academic excellence at Medical University of Southern Africa (Medunsa) where she earned a Bachelor of Science degree with majors in Psychology and Biology.
              </p>
              <p className="mb-4">
                Dr. Mmako's fascination with the human brain and its intricate functions led her to pursue a medical degree (MBChB) at The University of Limpopo. Following two years of internship at the Charlotte Maxeke Johannesburg Academic Hospital and one year of community service at FH Odendaal Hospital in Limpopo, she later specialized in Neurology, completing a Master's of Medicine in Neurology from the Sefako Makgatho Health Sciences University (SMU) and a Fellowship in Neurology from the Colleges of Medicine of South Africa (CMSA).
              </p>
              <p>
                Throughout her career, Dr. Mmako has worked tirelessly to deliver exceptional patient care, advance the understanding and management of neurological disorders, and advocate for the rights and dignity of individuals with neurodiverse disorders. Her expertise and passion have made her a sought-after speaker, educator, and consultant.
              </p>
            </div>
          </div>
        </div>

        {/* Personal Section */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Personal Life</h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Dr. Mmako is a devoted wife, mother, daughter, and sister. Her personal experiences and relationships have deepened her understanding of the complexities and challenges faced by individuals and families affected by neurodiverse disorders.
          </p>
          <p className="text-gray-600 text-center font-medium text-lg max-w-3xl mx-auto">
            She continues to inspire and empower individuals, families, and communities in her work through the Dr MT Mmako-Mkhonza Foundation.
          </p>
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00A86B] text-white mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Qualifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Education & Qualifications</h2>
          <div className="space-y-8">
            {qualifications.map((qual, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00A86B] text-white flex items-center justify-center">
                  {index + 1}
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold mb-2">{qual.title}</h3>
                  <p className="text-gray-600">{qual.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const values = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Expertise",
    description: "Committed to excellence in neurological care through continuous learning and advancement"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Compassion",
    description: "Providing empathetic care that considers the whole person, not just the condition"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Patient-Centered",
    description: "Focusing on individualized care plans that meet each patient's unique needs"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Innovation",
    description: "Utilizing the latest medical advancements for optimal patient outcomes"
  }
];

const qualifications = [
  {
    title: "Bachelor of Science",
    description: "Medical University of Southern Africa (Medunsa) with majors in Psychology and Biology"
  },
  {
    title: "Medical Degree (MBChB)",
    description: "The University of Limpopo, followed by internship at Charlotte Maxeke Johannesburg Academic Hospital and community service at FH Odendaal Hospital"
  },
  {
    title: "Master's of Medicine in Neurology",
    description: "Sefako Makgatho Health Sciences University (SMU)"
  },
  {
    title: "Fellowship in Neurology",
    description: "Colleges of Medicine of South Africa (CMSA)"
  }
];