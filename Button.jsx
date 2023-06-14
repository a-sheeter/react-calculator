export function Button({ className, onClick, value }) {
    return <button className={className} onClick={onClick} value={value}>{value}</button>
}