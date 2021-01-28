import React, { Component } from 'react'
import MetaDecorator from '../MetaDecorator/MetaDecorator';
import styled from "styled-components";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
                {[1,2,3,4,5,6,7,8,9,10].map(element => (
                <CoachDiv>
                    <Img src={"https://via.placeholder.com/400x250.png?text="+ element} alt=""/>
                    <TextDiv>
                        <h2>Name Lastname</h2>
                        <p><strong>Role, another role, also role</strong></p>
                        <p>Bacon ipsum dolor amet short loin short ribs strip steak, bresaola turducken shankle chuck andouille picanha pork loin kevin. Meatball ground round beef ribs drumstick. Swine short loin beef ribs, bacon biltong burgdoggen</p>
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