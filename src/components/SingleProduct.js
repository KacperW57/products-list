import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import styled from "styled-components";
import axios from "axios";

const H2 = styled.h2`
  padding: 5px;
`;

const Para = styled.p`
  padding: 5px;
`;
export default function SingleProduct() {
  const [product, setProduct] = useState("");
  const params = useParams();
  axios
    .get(`https://reqres.in/api/products/${params.id}`)
    .then((res) => {
      setProduct(res.data.data);
    })
    .catch((err) => {
      alert(err);
    });

  return (
    <div
      className="SingleProductInfo"
      style={{ backgroundColor: `${product.color}` }}
    >
      <H2>Product info: </H2>
      <Para>Id: {product.id}</Para>
      <Para>Name: {product.name}</Para>
      <Para>Year: {product.year}</Para>
      <Para>Color: {product.color}</Para>
      <Para>Pantone_value: {product.pantone_value}</Para>

      <Link to="/page/1">Come back to the list</Link>
    </div>
  );
}
