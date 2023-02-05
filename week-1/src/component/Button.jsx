
const Button = ({btnClickHandler, children}) => {
    return (
      <button onClick={btnClickHandler}> {children} </button>
    );
};

export default Button;