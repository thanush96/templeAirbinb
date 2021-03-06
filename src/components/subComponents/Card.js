import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Card({ cardHeaderContent, cardFooterContent, cardContent }) {
  const { img, caption } = cardContent;
  const history = useHistory();

  const route = (title) => {
    history.push({
      pathname: "/checkout",
      search: `?title=${title}`,
      // state: { videoUrl: url, title: name, description: description },
    });
  };

  return (
    <article className="card">
      {cardHeaderContent && <CardHeader cardHeaderContent={false} />}
      <div
        className="cardContent"
        onClick={() => route(cardFooterContent.title)}
      >
        {/* <Link to="/checkout"> */}
        <img
          className="image"
          src={`${img && img}`}
          alt={`${caption && caption}`}
          title={`${caption && caption}`}
        />
        {/* </Link> */}
      </div>
      {cardFooterContent && (
        <CardFooter cardFooterContent={cardFooterContent} />
      )}
    </article>
  );
}
function CardHeader({ cardHeaderContent }) {
  return (
    <div className="cardHeader">
      <h2>Cards header</h2>
    </div>
  );
}
function CardFooter({ cardFooterContent }) {
  const { title, subtitle } = cardFooterContent;
  return (
    <div className="cardFooter">
      <p className="cardFooterTitle">{title && title}</p>
      <p className="cardFooterSubtitle">{subtitle && subtitle}</p>
    </div>
  );
}

export default Card;
