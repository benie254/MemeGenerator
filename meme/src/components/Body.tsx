interface BodyProps {
    user: string;
}
export default function Body({user}: BodyProps) {
    return (
        <div>
            <p>Welcome back, {user}</p>
        </div>
    )
}