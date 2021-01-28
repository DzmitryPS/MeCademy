import React, { Component } from 'react'
import MetaDecorator from '../MetaDecorator/MetaDecorator';
import styled from "styled-components";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const coachesData = [
    {
        name : "Anna Hebbeln",
        title : "Title and title and also title",
        text : "Bacon ipsum dolor amet short loin short ribs strip steak, bresaola turducken shankle chuck andouille picanha pork loin kevin. Meatball ground round beef ribs drumstick. Swine short loin beef ribs, bacon biltong burgdoggen",
        image : "/images/Anna Hebbeln.jpeg"
    },
    {
        name : "Bärbel Engelmann",
        title : "Title and title and also title",
        text : "Bacon ipsum dolor amet short loin short ribs strip steak, bresaola turducken shankle chuck andouille picanha pork loin kevin. Meatball ground round beef ribs drumstick. Swine short loin beef ribs, bacon biltong burgdoggen",
        image: "/images/Bärbel Engelmann.jpeg"
    },
    {
        name : "Birgit Nüchter",
        title : "Title and title and also title",
        text : "Bacon ipsum dolor amet short loin short ribs strip steak, bresaola turducken shankle chuck andouille picanha pork loin kevin. Meatball ground round beef ribs drumstick. Swine short loin beef ribs, bacon biltong burgdoggen",
        image: "/images/Birgit Nüchter.jpeg"
    },
    {
        name : "Christina Richter I",
        title : "Title and title and also title",
        text : "Bacon ipsum dolor amet short loin short ribs strip steak, bresaola turducken shankle chuck andouille picanha pork loin kevin. Meatball ground round beef ribs drumstick. Swine short loin beef ribs, bacon biltong burgdoggen",
        image : "/images/Christina Richter I.jpg"
    },
    {
        name : "Claudia Reinhardt",
        title : "Title and title and also title",
        text : "Bacon ipsum dolor amet short loin short ribs strip steak, bresaola turducken shankle chuck andouille picanha pork loin kevin. Meatball ground round beef ribs drumstick. Swine short loin beef ribs, bacon biltong burgdoggen",
        image: "/images/Claudia Reinhardt.jpeg"
    },
    {
        name : "Claudia Schmidtke",
        title : "Title and title and also title",
        text : "Bacon ipsum dolor amet short loin short ribs strip steak, bresaola turducken shankle chuck andouille picanha pork loin kevin. Meatball ground round beef ribs drumstick. Swine short loin beef ribs, bacon biltong burgdoggen",
        image: "/images/Claudia Schmidtke.jpeg"
    },
    {
        name : "Cornelia Lütge",
        title : "Title and title and also title",
        text : "Bacon ipsum dolor amet short loin short ribs strip steak, bresaola turducken shankle chuck andouille picanha pork loin kevin. Meatball ground round beef ribs drumstick. Swine short loin beef ribs, bacon biltong burgdoggen",
        image : "/images/Cornelia Lütge.jpeg"
    },
    {
        name : "Dr. Anja Schäfer",
        title : "Title and title and also title",
        text : "Bacon ipsum dolor amet short loin short ribs strip steak, bresaola turducken shankle chuck andouille picanha pork loin kevin. Meatball ground round beef ribs drumstick. Swine short loin beef ribs, bacon biltong burgdoggen",
        image: "/images/Dr. Anja Schäfer.jpeg"
    },
    {
        name : "Dr. Anna Perlina",
        title : "Title and title and also title",
        text : "Bacon ipsum dolor amet short loin short ribs strip steak, bresaola turducken shankle chuck andouille picanha pork loin kevin. Meatball ground round beef ribs drumstick. Swine short loin beef ribs, bacon biltong burgdoggen",
        image: "/images/Dr. Anna Perlina.jpeg"
    },
    {
        name : "Dr. Christine von der Heide",
        title : "Title and title and also title",
        text : "Bacon ipsum dolor amet short loin short ribs strip steak, bresaola turducken shankle chuck andouille picanha pork loin kevin. Meatball ground round beef ribs drumstick. Swine short loin beef ribs, bacon biltong burgdoggen",
        image: "/images/Dr. Christine von der Heide.jpeg"
    },
    {
        name : "Dr. Sabrina Hense",
        title : "Title and title and also title",
        text : "Bacon ipsum dolor amet short loin short ribs strip steak, bresaola turducken shankle chuck andouille picanha pork loin kevin. Meatball ground round beef ribs drumstick. Swine short loin beef ribs, bacon biltong burgdoggen",
        image : "/images/Dr. Sabrina Hense.jpeg"
    },
    {
        name : "Dr. Sanaz von Elsner",
        title : "Title and title and also title",
        text : "Bacon ipsum dolor amet short loin short ribs strip steak, bresaola turducken shankle chuck andouille picanha pork loin kevin. Meatball ground round beef ribs drumstick. Swine short loin beef ribs, bacon biltong burgdoggen",
        image: "/images/Dr. Sanaz von Elsner.jpeg"
    },
    {
        name : "Gabriela Scheinberger",
        title : "Title and title and also title",
        text : "Bacon ipsum dolor amet short loin short ribs strip steak, bresaola turducken shankle chuck andouille picanha pork loin kevin. Meatball ground round beef ribs drumstick. Swine short loin beef ribs, bacon biltong burgdoggen",
        image: "/images/Gabriela Scheinberger.jpeg"
    },
    {
        name : "Jana Jablonsky",
        title : "Title and title and also title",
        text : "Bacon ipsum dolor amet short loin short ribs strip steak, bresaola turducken shankle chuck andouille picanha pork loin kevin. Meatball ground round beef ribs drumstick. Swine short loin beef ribs, bacon biltong burgdoggen",
        image : "/images/Jana Jablonsky.jpeg"
    },
    {
        name : "Jules Grant",
        title : "Title and title and also title",
        text : "Bacon ipsum dolor amet short loin short ribs strip steak, bresaola turducken shankle chuck andouille picanha pork loin kevin. Meatball ground round beef ribs drumstick. Swine short loin beef ribs, bacon biltong burgdoggen",
        image: "/images/Jules Grant.jpeg"
    },
    {
        name : "Martin Friedrich",
        title : "Title and title and also title",
        text : "Bacon ipsum dolor amet short loin short ribs strip steak, bresaola turducken shankle chuck andouille picanha pork loin kevin. Meatball ground round beef ribs drumstick. Swine short loin beef ribs, bacon biltong burgdoggen",
        image: "/images/Martin Friedrich.jpeg"
    },
    {
        name : "Susanne Schulz",
        title : "Title and title and also title",
        text : "Bacon ipsum dolor amet short loin short ribs strip steak, bresaola turducken shankle chuck andouille picanha pork loin kevin. Meatball ground round beef ribs drumstick. Swine short loin beef ribs, bacon biltong burgdoggen",
        image: "/images/Susanne Schulz.jpeg"
    }
]

