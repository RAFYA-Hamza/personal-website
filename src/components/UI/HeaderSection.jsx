import Tag from "../UI/Tag";

function HeaderSection({ title, description }) {
  return (
    <>
      <Tag>
        <p className="body3 medium">{title}</p>
      </Tag>

      <span>
        <p className="subtitle normal">{description}</p>
      </span>
    </>
  );
}

export default HeaderSection;
