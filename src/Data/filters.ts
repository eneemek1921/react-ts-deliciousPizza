
export type FilterType = {
    id: number
    title: string
    url: string
}

export const filters: FilterType[] = [
    {
        id: 1,
        title: 'Classic',
        url: '/menu?category=Classic'
    },
    {
        id: 2,
        title: 'Spicy',
        url: '/menu?category=Spicy'
    },
    {
        id: 3,
        title: 'Vegetarian',
        url: '/menu?category=Vegetarian'
    },
    {
        id: 4,
        title: 'Gourmet',
        url: '/menu?category=Gourmet'
    },
    {
        id: 5,
        title: 'Meat',
        url: '/menu?category=Meat'
    },
    {
        id: 6,
        title: 'Specialty',
        url: '/menu?category=Specialty'
    },
    {
        id: 7,
        title: 'Gluten Free',
        url: '/menu?category=Gluten Free'
    },
]