import { API } from "../config/api";
import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { convertToRupiah } from "../utils/convertToRupiah";

const Home = ({ films }) => {
  const randIndex = Math.floor(Math.random() * films.length);

  return (
    <div style={{ backgroundColor: "rgba(0, 0, 0, 0.823)" }}>
      <Head>
        <title>Anime Asik build with Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="container-utama" data-aos="fade-right">
        {films.length && (
          <Container className="container-highlight">
            <div
              className="mt-5 highlight-film"
              style={{
                backgroundImage: `url(${films[randIndex].tumbnail})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h1 className="judul-film-highlight">{films[randIndex].title}</h1>
              <div className="mt-3">
                <p className="kategori-film-highlight">
                  {films[randIndex].category.name}
                </p>
              </div>
              <div className="harga-film-highlight">
                {convertToRupiah(films[randIndex].price)}
              </div>
              <p className="deskripsi-film-highlight">
                {films[randIndex].description}
              </p>
              <p>
                <Link href={`/film/${films[randIndex].id}`}>
                  <button className="button-buy-highlight">Buy Now</button>
                </Link>
              </p>
            </div>
          </Container>
        )}
      </div>
      <div className="mt-5 container-list-film" data-aos="fade-left">
        <h2 className="mb-4" style={{ color: "white" }}>
          List Film
        </h2>
        <Row>
          {films.map((film) => (
            <Col key={film.id} md={2} className="list-film">
              <Link href={`/film/${film.id}`}>
                <img
                  className="pointer"
                  src={`${film.tumbnail}`}
                  alt={film.title}
                />
              </Link>
            </Col>
          ))}
        </Row>
      </div>

      <Footer />
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await API.get("/films");

  return {
    props: { films: res.data.data.film },
  };
};

export default Home;
