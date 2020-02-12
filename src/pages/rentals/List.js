import React, { useEffect, useState } from "react";
import { Table, Rating, Image } from "semantic-ui-react";
import { fetchRentals } from "../../api/rentals";

const getImageSrc = url => {
  return url
    ? url
    : "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/medium/tv-3264496829._CB470041855_.png";
};

const List = () => {
  const [rentals, setRentals] = useState([]);
  const getRentals = async () => {
    const { included } = await fetchRentals();
    setRentals(included);
  };

  useEffect(() => {
    getRentals();
  }, []);

  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Rating</Table.HeaderCell>
          <Table.HeaderCell>Release Year</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {rentals &&
          rentals.map(
            ({ attributes: { posterUrl, title, releaseYear, rating } }) => (
              <Table.Row>
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
};
export default List;
