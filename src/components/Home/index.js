// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

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
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
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
