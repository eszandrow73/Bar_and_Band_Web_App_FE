export default function Account(props) {
    return (
        <div>
            <h2>Account Details for {props.curUser}</h2>
            <br />
            <h2>Account Email : {props.curEmail}</h2>
        </div>
    );
}