import './Image.scss';

function Image(props: {url: string}) {
    return <img className="image" src={props.url} alt="user_photo"/>
}

export default Image;