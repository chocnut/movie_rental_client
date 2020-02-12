import React, { useEffect, useState, useCallback } from "react";
import { fetchMovie } from "../../api/movies";
import { doRent } from "../../api/rentals";

import { Container, Header, Button } from "semantic-ui-react";

const Details = ({ match }) => {
  const [movie, setMovie] = useState(null);

  const getMovie = useCallback(async () => {
    const { data } = await fetchMovie(match.params.id);
    setMovie(data);
  }, [match]);

  const handleRent = e => {
    e.preventDefault();
    doRent(match.params.id);
  };

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <>
      <Container text>
        <Header as="h2">Movie Title: {movie && movie.attributes.title}</Header>
        <Button primary onClick={handleRent}>
          Rent
        </Button>
      </Container>
    </>
  );
};

export default Details;
