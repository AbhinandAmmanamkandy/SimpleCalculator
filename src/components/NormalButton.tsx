interface ButtonProps {
    title: string,
    currentValue: number,
    setCurrentValue: Function
}

const Button = ({ title, currentValue, setCurrentValue }: ButtonProps) => {
    const handleClick = () => {
        setCurrentValue(currentValue + parseFloat(title))
    }

    return (
        <button onClick={handleClick} className="px-6 py-4 m-4 bg-white w-fit text-black">
            {title}
        </button>
    )
}

export default Button