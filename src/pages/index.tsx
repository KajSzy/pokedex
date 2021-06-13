import { PokemonCard } from '@components'
import { getPokemonSprite } from '@helpers'
import { fetchPokemonGraph } from '@services'
import { InferGetServerSidePropsType } from 'next'

const HOME_PAGE_POKEMON_LIMIT = 30

export const getStaticProps = async () => {
  const query = `query MyQuery {
  pokemon_v2_pokemon(limit: ${HOME_PAGE_POKEMON_LIMIT}) {
    name
    id
  }
}
`
  const result = await fetchPokemonGraph<{
    pokemon_v2_pokemon: PokemonBasicData[]
  }>(query)

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
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">
            Pokedex
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Created by KajSzy
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {pokes.map((pokemon) => (
            <PokemonCard {...pokemon} key={pokemon.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
