import './Image.scss';

export const RoundedImage = (props: { url: string }) => {
    return <img className="image" src={props.url} alt="user_photo"/>
}
