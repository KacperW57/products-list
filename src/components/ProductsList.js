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
  &:hover {
    transform: rotate(0.75turn) scale(1.2);
  }
  &:active {
    transform: rotate(0.25turn) scale(0.8);
  }
`;
const ArrowNext = styled.img`
  width: 3vw;
  margin: 2vw;
  transform: rotate(0.25turn);
  &:hover {
    transform: rotate(0.25turn) scale(1.2);
  }
  &:active {
    transform: rotate(0.25turn) scale(0.8);
  }
`;

export default function ProductsList(props) {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [page, setPage] = useState("");
  const params = useParams();
  useEffect(() => {
    setPage(params.page);
  }, [params.page]);

  if (!props.filter) {
    axios
      .get(`https://reqres.in/api/products?per_page=5&page=${page}`)
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {
        alert(err);
      });
  } else if (props.filter) {
    axios
      .get(`https://reqres.in/api/products/${props.filter}`)
      .then((res) => {
        setProduct(res.data.data);
      })
      .catch((err) => {
        props.removeFilter();
        alert(`${err}. There are only 12 items in the list!`);
      });
  }

  const productsTable = products.map((product) => {
    return (
      <Tr key={product.id} style={{ backgroundColor: `${product.color}` }}>
        <Td>
          <Link to={`/product/${product.id}`}>{product.id}</Link>
        </Td>

        <Td>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </Td>

        <Td>
          <Link to={`/product/${product.id}`}>{product.year}</Link>
        </Td>
      </Tr>
    );
  });
  if (!props.filter) {
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
  } else if (props.filter) {
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
          <tbody>
            <Tr style={{ backgroundColor: `${product.color}` }}>
              <Td>
                <Link to={`/product/${product.id}`}>{product.id}</Link>
              </Td>
              <Td>
                <Link to={`/product/${product.id}`}>{product.name}</Link>
              </Td>
              <Td>
                <Link to={`/product/${product.id}`}>{product.year}</Link>
              </Td>
            </Tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
