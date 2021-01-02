import "./backdrop.css";

const backdrop = (props) => {
  return props.show ? (
    <div className="backdrop" onClick={props.fechaBackdrop}></div>
  ) : null;
};

export default backdrop;
