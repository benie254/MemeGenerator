interface CountProp{
    count: number;
}

export default function Count({count}: CountProp) {
    return (
        <div>
            <h1>The current count is {count}</h1>
        </div>
    )
}