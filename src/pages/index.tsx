import { Loader, PokemonCard } from '@components'
import { getPokemonSprite } from '@helpers'
import { fetchPokemonGraph } from '@services'
import { InferGetServerSidePropsType } from 'next'
import { useEffect, useState } from 'react'

const PER_PAGE = 30

const getGraphQuery = (offset = 0) => `query MyQuery {
  pokemon_v2_pokemon(limit: ${PER_PAGE}, offset: ${offset}) {
    name
    id
  }
}
`

type GraphApiResponse = {
  pokemon_v2_pokemon: PokemonBasicData[]
}

export const getStaticProps = async () => {
  const result = await fetchPokemonGraph<GraphApiResponse>(getGraphQuery())

  return {
    props: {
      pokes: result.pokemon_v2_pokemon.map((pokemon) => ({
        ...pokemon,
        sprite: getPokemonSprite(pokemon.id),
      })),
    },
    revalidate: 6000,
  }
}

export default function Index({
  pokes,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  const [hasMore, setHasMore] = useState(true)
  const [items, setItems] = useState<PokemonBasicData[]>(pokes)
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)

  const fetchMoreData = async () => {
    try {
      setLoading(true)
      const result = await fetchPokemonGraph<GraphApiResponse>(
        getGraphQuery(currentPage * PER_PAGE)
      )
      setItems([
        ...items,
        ...result.pokemon_v2_pokemon.map((pokemon) => ({
          ...pokemon,
          sprite: getPokemonSprite(pokemon.id),
        })),
      ])
      if (result.pokemon_v2_pokemon.length < 30) {
        setHasMore(false)
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (currentPage > 0) {
      fetchMoreData()
    }
  }, [currentPage])

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">
            Pokedex
          </h1>
        </div>
        <div className="flex flex-wrap m-4">
          {items.map((pokemon) => (
            <PokemonCard {...pokemon} key={pokemon.id} />
          ))}
        </div>

        <div className="flex flex-col w-full items-center">
          {!loading && hasMore && (
            <button
              className="bg-gray-800 text-gray-400 font-bold uppercase text-sm px-6 py-3 rounded-full hover:bg-gray-700 focus:outline-none active:bg-gray-600 outline-none mr-1 mb-1 ease transition duration-150"
              type="button"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Load more
            </button>
          )}
          {loading && <Loader />}
        </div>
      </div>
    </section>
  )
}
