interface OptionsMenuProps {
    text: string,
    scrollToId?: string;
}

const OptionsMenu: React.FC<OptionsMenuProps> = ({ text, scrollToId }) => {
    const handleClick = () => {
        if (scrollToId) {
            const element = document.getElementById(scrollToId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    };
    
    return (
        <p className="font-semibold cursor-pointer" onClick={handleClick}>{text}</p>
    )
}

export default OptionsMenu