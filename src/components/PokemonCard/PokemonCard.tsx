import { formatPokemonId } from '@helpers'
import Link from 'next/link'
import * as React from 'react'

type PokemonCardProps = PokemonBasicData

const PokemonCard: React.FC<PokemonCardProps> = ({ id, name, sprite }) => (
  <Link href={`/pokemon/${id}`}>
    <div className="p-4 lg:w-1/3">
      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <img
          alt={name}
          className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
          src={sprite}
        />
        <div className="flex-grow sm:pl-8">
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