const CoachDiv = styled.div`
    padding-top : 20px;
    margin-left : 10px;
    margin-right : 10px;
`
const CarouselDiv = styled.div`
    height : 500px;
`
const TextDiv = styled.div`
    width : 80%;
    margin-left : auto;
    margin-right : auto;
    margin-bottom : 5%;
    text-align : center;
`

const Img = styled.img`
    margin-bottom : 5%;
    width : 100%
`

class SlickCarousel extends Component {
    render() {
        const settings = {
                dots: true,
                focusOnSelect: true,
                lazyLoad: true,
                className: "center",
                centerMode: true,
                infinite: true,
                centerPadding: "100px", //controls how much of the next and prev slides are visible
                speed: 500,
                swipeToSlide: true,
                slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
            ]
        };
        return (
          <div>
            <Slider {...settings}>
                {coachesData.map((coach, index) => (
                <CoachDiv key={index}>
                    <Img src={coach.image} alt=""/>
                    <TextDiv>
                        <h2>{coach.name}</h2>
                        <p><strong>{coach.title}</strong></p>
                        <p>{coach.text}</p>
                    </TextDiv>   
                </CoachDiv>
                ))}
                
            </Slider>
          </div>
        );
      }
    }


const Coaches = () => {
    return (
        <div>
            <MetaDecorator
                description='Here is Coaches Page'
                title='My Coaches Page'
            />
            <CarouselDiv>
                <SlickCarousel />
            </CarouselDiv>
            
            
        </div>
    )
}

export default Coaches;

//https://github.com/nfl/react-helmet/issues/548