import imgPath from './LoginBand_crop.jpg';

export default function Profile(props) {
    return (
        <div>
            <h2>{props.curUser}'s Profile Page</h2>
            <br />
            <img src={imgPath} />
            <br />
            <p>add paragraph text here</p>
        </div>
    );
}