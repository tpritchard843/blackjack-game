import GameDataRow from '../GameDataRow/GameDataRow.jsx';
import Button from '../Button/Button.jsx'

export default function GameTable() {
  return (
    <section id="gameTable" className="game-table">
      <div className="game-info-container">
        <GameDataRow value={'1 4 8'} label={'Cards'}/>
        <GameDataRow value={13} label={'Sum'}/>
      </div>
      <Button />
      <div>
        <GameDataRow value={1000} label={'Player Chips'}/>
      </div>
    </section>
  )
}
