export const POKEMON_GRAPH_API_URI = 'https://beta.pokeapi.co/graphql/v1beta'

export const POKEMON_GRAPH_API_HEADERS = {
  'Content-Type': 'application/json',
  'X-Method-Used': 'graphiql',
}

export const fetchPokemonGraph = async <T = any>(query: string): Promise<T> => {
  const result = await fetch(POKEMON_GRAPH_API_URI, {
    method: 'POST',
    headers: {
      ...POKEMON_GRAPH_API_HEADERS,
    },
    body: JSON.stringify({
      query,
    }),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err)
    })
  return result.data
}
