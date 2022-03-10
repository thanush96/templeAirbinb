import React from "react";
import "./Banner.css";
import { Button } from "../GetComponents";
import SmallCard from "../components/subComponents/SmallCard";
import { useHistory } from "react-router-dom";

const data = [
  {
    id: 1,
    cardHeader: false,
    cardContent: {
      img: "https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=320",
      caption: "Entire homes",
    },

    cardFooter: {
      title: "Entire homes",
    },
  },
  {
    id: 2,
    cardHeader: false,
    cardContent: {
      img: "https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=320",
      caption: "Unique stays",
    },

    cardFooter: {
      title: "Unique stays",
    },
  },
  {
    id: 3,
    cardHeader: false,
    cardContent: {
      img: "https://a0.muscache.com/im/pictures/7f254627-3922-4880-b8fa-545b8551117e.jpg?im_w=320",
      caption: "Farms and nature",
    },

    cardFooter: {
      title: "Farms and nature",
    },
  },

  {
    id: 3,
    cardHeader: false,
    cardContent: {
      img: "https://a0.muscache.com/im/pictures/7f254627-3922-4880-b8fa-545b8551117e.jpg?im_w=320",
      caption: "Farms and nature",
    },

    cardFooter: {
      title: "Farms and nature",
    },
  },
  {
    id: 3,
    cardHeader: false,
    cardContent: {
      img: "https://a0.muscache.com/im/pictures/7f254627-3922-4880-b8fa-545b8551117e.jpg?im_w=320",
      caption: "Farms and nature",
    },

    cardFooter: {
      title: "Farms and nature",
    },
  },
  {
    id: 3,
    cardHeader: false,
    cardContent: {
      img: "https://a0.muscache.com/im/pictures/7f254627-3922-4880-b8fa-545b8551117e.jpg?im_w=320",
      caption: "Farms and nature",
    },

    cardFooter: {
      title: "Farms and nature",
    },
  },
];

function Banner() {
  const history = useHistory();
  return (
    <div className="banner">
      <div className="bannerInfo">
        <h1 className="MT1 h1">The Greatest Devotional</h1>
        <p className="MT1 MB3 subtitle textWhite">
          Wishlists curated by Aalayam.
        </p>
        <Button
          className="btn btnBlack"
          onClick={() => history.push("/search")}
        >
          Get inspired
        </Button>
      </div>
      {/* {data.map((card) => {
        const { id, cardHeader, cardContent, cardFooter } = card;
        return (
          <Card
            key={id}
            cardHeaderContent={cardHeader}
            cardContent={cardContent}
            cardFooterContent={cardFooter}
          />
        );
      })} */}

      {/* <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <SmallCard title="AALAYAM" Text1="Discription" />
          <SmallCard title="JOTHIDAM" Text1="Discription" />
          <SmallCard title="KADAIVEETHI" Text1="Discription" />
        </div>
      </div> */}
    </div>
  );
}

export default Banner;
