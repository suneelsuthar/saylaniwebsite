import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import img1 from '../../Images/slider1.jpg'
import img2 from '../../Images/slider2.jpg'


const CarouselPage = () => {
  return (
    
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
        slide
        style={{marginTop:"3px"}}
      >
        <MDBCarouselInner >
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src='https://www.saylaniwelfare.com/public_html/images/saylani/ehsaas&saylani.jpeg'
                alt="First slide"
                style={{height: '350px'}}
                id='img-height'
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                style={{height: '350px'}}
                id='img-height'
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={img1}
                alt="Third slide"
                id='img-height'
                style={{height: '350px'}}
              />
            </MDBView>
            {/* <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100"
                src='https://www.saylaniwelfare.com/uploads/2018-14-121544796392.jpg'
                alt="Fourth slide"
                style={{height: '350px'}}
                id='img-height'
              />
            </MDBView>
          </MDBCarouselItem> */}
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
  );
}

export default CarouselPage;