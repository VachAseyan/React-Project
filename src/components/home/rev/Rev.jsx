import styles from "./Rev.module.css";
import elipse1 from "../../../assets/logo/elipse1.png";
import elipse2 from "../../../assets/logo/elipse2.png";
import elipse3 from "../../../assets/logo/elipse3.png";
import elipse4 from "../../../assets/logo/elipse4.png";
import stars from "../../../assets/logo/stars.png";
import { Link } from "react-router-dom";

const Rev = () => {
    const Review = ({ image, name, date, text }) => (
        <div className={styles.person}>
            <Link to="">
                <img className={styles.elipse} src={image} alt="" />
            </Link>
            <Link to="">{name}</Link>
            <img src={stars} alt="" />
            <p>{date}</p>
            <p>{text}</p>
        </div>
    );

    const reviewData = [
        {
            image: elipse1,
            name: "ANNETTE BLACK",
            date: "7/27/13",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        },
        {
            image: elipse2,
            name: "LESIE ALEXANDER",
            date: "1/28/17",
            text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu",
        },
        {
            image: elipse3,
            name: "JEROME BELL",
            date: "10/6/13",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu",
        },
        {
            image: elipse4,
            name: "JACOBE JONES",
            date: "5/30/14",
            text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma",
        },
    ];
    return (
        <div className={styles.rev}>
            <a href="">REVIEWS</a>
            <div className={styles.people}>
                {reviewData.map((review, index) => {
                    return (
                        <Review
                            key={index}
                            image={review.image}
                            name={review.name}
                            date={review.date}
                            text={review.text}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default Rev;