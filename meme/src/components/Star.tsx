interface StarProp {
    tested: boolean;
    toggleFav: () => void;
}

export default function Star({tested, toggleFav}: StarProp) {
    const test = tested ? "My favorite" : "Not my favorite";
    return (
        <div>
            <p>{test}</p>
            <button onClick={toggleFav}>
                Toggle
            </button>
        </div>
        
    )
}