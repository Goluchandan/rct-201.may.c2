export const Input = ({
  type,
  size,
  variant,
  rightLogo,
  rightLogoOnClick,
  onChange,
}) => {
  return (
    <div className="inputContainer">
      {/* Add Right Logo */}
      <input
        className={`input`}
        type={type}
        size={size}
        variant={variant}
        onchange={onChange}
        style={{ position: "absolute" }}
      />
      <img
        src={rightLogo}
        width="17px"
        alt=""
        onClick={rightLogoOnClick}
        style={{ position: "relative", marginLeft: "11.5%" }}
      />
    </div>
  );
};
