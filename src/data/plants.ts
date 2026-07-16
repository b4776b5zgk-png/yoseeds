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
    id: '4',
    name: 'Olive Tree',
    scientificName: 'Olea europaea',
    price: 40,
    category: 'Outdoor',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&h=450&fit=crop',
  },
]

export const bundles: Plant[] = [
  {
    id: '1',
    name: '10 JD Seed Bundle',
    scientificName: 'Starter Bundle',
    price: 10,
    category: 'Indoor + Outdoor Seeds',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&h=450&fit=crop',
    badge: 'Bestseller',
  },
  {
    id: '2',
    name: '20 JD Seed Bundle',
    scientificName: 'Growth Bundle',
    price: 20,
    category: 'Indoor + Outdoor Seeds',
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&h=450&fit=crop',
  },
  {
    id: '3',
    name: '50 JD Seed Bundle',
    scientificName: 'Premium Bundle',
    price: 50,
    category: 'Indoor + Outdoor Seeds',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1593482892228-4fc0b28c2c0e?w=600&h=700&fit=crop',
    badge: 'Premium',
  },
]
