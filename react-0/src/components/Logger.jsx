export function Logger(props) {
    const date =  new Date();
    console.log(`component created at ${date.getHours()}: ${date.getMinutes()}`)
  return <>{props.children}</>;
}
