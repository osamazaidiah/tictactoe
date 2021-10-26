export default function Popup({
  child = "",
  isVisible = false,
  setVisibility = (f) => f
}) {
  return isVisible ? (
    <div onClick={() => setVisibility(false)} className="ModalViewContainer">
      <div className="ModalViewComponent">{child}</div>
    </div>
  ) : (
    ""
  );
}
