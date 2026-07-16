export interface Plant {
  id: string
  name: string
  scientificName: string
  price: number
  category: string
  difficulty: 'Easy' | 'Medium' | 'Advanced'
  image: string
  badge?: string
}

export interface Bundle {
  name: string
  description: string
  price: number
  image: string
  badge?: string
}

export const featuredPlants: Plant[] = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    scientificName: 'Monstera deliciosa',
    price: 34.99,
    category: 'Indoor',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&h=450&fit=crop',
    badge: 'Bestseller',
  },
  {
    id: '2',
    name: 'Snake Plant',
    scientificName: 'Sansevieria trifasciata',
    price: 22.99,
    category: 'Indoor',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1593482892228-4fc0b28c2c0e?w=600&h=700&fit=crop',
  },
  {
    id: '3',
    name: 'Golden Pothos',
    scientificName: 'Epipremnum aureum',
    price: 18.99,
    category: 'Indoor',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&h=450&fit=crop',
    badge: 'Popular',
  },
  {
    id: '4',
    name: 'Olive Tree',
    scientificName: 'Olea europaea',
    price: 40,
    category: 'Outdoor',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=450&fit=crop',
  },
]

export const bundles: Bundle[] = [
  {
    name: '10 JD Seed Bundle',
    description: '1 indoor + 1 outdoor seed pack',
    price: 10,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&h=450&fit=crop',
    badge: 'Bestseller',
  },
  {
    name: '20 JD Seed Bundle',
    description: '2 indoor + 2 outdoor seed packs',
    price: 20,
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&h=450&fit=crop',
  },
  {
    name: '50 JD Seed Bundle',
    description: '4 indoor + 2 outdoor seed packs',
    price: 50,
    image: 'https://images.unsplash.com/photo-1593482892228-4fc0b28c2c0e?w=600&h=700&fit=crop',
    badge: 'Premium',
  },
]
