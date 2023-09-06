import {Component} from 'react'

import TeamCard from '../TeamCard'


import './index.css'

class Home extends Component {
  state = {matchData: [], isLoading: true}

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const response = await fetch(' https://apis.ccbp.in/ipl')
    const data = await response.json()

    const formattedData = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({matchData: formattedData, isLoading: false})
  }

  getMatchCards = () => {
    const {matchData} = this.state
    return (
      <ul className="unordered-list">
        {matchData.map(eachTeam => (
          <TeamCard team={eachTeam} key={eachTeam.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="match-home-bg-container">
        <div className="content-card">
          <div className="match-home-logo-section-bg">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="title">IPL DASHBOARD</h1>
          </div>

          {isLoading ? (
            <div>
              <h1>loading.....</h1>
            </div>
          ) : (
            this.getMatchCards()
          )}
        </div>
      </div>
    )
  }
}

export default Home
