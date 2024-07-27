import Loader from 'react-loader-spinner'
import {Component} from 'react'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMathces extends Component {
  state = {
    teamBannerUrl: '',
    recentMatches: [],
    latestMatchDetails: {},
    isloading: true,
  }

  componentDidMount() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.getdata(id)
  }

  getdata = async id => {
    const res = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const parsedres = await res.json()
    const x = parsedres
    const teamBannerUrl = x.team_banner_url
    const recentMatches = x.recent_matches.map(y => ({
      umpires: y.umpires,
      result: y.result,
      manOfTheMatch: y.man_of_the_match,
      id: y.id,
      date: y.date,
      venue: y.venue,
      competingTeam: y.competing_team,
      competingTeamLogo: y.competing_team_logo,
      firstInnings: y.first_innings,
      secondInnings: y.second_innings,
      matchStatus: y.match_status,
    }))
    const y = x.latest_match_details
    const latestMatchDetails = {
      umpires: y.umpires,
      result: y.result,
      manOfTheMatch: y.man_of_the_match,
      id: y.id,
      date: y.date,
      venue: y.venue,
      competingTeam: y.competing_team,
      competingTeamLogo: y.competing_team_logo,
      firstInnings: y.first_innings,
      secondInnings: y.second_innings,
      matchStatus: y.match_status,
    }
    this.setState({
      teamBannerUrl,
      recentMatches,
      latestMatchDetails,
      isloading: false,
    })
  }

  render() {
    const {
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
      isloading,
    } = this.state
    return (
      <div className="teammatchesoutercont bg-RCB">
        {isloading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="innerteammatchesoutercont">
            <div className="teammatchescontimage">
              <img
                className="teammatchesbanner"
                src={teamBannerUrl}
                alt="team banner"
              />
            </div>
            <h1>Latest Matches</h1>
            <LatestMatch
              Details={latestMatchDetails}
              key={latestMatchDetails.id}
            />
            <ul className="matchcardlstcont">
              {recentMatches.map(x => (
                <MatchCard Details={x} key={x.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMathces
