import { palette } from './helpers'


view Home {
  console.log(view.props)
  let { books } = view.props
  let loading = false

  <book if={!loading} repeat={books}>
    {_.volumeInfo.title}
  </book>
  <div if={!loading}>Loading...</div>

}
