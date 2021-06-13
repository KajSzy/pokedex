import { formatPokemonId, getPokemonSprite } from '@helpers'
import { fetchPokemonGraph } from '@services'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

const getQuery = (id: number) => `
query MyQuery {
    pokemon_v2_pokemon_by_pk(id: ${id}) {
    name
    pokemon_v2_pokemonmoves(order_by: {level: asc}) {
      level
      move_id
      pokemon_v2_move {
        name
        accuracy
        move_effect_chance
        contest_effect_id
        contest_type_id
        generation_id
        id
        move_damage_class_id
        move_effect_id
        move_target_id
        power
        pp
      }
    }
    pokemon_v2_pokemonstats {
      base_stat
      id
      pokemon_v2_stat {
        name
        is_battle_only
      }
    }
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
        id
      }
    }
  }
}
`

// eslint-disable-next-line @typescript-eslint/ban-types
export const getServerSideProps: GetServerSideProps<
  PokemonExtendData,
  { id: string }
> = async (context) => {
  const id = parseInt(context.params.id)
  const data = await fetchPokemonGraph(getQuery(id))
  const pokemonData: PokemonExtendData = {
    id,
    moves: [],
    name: data.pokemon_v2_pokemon_by_pk.name,
    sprite: getPokemonSprite(id),
    stats: [],
    types: [],
  }

  pokemonData.types = data.pokemon_v2_pokemon_by_pk.pokemon_v2_pokemontypes.map(
    (type): PokemonType => ({
      name: type.pokemon_v2_type.name,
      id: type.pokemon_v2_type.id,
    })
  )

  pokemonData.stats = data.pokemon_v2_pokemon_by_pk.pokemon_v2_pokemonstats.map(
    (stat): PokemonStat => ({
      base_stat: stat.base_stat,
      is_battle_only: stat.pokemon_v2_stat.is_battle_only,
      name: stat.pokemon_v2_stat.name,
    })
  )

  return {
    props: pokemonData,
  }
}

export default function Pokemon(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={props.name}
            className="lg:w-1/4 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={props.sprite}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              #{formatPokemonId(props.id)}
            </h2>
            <h1 className="text-white text-3xl title-font font-medium mb-1 capitalize">
              {props.name}
            </h1>
            <div className="flex mb-4">{/* POKEMON TYPES AS CHIPS */}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
