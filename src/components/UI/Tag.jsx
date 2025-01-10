function Tag({ classe, children }) {
  let cssClass = classe ? `tag ${classe}` : "tag";
  return <div className={cssClass}>{children}</div>;
}

export default Tag;
