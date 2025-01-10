function Tag({ classe, children }) {
  console.log(classe);
  let cssClass = classe ? `tag ${classe}` : "tag";
  return <div className={cssClass}>{children}</div>;
}

export default Tag;
