import { Linkedin, Facebook, Twitter } from "lucide-react"

export interface SocialMediaLink {
  name: string
  icon: typeof Linkedin
  url: string
  color: string
}

export const socialMedia: SocialMediaLink[] = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/isaac-amoafo-addo",
    color: "hover:bg-[#0077B5]",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/isaac.amoafo.addo",
    color: "hover:bg-[#1877F2]",
  },
  {
    name: "X (Twitter)",
    icon: Twitter,
    url: "https://x.com/isaacamoafoaddo",
    color: "hover:bg-black",
  },
]
