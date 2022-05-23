TODO
<!-- -Implement shuffleCards -->
- Implement handleClick
  - Make phase update when both arrays are same length
    :cards is not getting updated
COMPONENTS
-root
  -App
    :updateScore
    :cardsState
    :handleClick
    -Header
      -Title
      -Score
    -CardsContainer
      :shuffleCards
      :will render 8 Card components by passing the currentArrayOfCards properties from App to each Card
      -Card
        :will get passed the card info as props to model the component 
        :will get passed the handleClick function from App

COMMUNICATION

  (((Card) CardsContainer) App)

FUNCTIONALITIES

- WHEN GAME STARTS-
  :display first array of cards and shuffle them
  :add event listeners to card using the functions to check if length of clicked cards is equals to current array length, another one for shuffle...

- WHEN USER CLICKS A CARD-

  :if clickedCard id is within the array of clickedCards
    :reset display
    :reset currentScore

  else:
    :change setClickedCards array to add this new card's id
    :compare the card array length with the clickedCards array length

      :if length is equal
        :increment the phase variable
        :use next card array on display and shuffle

      :else
        :use same card array and shuffle

    :if currentScore is > bestScore
      :update bestScore
    :update currentScore

- WHEN GAME RESTARTS-


QUESTIONS
-How to store array of cards? 
app has several array of cards with data >
have a phase variable in state which will determine which array to pick from the object
this phase variable will be incremented everytime the user passes a phase(when clickedCards array length is equal to currentCardsArray)

