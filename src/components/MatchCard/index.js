import './index.css'

const MatchCard = props => {
  const {Details} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = Details
  const statusclass = matchStatus === 'Lost' ? 'lost-team' : 'won-team'
  return (
    <li className="matchcard">
      <img
        className="matchcardteamlogo"
        alt={`competing team ${competingTeam}`}
        src={competingTeamLogo}
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={statusclass}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
