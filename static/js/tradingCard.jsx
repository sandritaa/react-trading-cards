'use strict';

const tradingCardData = [
    {
      name: "Balloonicorn",
      skill: "video games",
      img:'/static/img/balloonicorn.jpg',
      cardId: 1,
    },

    {
      name: "Float",
      skill: "baking pretzels",
      img: "/static/img/float.jpg",
      cardId: 2,
    },
    {
      name: "Llambda",
      skill: "knitting scarves",
      img: "/static/img/llambda.jpg",
      cardId: 3,
    },
    {
      name: "Off-By-One",
      skill: "climbing mountains",
      img: "/static/img/off-by-one.jpeg",
      cardId: 4,
    },
    {
      name: "Seed.py",
      skill: "making curry dishes",
      img: "/static/img/seedpy.jpeg",
      cardId: 5,
    },
    {
      name: "Polymorphism",
      skill: "costumes",
      img: "/static/img/polymorphism.jpeg",
      cardId: 6,
    },
    {
      name: "Short Stack Overflow",
      skill: "ocean animal trivia",
      img: "/static/img/shortstack-overflow.jpeg",
      cardId: 7,
    },
    {
      name: "Merge",
      skill: "bullet journaling",
      img: "/static/img/merge.png",
      cardId: 8,
    },
  ];


function TradingCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.img} alt="image" />
      {/* <img src={props.img} alt="image"></img> */}
      <h2>Skill: {props.skill} </h2>
    </div>
  );
}

function TradingCardContainer() {

  const tradingCards = []; 

  for(const card of tradingCardData){
    tradingCards.push(<TradingCard name = {card.name} skill = {card.skill} img={card.img} ></TradingCard>);
  }
  return(
    <React.Fragment>
    {tradingCards}
  </React.Fragment>
  );

}
ReactDOM.render(<TradingCardContainer />, document.querySelector("#all-cards"));

