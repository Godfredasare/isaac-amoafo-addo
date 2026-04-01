export interface EducationItem {
  institution: string
  location: string
  degree: string
  image: string
}

export const education: EducationItem[] = [
  {
    institution: "University of Twente",
    location: "Netherlands",
    degree: "MSc. Geoinformation Science and Earth Observation",
    image: "/schools/university_of_twente.jpg",
  },
  {
    institution: "Kwame Nkrumah University of Science and Technology (KNUST)",
    location: "Ghana",
    degree: "BSc. Natural Resources Management (Agroforestry)",
    image: "/schools/knust.jpg"
  },
  {
    institution: "St. Peter's Secondary School",
    location: "Ghana",
    degree: "Secondary Education",
    image: "/schools/St-Peters-SHS.jpg",
  },
  // {
  //   institution: "NDC Leadership & Political Training",
  //   location: "Ghana",
  //   degree: "Political Leadership Development Program",
  //   image: "/schools/ndc-training.png",
  // },
]
