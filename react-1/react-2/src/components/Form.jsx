import { useState } from "react";
import { Reviews } from "./Reviews";

export function Form(onReviewSubmit) {
  const [inputValue, setInputValue] = useState("Filip");
  const [textareaValue, setTextareaValue] = useState(
    "Lorem ipsum dolor, sit amet."
  );

  function handleSubmit(event) {
    event.preventDefault();

    const author = inputValue;
    const text = textareaValue;

    onReviewSubmit(author, text);

    setInputValue(""), setTextareaValue("");
  }

  return (
    <div>
      <hr />

      <Reviews />
      <h2>Dodaj recenzję</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={(event) => {
              setInputValue(event.target.value.trim());
            }}
            value={inputValue}
            type="text"
            id="name"
            name="author"
          />
        </div>
        <div>
          <label htmlFor="text"></label>
          <textarea
            onChange={(event) => {
              setTextareaValue(event.target.value.trim());
            }}
            value={textareaValue}
            name="text"
            id="text"
          ></textarea>
        </div>
        {inputValue != "" && textareaValue != "" ? (
          <button type="submit">Submit</button>
        ) : null}
      </form>
    </div>
  );
}
