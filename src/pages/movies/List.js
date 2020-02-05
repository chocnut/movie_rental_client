import React from "react";
import { Table, Rating, Image } from "semantic-ui-react";

const getImageSrc = url => {
  return url
    ? url
    : "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/medium/tv-3264496829._CB470041855_.png";
};

const List = ({ movies }) => (
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
        ({ attributes: { posterUrl, title, releaseYear, rating } }) => (
          <Table.Row>
            <Table.Cell textAlign="center">
              <Image src={getImageSrc(posterUrl)} alt="poster" size="small" />
            </Table.Cell>
            <Table.Cell singleLine>{title}</Table.Cell>
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
export default List;
