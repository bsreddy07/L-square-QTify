import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";

function Card({ data, type }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={data.image} alt={data.title} />
      </div>

      <div className={styles.bottom}>
        <Chip
          label={
            type === "songs"
              ? `${data.likes} Likes`
              : `${data.follows} Follows`
          }
          size="small"
          className={styles.chip}
        />

        <p className={styles.title}>{data.title}</p>
      </div>
    </div>
  );
}

export default Card;