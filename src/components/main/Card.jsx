const Card = ({ date, desc, image, title, id }) => {
  return (
    <div className="cardStyle">
      <img src={image} alt={id} />
      <h1 className="title"> {title} </h1>
      <h6 className="date"> {date} </h6>
      <p className="desc"> {desc} </p>
    </div>
  );
};

export default Card;
