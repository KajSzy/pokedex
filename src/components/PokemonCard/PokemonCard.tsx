import { formatPokemonId } from '@helpers'
import Link from 'next/link'
import * as React from 'react'

type PokemonCardProps = PokemonBasicData

const PokemonCard: React.FC<PokemonCardProps> = ({ id, name, sprite }) => (
  <Link href={`/pokemon/${id}`}>
    <div className="p-4 hover:shadow-2xl hover:bg-gray-800 transition duration-150 cursor-pointer w-full md:w-1/2 xl:w-1/3">
      <div className="h-full flex flex-col items-center justify-center text-center">
        <img
          alt={name}
          className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center mb-4"
          src={sprite}
        />
        <div className="flex-grow">
          <h2 className="title-font font-medium text-lg text-white capitalize">
            {name}
          </h2>
          <h3 className="text-gray-500 mb-3">#{formatPokemonId(id)}</h3>
        </div>
      </div>
    </div>
  </Link>
)

PokemonCard.displayName = 'PokemonCard'

export default PokemonCard
