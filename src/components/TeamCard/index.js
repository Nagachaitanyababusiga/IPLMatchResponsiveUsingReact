import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {Details} = props
  const {id, name, teamImageUrl} = Details
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="lstitmcont">
        <img className="TeamCardlogo" src={teamImageUrl} alt={name} />
        <p className="lstitmpara">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
