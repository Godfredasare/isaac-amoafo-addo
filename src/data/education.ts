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
    image: "/schools/twente-entrance.png",
  },
  {
    institution: "Kwame Nkrumah University of Science and Technology (KNUST)",
    location: "Ghana",
    degree: "BSc. Natural Resources Management (Agroforestry)",
    image: "/schools/knust-entrance.png",
  },
  {
    institution: "St. Peter's Secondary School",
    location: "Ghana",
    degree: "Secondary Education",
    image: "/schools/st-peters-entrance.png",
  },
  {
    institution: "NDC Leadership & Political Training",
    location: "Ghana",
    degree: "Political Leadership Development Program",
    image: "/schools/ndc-training.png",
  },
]
