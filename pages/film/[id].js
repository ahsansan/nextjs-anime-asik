import { API } from "../../config/api";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container } from "react-bootstrap";
import { convertToRupiah } from "../../utils/convertToRupiah";
import styles from "./Detail.module.css";

const DetailFilm = ({ film }) => {
  return (
    <div style={{ backgroundColor: "rgba(0, 0, 0, 0.823)" }}>
      <Head>
        <title>{film.title} - Anime Asik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Container className="mt-5">
        <div className={styles.ContainerIsiDetail}>
          <div className={styles.IsiDetail}>
            <img
              src={`${film.tumbnail}`}
              alt={`${film.title}`}
              className={styles.TumbnailFilmDetail}
            />
          </div>
          <div className={styles.IsiDetail}>
            <div className={styles.DetailJudulHarga}>
              <h1 className={styles.JudulFilmDetail}>{film.title}</h1>
              <button className={styles.ButtonBuyFilm}>Buy Now</button>
            </div>
            <iframe
              src={film.filmUrl}
              title={film.title}
              frameBorder="0"
              width={550}
              height={300}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className={styles.GenrePriceDesk}>
              <h4 className={styles.DetailGenre}>{film.category.name}</h4>
              <p className={styles.DetailHarga}>
                {convertToRupiah(film.price)}
              </p>
              <p className={styles.DetailDesk}>{film.description}</p>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { id } = params;
  const res = await API.get(`/film/${id}`);

  return {
    props: { film: res.data.data.film },
  };
};

export default DetailFilm;
