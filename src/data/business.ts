import { Tractor, Factory, Ship } from "lucide-react"

export interface BusinessInterest {
  title: string
  description: string
  icon: typeof Tractor
  details: string[]
}

export const businessInterests: BusinessInterest[] = [
  {
    title: "Farming",
    description: "Poultry, Fish Farming, Rabbit Rearing, and Agrochemicals",
    icon: Tractor,
    details: [
      "Large-scale poultry production",
      "Commercial fish farming operations",
      "Rabbit breeding and production",
      "Agrochemical distribution and consultancy"
    ]
  },
  {
    title: "Feed Production",
    description: "Rice Milling, Poultry & Fish Feed Manufacturing",
    icon: Factory,
    details: [
      "Modern rice milling facility",
      "Quality poultry feed production",
      "Fish feed formulation and manufacturing",
      "Feed distribution across Ghana"
    ]
  },
  {
    title: "General Merchant",
    description: "Import and Export of Agricultural Goods",
    icon: Ship,
    details: [
      "Agricultural commodity trading",
      "Export of Ghanaian farm produce",
      "Import of farming equipment",
      "International agribusiness partnerships"
    ]
  },
]
