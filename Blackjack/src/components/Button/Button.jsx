export default function Button(props) {
  return (
    <div>
      <button onClick={props.onClick} text={props.text} className="btn">{props.text}</button>
    </div>
  )
}
