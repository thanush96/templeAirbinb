import React from "react";
import "./LiveAnywhere.css";
import { Card, JsonData } from "../GetComponents";

const LiveAnywhere = ({ path }) => {
  return (
    <>
      {JsonData.map((services) => {
        if (services.category == path) {
          return services.subCategory.map((subServices) => {
            return (
              <section className="liveAnywhere">
                <div className="cardHeader">
                  <h2 className="h2">{subServices.name}</h2>
                  <div>See more</div>
                </div>

                <div className="cardsContainer MT3">
                  {subServices.temples.map((card) => {
                    const { id, cardHeader, cardContent, cardFooter } = card;
                    return (
                      <Card
                        key={id}
                        cardHeaderContent={cardHeader}
                        cardContent={cardContent}
                        cardFooterContent={cardFooter}
                      />
                    );
                  })}
                </div>
              </section>
            );
          });
        }
      })}
    </>
  );
};

export default LiveAnywhere;
