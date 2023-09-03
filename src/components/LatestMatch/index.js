// Write your code here
import './index.css'

const LatestMatch = props => {
  const {lmDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    venue,
    result,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = lmDetails

  return (
    <div className="latest-match-card-bg">
      <div className="lm-logo-and-title-section-bg">
        <div className="title-section-bg">
          <p className="lm-competing-team">{competingTeam}</p>
          <p className="lm-date">{date}</p>
          <p className="lm-venue">{venue}</p>
          <p className="lm-result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
      </div>
      <hr />
      <div className="lm-descriptive-bottom-section">
        <h1 className="lm-bottom-section-heading">First Innings</h1>
        <p className="lm-bottom-section-para">{firstInnings}</p>
        <h1 className="lm-bottom-section-heading">Second Innings</h1>
        <p className="lm-bottom-section-para">{secondInnings}</p>
        <h1 className="lm-bottom-section-heading">Man Of The Match</h1>
        <p className="lm-bottom-section-para">{manOfTheMatch}</p>
        <h1 className="lm-bottom-section-heading">Umpires</h1>
        <p className="lm-bottom-section-para">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
