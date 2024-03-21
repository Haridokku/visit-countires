import './index.css'

const VisitedCountry = props => {
  const {details, removeCountryFromVisitedList} = props
  const {id, name, imageUrl} = details
  const onRemoveCountry = () => {
    removeCountryFromVisitedList(id)
  }
  return (
    <li className="listItem">
      <div className="imageAndRemove">
        <img src={imageUrl} alt="thumbnail" className="image" />
        <div className="countryAndRemoveBtn">
          <p className="describe">{name}</p>
          <button type="button" className="removeBtn" onClick={onRemoveCountry}>
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}

export default VisitedCountry
