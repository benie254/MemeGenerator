interface HeaderProps {
    user: string;
}

export default function Header({user}: HeaderProps) {
    return (
        <div>
            <p>Current user: {user}</p>
        </div>
    )
}