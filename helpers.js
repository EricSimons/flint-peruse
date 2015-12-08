const palette = {}
palette.lightBrown = '#bdb497'
palette.darkBrown = '#574d2e'


async function searchBooks(query='Javascript') {
  // https://www.googleapis.com/books/v1/volumes?q=hunger+games&country=DK
  let res = await fetch.json(`https://www.googleapis.com/books/v1/volumes?q=${query}&country=DK`)
  return res.items
}

export default { palette, searchBooks }
