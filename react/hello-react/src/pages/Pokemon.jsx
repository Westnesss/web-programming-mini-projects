import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function Pokemon() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['pokemon', 'pikachu'], // cache key
        queryFn: () => axios.get('https://pokeapi.co/api/v2/pokemon/pikachu').then(r => r.data),
    })

    if (isLoading) return <p className="p-6">Loading...</p>
    if (error) return <p className="p-6">Error</p>
    return <p className="p-6 text-xl">{data.name}</p>
}