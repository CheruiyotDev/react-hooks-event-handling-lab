import React from "react";

function handleOnFocus() {
  console.log("Good!");
}
function handleOnBlur() {
  console.log('Hey! Eyes on me!');
}
export default function EyesOnMe() {
  return (
    <div>
      <button onFocus={handleOnFocus} onBlur={handleOnBlur}>Eyes on me</button>
    </div>
  )
}