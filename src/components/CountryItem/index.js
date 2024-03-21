import './index.css'

const CountryItem = props => {
  const {details, addToVisitedList} = props
  const {id, name, isVisited} = details
  const moveToVisitList = () => {
    addToVisitedList(id)
  }
  return (
    <li className="countryDetails">
      <p className="describe">{name}</p>
      {isVisited ? (
        <p className="visitedBtn">Visited</p>
      ) : (
        <button type="button" className="visitBtn" onClick={moveToVisitList}>
          Visit
        </button>
      )}
    </li>
  )
}
export default CountryItem
