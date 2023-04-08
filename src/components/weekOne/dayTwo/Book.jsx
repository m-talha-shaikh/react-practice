export default function Book(){
    return (
        <section className="book">
            <Image />
            <Title />
            <Author />
        </section>
    )
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/81fyoFoaxlL._AC_UL600_SR600,400_.jpg" />
const Title = () => <h2>Dog Man</h2>;
const Author = () => <h4>Dav Pilkey</h4>;
