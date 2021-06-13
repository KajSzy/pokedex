type PokemonBasicData = {
  name: string
  id: number
  sprite: string
}

type PokemonMove = {
  level: number
  id: number
  name: string
  accuracy: null | number
  move_effect_chance: null | number
  contest_effect_id: number
  contest_type_id: number
  generation_id: number
  move_damage_class_id: number
  move_effect_id: number
  move_target_id: number
  power: null | number
  pp: number
}

type PokemonType = {
  name: string
  id: string
}

type PokemonStat = {
  name: string
  is_battle_only: boolean
  base_stat: number
}

type PokemonExtendData = PokemonBasicData & {
  stats: PokemonStat[]
  moves: PokemonMove[]
  types: PokemonType[]
}
