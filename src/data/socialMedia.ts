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
    url: "https://www.linkedin.com/in/isaac-amoafo-addo-17375633?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    color: "hover:bg-[#0077B5]",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/share/18CbE9dt5x/",
    color: "hover:bg-[#1877F2]",
  },
  // {
  //   name: "X (Twitter)",
  //   icon: Twitter,
  //   url: "https://x.com/isaacamoafoaddo",
  //   color: "hover:bg-black",
  // },
]
