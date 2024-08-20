import './Card.scss';

function Card() {
    return <div className="grid grid-cols-1 card-container">
            <img className="image" src="https://www.terazmuzyka.pl/wp-content/uploads/news/ja/jacksparrow_1057.jpeg" alt=""/>
            <p className="name">Philip Johnson</p>
            <p className="title">Some developer</p>
            <p className="email">myEmail@gmail.com</p>
            <p className="phone">0974563455</p>
    </div>
}

export default Card;