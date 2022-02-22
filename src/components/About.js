import cow from "../images/about/cow.svg";

export default function About({ refProp }) {
    return (
        <div className="about" ref={refProp}>
            <div className="about__wrapper container">
                <div className="about__column">
                    <h1 className="title about__title">Platform Overview</h1>
                    <p className="about__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque
                        <br />
                        <br />
                        fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus
                        <br />
                        <br />
                        fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus
                    </p>
                </div>
                <img src={cow} alt="Cow" className="about__image" />
            </div>
        </div>
    )
}
