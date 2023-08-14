export function Link(props) {
  const { text, openNewTab } = props;
  const address = "http://www.90minut.pl";
  const newTab = openNewTab ? "_blank" : "";
  const rel = openNewTab ? "noopener noreferrer" : "";

  return (
    <>
      <a href={address} target={newTab} rel={rel}>
        {text ? text : address}
      </a>
    </>
  );
}
