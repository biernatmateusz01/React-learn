export function PersonInfo({ person }) {
  const showImage = person.image ? <img src={person.image}></img> : null;
  return (
    <address>
      <div>
        <span>{person.name}</span>
        <span>{person.surname}</span>
        <a href={`mailto:${person.mail}`}>{person.mail}</a>
        {person.tel != "" && person.tel ? (
          <a href={`tel:${person.tel}`}>{person.tel}</a>
        ) : null}
        {showImage}
      </div>
    </address>
  );
}
