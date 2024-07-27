import './index.css'

const LatestMatch = props => {
  const {Details} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = Details
  return (
    <div className="latestcontouter">
      <div className="cont-1">
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div className="hrlinecont">
        <img
          className="latestmatchcomplog"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
        <hr className="hrline" />
      </div>
      <div className="cont-2">
        <h1>First Innings</h1>
        <p>{firstInnings}</p>
        <h1>Second Innings</h1>
        <p>{secondInnings}</p>
        <h1>Man of The Match</h1>
        <p>{manOfTheMatch}</p>
        <h1>Umpires</h1>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
