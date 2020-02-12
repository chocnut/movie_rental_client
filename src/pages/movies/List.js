import React, { useEffect, useState } from "react";
import { Table, Rating, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { fetchMovies } from "../../api/movies";

const getImageSrc = url => {
  return url
    ? url
    : "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/medium/tv-3264496829._CB470041855_.png";
};

const List = () => {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const { data } = await fetchMovies();
    setMovies(data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell></Table.HeaderCell>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Rating</Table.HeaderCell>
          <Table.HeaderCell>Release Year</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {movies.map(
          ({ attributes: { id, posterUrl, title, releaseYear, rating } }) => (
            <Table.Row>
              <Table.Cell textAlign="center">
                <Image src={getImageSrc(posterUrl)} alt="poster" size="small" />
              </Table.Cell>
              <Table.Cell singleLine>
                {<Link to={`/movies/${id}`}>{title}</Link>}
              </Table.Cell>
              <Table.Cell>
                <Rating icon="star" defaultRating={rating} maxRating={5} />
              </Table.Cell>
              <Table.Cell textAlign="right">{releaseYear}</Table.Cell>
            </Table.Row>
          )
        )}
      </Table.Body>
    </Table>
  );
};
export default List;
