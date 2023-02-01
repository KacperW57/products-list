import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import styled from "styled-components";
import axios from "axios";
import ArrowUp from "./ArrowUp.png";

const Table = styled.table``;
const Tr = styled.tr`
  padding: 10px;
`;
const Td = styled.td`
  padding: 10px;
`;
const Th = styled.th`
  padding: 10px;
`;

const ArrowPrevious = styled.img`
  width: 3vw;
  margin: 2vw;
  transform: rotate(0.75turn);
`;
const ArrowNext = styled.img`
  width: 3vw;
  margin: 2vw;
  transform: rotate(0.25turn);
`;

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState("");
  const params = useParams();
  useEffect(() => {
    setPage(params.page);
  }, [params.page]);
  console.log(params.page);
  axios
    .get(`https://reqres.in/api/products?per_page=5&page=${page}`)
    .then((res) => {
      setProducts(res.data.data);
    })
    .catch((err) => {
      alert(err);
    });

  const productsTable = products.map((product) => {
    return (
      <Tr key={product.id} style={{ backgroundColor: `${product.color}` }}>
        <Td>{product.id}</Td>
        <Td>{product.name}</Td>
        <Td>{product.year}</Td>
      </Tr>
    );
  });
  if (params.page === "1") {
    return (
      <div>
        <Table>
          <thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Year</Th>
            </Tr>
          </thead>
          <tbody>{productsTable}</tbody>
        </Table>

        <Link to={`/page/3`}>
          <ArrowPrevious src={ArrowUp}></ArrowPrevious>
        </Link>
        <Link to={`/page/2`}>
          <ArrowNext src={ArrowUp}></ArrowNext>
        </Link>
      </div>
    );
  } else if (params.page === "2") {
    return (
      <div>
        <Table>
          <thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Year</Th>
            </Tr>
          </thead>
          <tbody>{productsTable}</tbody>
        </Table>

        <Link to={`/page/1`}>
          <ArrowPrevious src={ArrowUp}></ArrowPrevious>
        </Link>
        <Link to={`/page/3`}>
          <ArrowNext src={ArrowUp}></ArrowNext>
        </Link>
      </div>
    );
  } else if (params.page === "3") {
    return (
      <div>
        <Table>
          <thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Year</Th>
            </Tr>
          </thead>
          <tbody>{productsTable}</tbody>
        </Table>

        <Link to={`/page/2`}>
          <ArrowPrevious src={ArrowUp}></ArrowPrevious>
        </Link>
        <Link to={`/page/1`}>
          <ArrowNext src={ArrowUp}></ArrowNext>
        </Link>
      </div>
    );
  } else if (params.page !== "1" || params.page !== 2 || params.page !== 3) {
    return <h2>There are only 3 pages on the products list!</h2>;
  }
}
