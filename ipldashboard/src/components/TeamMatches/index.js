// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatchDeatils: [],
    recentMatches: [],
    teamBanner: '',
    team: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formattedLatestMatchDetails = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }

    const formattedRecentMatches = data.recent_matches.map(eachMatch => ({
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      date: eachMatch.date,
      firstInnings: eachMatch.first_innings,
      id: eachMatch.id,
      manOfTheMatch: eachMatch.man_of_the_match,
      matchStatus: eachMatch.match_status,
      result: eachMatch.result,
      secondInnings: eachMatch.second_innings,
      umpires: eachMatch.umpires,
      venue: eachMatch.venue,
    }))

    this.setState({
      latestMatchDeatils: formattedLatestMatchDetails,
      recentMatches: formattedRecentMatches,
      teamBanner: data.team_banner_url,
      team: id.toLowerCase(),
      isLoading: false,
    })
  }

  renderTeamMatchDetails = () => {
    const {teamBanner, latestMatchDeatils, recentMatches} = this.state
    return (
      <div className="content-card">
        <img src={teamBanner} alt="team banner" className="team-banner" />
        <h1 className="latest-matches-title">Latest Matches</h1>
        <LatestMatch lmDetails={latestMatchDeatils} />
        <ul className="unordered-list">
          {recentMatches.map(eachMatch => (
            <MatchCard mcDetails={eachMatch} key={eachMatch.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading, team} = this.state
    const bgColorClassName = team

    return (
      <div className={`team-matches-bg-container ${bgColorClassName}`}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatchDetails()
        )}
      </div>
    )
  }
}

export default TeamMatches
