import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import axios from "axios";
import { uri } from "../constant";

const MyCarousel = () => {
  const [supplements, setSupplements] = useState([]);
  const [equipments, setEquipments] = useState([]);
  const [apparels, setApparels] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${uri}Productget`);
        const filteredsupplements = response.data.filter(
          (product) => product.category === "Supplements"
        );
        setSupplements(filteredsupplements);

        const filteredequipments = response.data.filter(
          (product) => product.category === "Equipments"
        );
        setEquipments(filteredequipments);

        const filterapparels = response.data.filter(
          (product) => product.category === "Apparels"
        );
        setApparels(filterapparels);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  const handleImageClick = (link) => {
    window.open(link, "_blank");
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <h1 style={{ fontSize: '2rem', marginLeft: '4%' }}>Health Supplements</h1>
      <Carousel
        arrows={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={"desktop"}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {supplements.length > 0 && supplements.map((supplements) => (
          <StyledItem key={supplements._id}>
            <img
              className="Carousel_img"
              src={supplements.image}
            />
            <br />
            <div className="description">
              <h3 style={{ marginBottom: '0.8vh' }}>{supplements.name}</h3>
              <p>{supplements.description}</p>
              <br />
              <span className="rupee">
                ₹<span className="price">{supplements.price}</span>
              </span>
              <button
                onClick={() => handleImageClick(supplements.link)}
                className="order"
              >
                Order on Flipkart
              </button>
            </div>
          </StyledItem>
        ))}
      </Carousel>
      <h1 style={{ fontSize: '2rem', marginLeft: '4%', marginTop: '10vh' }}>Equipments</h1>
      <Carousel
        arrows={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={"desktop"}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {equipments.length > 0 && equipments.map((equipments) => (
          <StyledItem key={equipments._id}>
            <img
              className="Carousel_img"
              src={equipments.image}
            />
            <br />
            <div className="description">
              <h3 style={{ marginBottom: '0.8vh' }}>{equipments.name}</h3>
              <p>{equipments.description}</p>
              <br />
              <span className="rupee">
                ₹<span className="price">{equipments.price}</span>
              </span>
              <button
                onClick={() => handleImageClick(equipments.link)}
                className="order"
              >
                Order on Flipkart
              </button>
            </div>
          </StyledItem>
        ))}
      </Carousel>
      <h1 style={{ fontSize: '2rem', marginLeft: '4%', marginTop: '10vh' }}>Apparels</h1>
      <Carousel
        arrows={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={"desktop"}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {apparels.length > 0 && apparels.map((apparels) => (
          <StyledItem key={apparels._id}>
            <img
              className="Carousel_img"
              src={apparels.image}
            />
            <br />
            <div className="description">
              <h3 style={{ marginBottom: '0.8vh' }}>{apparels.name}</h3>
              <p>{apparels.description}</p>
              <br />
              <span className="rupee">
                ₹<span className="price">{apparels.price}</span>
              </span>
              <button
                onClick={() => handleImageClick(apparels.link)}
                className="order"
              >
                Order on Flipkart
              </button>
            </div>
          </StyledItem>
        ))}
      </Carousel>
    </>
  );
};

const StyledItem = styled.div`
  width: 75%;
  height: 68vh;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  margin-left: 1vw !important;
  margin-right: 1vw !important;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .Carousel_img {
    width: 100%;
    aspect-ratio: 3.5/2;
    object-fit: contain;
  }

  .price {
    font-size: 1.5rem;
    vertical-align: sub;
  }

  .description {
    width: 90%;
    text-align: justify;
  }

  .order {
    width: 40%;
    height: 5vh;
    display: inline-block;
    margin-left: 5%;
    background-color: #cc3d00;
    border: #cc3d00;
    color: white;
    border-radius: 5px;
  }
`;

export default MyCarousel;
