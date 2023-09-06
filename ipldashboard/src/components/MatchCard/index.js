import './index.css'

const MatchCard = props => {
  const {mcDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = mcDetails
  const matchStatusColor = matchStatus === 'Won' ? 'won' : 'loss'

  return (
    <li className="match-card-bg-container">
      <img
        src={competingTeamLogo}
        alt={`"competing team ${competingTeam}"`}
        className="mc-competing-team-logo"
      />
      <p className="mc-competing-team">{competingTeam}</p>
      <p className="mc-result">{result}</p>
      <p className={`mc-matchStatus ${matchStatusColor}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
