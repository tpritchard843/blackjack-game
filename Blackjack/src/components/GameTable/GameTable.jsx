import GameDataRow from '../GameDataRow/GameDataRow.jsx';
import Button from '../Button/Button.jsx'
import { useState } from 'react';

export default function GameTable() {
  const [ isAlive, setIsAlive ] = useState(false)
  const [ isFirstHand, setisFirstHand ] = useState(true);
  const [ hasBlackjack, setHasBlackjack ] = useState(false);
  const [ cards, setCards ] = useState([]);
  const [ sum, setSum ] = useState(0);

  const startGame = () => {
    setIsAlive(true);
    setHasBlackjack(false);
    setCards([]);
    setSum(0);
    generateRandomCard();
    setisFirstHand(false);
  }

  const generateRandomCard = () => {
    // if (cards.length > 0) {
    //   setisFirstHand(false);
    // }
    let randomNumber = Math.floor( Math.random()*13 ) + 1;
      if (randomNumber > 10) {
        // return 10;
        randomNumber = 10;
      }
      if (randomNumber === 1) {
        if (sum <= 10 || isFirstHand) {
          randomNumber = 11;
        }else {
          randomNumber = 1;
        }
      }

    setCards([...cards, randomNumber]);
    sumCards(randomNumber);
  }

  //  Sum state is sticking with sumOfCards val --> startGame() is not resetting the value
  const sumCards = (number) => {
    let sumOfCards = sum + number;
    if (sumOfCards === 21) {
      setHasBlackjack(true);
    }
    else if (sumOfCards > 21) {
      setIsAlive(false);
    }
    setSum(sumOfCards);
  }

  const concatCards = () => {
    let cardsString = ``;
    if (!isAlive || hasBlackjack) {
      cardsString = ``;
    } else {
      cards.forEach(card => {
        cardsString += `${card}  `
      })
    }
    return cardsString;
  }

  return (
    <section id="gameTable" className="game-table">
      <div className="game-info-container">
        {cards.length > 0 ? (<GameDataRow value={concatCards()} label={'Cards'}/>) : ('Cards: No Cards to Show')}
        <GameDataRow value={sum} label={'Sum'}/>
      </div>
      <Button
        isAlive={isAlive}
        hasBlackjack={hasBlackjack}
        onClick={!isAlive || hasBlackjack ? startGame : generateRandomCard}
        text={!isAlive || hasBlackjack ? 'Start Game' : 'New Card'}
      />
      <div>
        <GameDataRow value={1000} label={'Player Chips'}/>
      </div>
    </section>
  )
}
