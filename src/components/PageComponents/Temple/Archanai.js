import React, { useEffect, useState } from "react";
import { myFirestore } from "../../../firebase";
import { Card, JsonData, TitleHead } from "../../../GetComponents";
import temple1 from "../../../images/temple1.jpeg";
import temple2 from "../../../images/temple2.jpeg";
import temple3 from "../../../images/temple3.jpeg";
import temple4 from "../../../images/temple4.jpeg";
import temple5 from "../../../images/temple5.jpeg";

export default function Archanai() {
  const [data, setData] = useState([
    {
      id: 1,
      cardContent: {
        img: temple1,
        caption: "Entire homes",
      },

      cardFooter: {
        title: "Temple1",
      },
    },
    {
      id: 2,
      cardContent: {
        img: temple2,
        caption: "Unique stays",
      },
      cardFooter: {
        title: "Temple2",
      },
    },
    {
      id: 3,
      cardContent: {
        img: temple3,
        caption: "Farms and nature",
      },

      cardFooter: {
        title: "Temple3",
      },
    },
    {
      id: 4,
      cardContent: {
        img: temple4,
        caption: "Farms and nature",
      },

      cardFooter: {
        title: "Temple4",
      },
    },
    {
      id: 5,
      cardContent: {
        img: temple5,
        caption: "Farms and nature",
      },
      cardFooter: {
        title: "Temple5",
      },
    },
  ]);

  const getVideos = async () => {
    const details = [];
    await myFirestore
      .collection("aalayam")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const { title } = doc.data();
          details.push({
            key: doc.id,
            title,
          });
        });
        console.log("Archanai", details);
        // setData(details);
      });
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <section className="liveAnywhere">
      <TitleHead head="Aalayam" />
      <div className="cardsContainer MT3">
        {data.map((card) => {
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
}
