import HOCPerson from '../HOC/HOCPerson';

const PersonOne = ({money, increaseMoney}) => {
  return (
    <div>
        <h2>Jimmy is offering ${money}</h2>
        <button onClick={increaseMoney}>Increase Money</button>
    </div>
  )
}

export default HOCPerson(PersonOne)