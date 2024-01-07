import PropTypes from "prop-types"

export const GifItem = ({ title, url }) => {
    
  return (
    <a className="card" href={ url } target="_blank">
        <img src={ url } alt={ title }/>
        <p>{ title }</p>
    </a>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

// GifItem.defaultProps = {
//   title: 'Gif Title',
//   url: 'https://media0.giphy.com/media/HySWi66mZx3e8/giphy.gif?cid=d3588a34zffqaoak2ajei5wmyl6yjvil2dxegf2izxgrxxlp&ep=v1_gifs_search&rid=giphy.gif&ct=g'
// }