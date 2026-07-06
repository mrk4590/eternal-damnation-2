

const Button = ({onClick, children}) => {
    return (
        <button type="button" onClick={handleClick}> 
            {children}
        </button>
    );
};

// const App = () => {
//     const [isOpen, setOpen] = React.useState(false);

//     const handleClick = () => {
//         setOpen(!isOpen);
//     };

//     };

export default Button;