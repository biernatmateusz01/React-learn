import { Article } from "./Article";

export function Reviews({ reviews }) {
  const reviewsElement = reviews
    ? reviews.map((r) => <Article key={r.id} author={r.author} text={r.text} />)
    : "";
  return <ul>{reviewsElement}</ul>;
}
