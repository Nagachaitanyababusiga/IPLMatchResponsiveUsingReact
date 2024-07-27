import Loader from 'react-loader-spinner'
import './index.css'
import {Component} from 'react'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teams: [], isloading: true}

  componentDidMount() {
    this.getdata()
  }

  getdata = async () => {
    const res = await fetch('https://apis.ccbp.in/ipl')
    const parsedres = await res.json()
    const {teams} = parsedres
    const modifiedobjs = teams.map(x => ({
      name: x.name,
      id: x.id,
      teamImageUrl: x.team_image_url,
    }))
    this.setState({teams: modifiedobjs, isloading: false})
  }

  render() {
    const {teams, isloading} = this.state
    // console.log(teams)
    return (
      <div className="outercont">
        {isloading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="upper-top-cont">
              <img
                className="ipllogo"
                alt="ipl logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
              />
              <h1>IPL Dashboard</h1>
            </div>
            <ul className="lstcont">
              {teams.map(x => (
                <TeamCard Details={x} key={x.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
