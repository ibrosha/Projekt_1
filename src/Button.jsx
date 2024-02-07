const Button = (props) => {
  return (
    <button
      className={
        "px-6 inline-block py-2 rounded-lg  items-center text-white bg-[#32AD67] font-semibold"
      }
    >
      {props.children}
    </button>
  );
};

export default Button;
