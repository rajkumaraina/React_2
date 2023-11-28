import './index.css'
const FinalElement = props => {
  const {matter} = props
  const {title, description, imgUrl, className} = matter
  return (
    <li className={className}>
      <h1 className="heading">{title}</h1>
      <p className="para">{description}</p>
      <div className="img_container">
        <img src={imgUrl} alt={title} className="img" />
      </div>
    </li>
  )
}
export default FinalElement
