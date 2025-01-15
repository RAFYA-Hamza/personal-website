import Tag from "./UI/Tag";

function Experience({ image, name, date, title, children, classes }) {
  return (
    <div className={classes.experiences__card}>
      <div className={classes.experiences__header}>
        <div className={classes["experiences__header-content"]}>
          <div className={classes["experiences__header-image"]}>
            <img src={image} alt={title} />
          </div>

          <div className={classes["experiences__header-text"]}>
            <p className="body2 semi-bold">
              <i>{name}</i>
            </p>
            <Tag classe="subtitle semi-bold">
              <p>{title}</p>
            </Tag>
          </div>
        </div>

        <Tag>
          <p>{date}</p>
        </Tag>
      </div>
      <div className={classes.experiences__content}>{children}</div>
    </div>
  );
}

export default Experience;
