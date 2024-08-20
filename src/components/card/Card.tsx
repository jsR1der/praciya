import './Card.scss';
import Image from '../image/Image'

function Card() {
    return <div className="grid grid-cols-1 card-grid">
            <Image url="https://www.terazmuzyka.pl/wp-content/uploads/news/ja/jacksparrow_1057.jpeg"></Image>
            <p className="truncate w-full text-center name">Philip JohnsonPhilip JohnsonPhilip JohnsonPhilip JohnsonPhilip JohnsonPhilip JohnsonPhilip JohnsonPhilip JohnsonPhilip JohnsonPhilip JohnsonPhilip JohnsonPhilip JohnsonPhilip JohnsonPhilip JohnsonPhilip JohnsonPhilip JohnsonPhilip Johnson</p>
            <p className="truncate w-full text-center title">Some developer</p>
            <p className="truncate w-full text-center email">myEmail@gmail.com</p>
            <p className="truncate w-full text-center phone">0974563455</p>
    </div>
}

export default Card;