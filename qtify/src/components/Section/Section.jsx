import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

function Section({ title, endpoint, type }) {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios.get(endpoint).then((res) => setData(res.data));
  }, [endpoint]);

  const renderCard = (item) => (
    <Card key={item.id} data={item} type={type} />
  );

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>

        {type !== "songs" && (
          <button
            className={styles.toggle}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Collapse" : "Show All"}
          </button>
        )}
      </div>

      {type === "songs" || !showAll ? (
        <Carousel data={data} renderCard={renderCard} />
      ) : (
        <div className={styles.grid}>
          {data.map((item) => renderCard(item))}
        </div>
      )}
    </div>
  );
}

export default Section;