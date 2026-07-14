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

export const featuredPlants: Plant[] = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    scientificName: 'Monstera deliciosa',
    price: 34.99,
    category: 'Indoor',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&h=700&fit=crop',
    badge: 'Bestseller',
  },
  {
    id: '2',
    name: 'Fiddle Leaf Fig',
    scientificName: 'Ficus lyrata',
    price: 49.99,
    category: 'Indoor',
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=600&h=700&fit=crop',
  },
  {
    id: '3',
    name: 'Snake Plant',
    scientificName: 'Sansevieria trifasciata',
    price: 22.99,
    category: 'Indoor',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1593482892228-4fc0b28c2c0e?w=600&h=700&fit=crop',
    badge: 'Low Light',
  },
  {
    id: '4',
    name: 'Lavender',
    scientificName: 'Lavandula angustifolia',
    price: 18.99,
    category: 'Outdoor',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1499007630447-130d56768d43?w=600&h=700&fit=crop',
  },
]

export const categories = [
  {
    name: 'Indoor Plants',
    description: 'Bring life to every room',
    count: 48,
    image: 'https://images.unsplash.com/photo-1463320898484-4aabee37a7e6?w=500&h=400&fit=crop',
  },
  {
    name: 'Outdoor & Garden',
    description: 'Transform your outdoor space',
    count: 32,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=400&fit=crop',
  },
  {
    name: 'Succulents',
    description: 'Low maintenance, high charm',
    count: 24,
    image: 'https://images.unsplash.com/photo-1459411552884-841b9b204002?w=500&h=400&fit=crop',
  },
  {
    name: 'Rare & Exotic',
    description: 'For the discerning collector',
    count: 12,
    image: 'https://images.unsplash.com/photo-1509930088844-521f6c391e9b?w=500&h=400&fit=crop',
  },
]
