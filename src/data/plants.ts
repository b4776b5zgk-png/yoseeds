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
    name: ' 10 jod bundle ',
    scientificName: '10 jod bundle',
    price: 9.99,
    category: 'Indoor 2',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&h=450&fit=crop',
    badge: 'Bestseller',
  },
  {
    id: '2',
    name: '20 jod bundle ',
    scientificName: 'Ficus lyrata',
    price: 19.99,
    category: 'Indoor 3 ',
    difficulty: 'Medium',
    image: ' https://www.goodhousekeeping.com/home/gardening/advice/g1285/hard-to-kill-plants/',
  },
  {
    id: '3',
    name: 'Snake Plant with olive tree',
    scientificName: 'Sansevieria trifasciata',
    price: 50 jod,
    category: 'Indoor 2 outdoor 1',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1593482892228-4fc0b28c2c0e?w=600&h=700&fit=crop\https://www.gardeningexpress.co.uk/giant-tuscan-olive-tree-olea-europa-mediterranean-olive-tree-xxxl-large-specimen-circa-250-300cm-tall',
    badge: 'Low Light',
  },
  {
    id: '4',
    name: 'olive tree 1 year old ',  
    scientificName: 'Lavandula angustifolia',
    price: 40 jod,
    category: 'Outdoor',
    difficulty: 'Easy',
    image: 'https://www.gardeningexpress.co.uk/giant-tuscan-olive-tree-olea-europa-mediterranean-olive-tree-xxxl-large-specimen-circa-250-300cm-tall',
  },
]

    id: '3',
    name: 'alppo pine ',
    scientificName: 'Sansevieria trifasciata',
    price: 46.99 jod,
    category: ' outdoor ',
    difficulty: 'Easy',
    image: 'https://www.evergreentrees.com.au/products/pinus-halipensis?srsltid=AfmBOopk_jH3LolQzWzMML0M0xEsGKk7KtnyD-UtrN_ZRgKRZFv8yeLc',
    badge: '',   
export const categories = [
  {
    name: 'Indoor Plants',
    description: 'Bring life to every room',
    count: 5,
    image: 'https://images.unsplash.com/photo-1463320898484-4aabee37a7e6?w=500&h=400&fit=crop',
  },
  {
    name: 'Outdoor ',
    description: 'Transform your outdoor space',
    count: 6,
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
