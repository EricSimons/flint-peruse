import { palette, searchBooks } from './helpers'

view Main {
  let loading = false
  let books = []
  let test = ''
  let search = (query) => {
    load(query)
  }

  //load()

  async function load(query) {
    loading = true
    books = await searchBooks(query)
    loading = false
  }

  <Header search={search} />

  <Home books={books} loading={loading} route="/" />

  <Favorites route="/favorites" />

  <Footer />
}

view Header {
  $ = {
    padding:'15px 30px',
    width:'100%',
    height:'60px'
  }

  <logo onClick={Flint.router.link('/')}>peruse</logo>
  $logo = {
    fontSize: '32px',
    display: 'inline-block',
    cursor: 'pointer',
    verticalAlign: 'top',
    hover: {
      borderBottom: '1px solid ' + palette.darkBrown
    }
  }

  $search = {
    display: 'inline-block',
    verticalAlign: 'top',
    marginTop: '7px',
    marginLeft: '15px',
    background: 'rgba(255,255,255,0.5)',
    borderRadius: '3px',
    fontSize:'16px',
    padding: '8px 7px',
    outline: 'none',
    width: '300px',
    border: '1px solid rgba(0,0,0,0.25)',
    color: palette.darkBrown,
    focus: {
      border: '1px solid rgba(0,0,0,0.45)',
    },
    transition: '0.2s all'
  }

  let query = (e) => {
    view.props.search(e.target.value)
  }

  <input class="search" type="text" placeholder=" Search for a book" onChange={query} />
}

view Footer {
  $credits = {
    textAlign:'center',
    marginTop:'150px',
    color: 'rgba(0,0,0,0.3)',
    fontSize: '12px'
  }
  <credits>Created by <a href="https://thinkster.io">Thinkster</a></credits>
}

view Favorites {
  <h1>You're Jake</h1>
}
