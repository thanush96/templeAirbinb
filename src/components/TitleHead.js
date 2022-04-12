import React from "react";
import { useHistory } from "react-router-dom";

export default function TitleHead({ head }) {
  const history = useHistory();

  const route = (head) => {
    history.push({
      pathname: "/see-all",
      search: `?rout=${head}`,
      // state: { videoUrl: url, title: name, description: description },
    });
  };
  return (
    <div className="cardHeader">
      <h2 className="h2">{head}</h2>
      <div onClick={() => route(head)}>See more</div>
    </div>
  );
}
