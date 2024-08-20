import './Preview.scss';
import Button from "../button/Button.tsx";
import {Color} from "../../utils/types.ts";

function Preview() {
    return <section className="preview">
        <div className="preview__content">
            <h1>Test assignment for front-end developer</h1>
            <p>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast
                understanding of User design thinking as they'll be building web interfaces with accessibility in mind.
                They
                should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
            <Button colorClass={Color.primary} text="Sign Up"></Button>
        </div>
    </section>
}

export default Preview;