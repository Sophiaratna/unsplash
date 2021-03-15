import { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const fetchImage = () => {
    const accessKeyUnsplash =
      "6c446b49b72a4c559d9b9d67183d5c1de1981d16f309063c3b994086e6ce1a26";
    const baseUrlUnsplash = "https://api.unsplash.com";

    axios
      .get(
        `${baseUrlUnsplash}/photos/?client_id=${accessKeyUnsplash}&per_page=20&page=${page}`
      )
      .then((res) => {
        setImages([...images, ...res.data]);
        setPage((state) => state + 1);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <Container>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImage}
        hasMore={true}
        loader={Loader}
      >
        <Row>
          {images.map((img) => {
            return (
              <Col sm={4} key={img.id}>
                <Card
                  style={{
                    width: "20rem",
                    height: "30rem",
                  }}
                  className="mb-5"
                >
                  <Card.Img
                    variant="top"
                    src={img.urls.regular}
                    width="100%"
                    height="75%"
                    className="card-image"
                  />
                  <Card.Body>
                    <Card.Title
                      className="text-capitalize"
                      style={{ "font-size": "1rem" }}
                    >
                      {img.alt_description
                        ? img.alt_description
                        : img.description}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </InfiniteScroll>
    </Container>
  );
};

export default Gallery;
