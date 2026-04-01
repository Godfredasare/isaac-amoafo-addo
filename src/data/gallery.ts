export interface GalleryCategory {
  title: string
  description: string
  folder: string
  images: string[]
}

export const galleryCategories: GalleryCategory[] = [
  {
    title: "Politics / Field Work",
    description: "Community engagement and political involvement",
    folder: "politics",
    images: ["politics-1.png", "politics-2.png", "politics-3.png", "politics-4.png", "politics-5.png", "politics-6.png", "politics-7.png", "politics-8.png"],
  },
  {
    title: "Farm Work",
    description: "Agricultural ventures and farming activities",
    folder: "farm",
    images: ["farm-1.png", "farm-2.png", "farm-3.png", "farm-4.png", "farm-5.png", "farm-6.png", "farm-7.png", "farm-8.png"],
  },
  {
    title: "Office Work",
    description: "Professional work and field operations",
    folder: "field-work",
    images: ["field-1.png", "field-2.png", "field-3.png", "field-4.png", "field-5.png", "field-6.png", "field-7.png", "field-8.png"],
  },
]

export const galleryPageCategories: GalleryCategory[] = [
  {
    title: "Politics / Field Work",
    description: "Community engagement and political campaigning",
    folder: "politics",
    images: [
      "politics-1.png", "politics-2.png", "politics-3.png", "politics-4.png",
      "politics-5.png", "politics-6.png", "politics-7.png", "politics-8.png"
    ],
  },
  {
    title: "Farm Work",
    description: "Agricultural ventures and farming activities",
    folder: "farm",
    images: [
      "farm-1.png", "farm-2.png", "farm-3.png", "farm-4.png",
      "farm-5.png", "farm-6.png", "farm-7.png", "farm-8.png"
    ],
  },
  {
    title: "Office Work",
    description: "Professional work and field operations",
    folder: "field-work",
    images: [
      "field-1.png", "field-2.png", "field-3.png", "field-4.png",
      "field-5.png", "field-6.png", "field-7.png", "field-8.png"
    ],
  },
]
