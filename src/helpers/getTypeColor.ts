export const getTypeColor = (type: string) => {
  switch (type) {
    case 'grass': {
      return 'bg-green-400 text-gray-100'
    }
    case 'fire': {
      return 'bg-red-800 text-gray-100'
    }
    case 'poison': {
      return 'bg-green-800 text-gray-100'
    }
    case 'flying': {
      return 'bg-gray-500 text-gray-100'
    }
    case 'electric': {
      return 'bg-yellow-300 text-gray-100'
    }
    case 'ground': {
      return 'bg-yellow-900 text-gray-100'
    }
    case 'psychic': {
      return 'bg-purple-900 text-gray-100'
    }
    case 'bug': {
      return 'bg-green-800 text-gray-100'
    }
    default: {
      return 'bg-gray-800 text-gray-100'
    }
  }
}
