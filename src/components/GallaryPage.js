// // // import * as React from 'react';
// // // import ImageList from '@mui/material/ImageList';
// // // import ImageListItem from '@mui/material/ImageListItem';
// // import React, { useState } from "react";
// // import FsLightbox from "fslightbox-react";
// // // function srcset(image, size, rows = 1, cols = 1) {
// // //   return {
// // //     src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
// // //     srcSet: `${image}?w=${size * cols}&h=${
// // //       size * rows
// // //     }&fit=crop&auto=format&dpr=2 2x`,
// // //   };
// // // }

// // export default function Gallery() {
// // // const [toggler, setToggler] = useState(false);

// // 	return (
// // 		<>

// // 			 <FsLightbox

// // 				sources={[
// // 					'https://i.imgur.com/fsyrScY.jpg',
// // 					'https://www.youtube.com/watch?v=3nQNiWdeH2Q',
// // 					'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
// // 				]}
// // 			/>
// // 		 </>
// // 	);
// // }

// // // const itemData = [
// // //   {
// // //     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
// // //     title: 'Breakfast',
// // //     rows: 2,
// // //     cols: 2,
// // //   },
// // //   {
// // //     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
// // //     title: 'Burger',
// // //   },
// // //   {
// // //     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
// // //     title: 'Camera',
// // //   },
// // //   {
// // //     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
// // //     title: 'Coffee',
// // //     cols: 2,
// // //   },
// // //   {
// // //     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
// // //     title: 'Hats',
// // //     cols: 2,
// // //   },
// // //   {
// // //     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
// // //     title: 'Honey',
// // //     author: '@arwinneil',
// // //     rows: 2,
// // //     cols: 2,
// // //   },
// // //   {
// // //     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
// // //     title: 'Basketball',
// // //   },
// // //   {
// // //     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
// // //     title: 'Fern',
// // //   },
// // //   {
// // //     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
// // //     title: 'Mushrooms',
// // //     rows: 2,
// // //     cols: 2,
// // //   },
// // //   {
// // //     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
// // //     title: 'Tomato basil',
// // //   },
// // //   {
// // //     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
// // //     title: 'Sea star',
// // //   },
// // //   {
// // //     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
// // //     title: 'Bike',
// // //     cols: 2,
// // //   },
// // // ];

// import React, { useEffect, useRef } from 'react';
// import 'lightgallery/css/lightgallery.css';
// import 'lightgallery/css/lg-thumbnail.css';
// import 'lightgallery/css/lg-zoom.css';
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import lgZoom from 'lightgallery/plugins/zoom';
// import lightGallery from 'lightgallery';
// import './Gallary.css'; // Import the CSS file

// function GallaryPage() {
//   const galleryRef = useRef(null);

//   const images = [
//     { src: '/image_1.jpg', thumb: '/image_1.jpg' },
//     { src: '/image_2.jpg', thumb: '/image_2.jpg' },
//     { src: '/image_3.jpg', thumb: '/image_3.jpg' },
//     { src: '/image_4.jpg', thumb: '/image_4.jpg' },
//     { src: '/image_5.jpg', thumb: '/image_5.jpg' },
//   ];

//   useEffect(() => {
//     lightGallery(galleryRef.current, {
//       plugins: [lgThumbnail, lgZoom],
//       speed: 500,
//     });
//   }, []);

//   return (
//     <div className="gallery-grid" ref={galleryRef}>
//       {images.map((image, idx) => (
//         <a key={idx} href={image.src} data-src={image.src}>
//           <img alt="" src={image.thumb} />
//         </a>
//       ))}
//     </div>
//   );
// }

// export default GallaryPage;
// import React, { useCallback, useEffect, useRef, useState } from "react";

// import "./Gallary.css";

// import LightGallery from "lightgallery/react";
// import lgZoom from "lightgallery/plugins/zoom";
// import lgVideo from "lightgallery/plugins/video";
// function GallaryPage() {
//   const lightGallery = useRef(null);
//   const [items, setItems] = useState([
//     {
//       id: "1",
//       size: "1400-933",
//       src: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
//       thumb:
//         "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
//       subHtml: `<div class="lightGallery-captions">
//                 <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
//                 <p>Published on November 13, 2018</p>
//             </div>`,
//     },
//     {
//       id: "6",
//       size: "1280-720",
//       poster:
//         "https://www.lightgalleryjs.com/images/demo/wistia-video-poster.jpeg",
//       src: "//vimeo.com/112836958?muted=false",
//       thumb:
//         "https://www.lightgalleryjs.com/images/demo/wistia-video-poster.jpeg",
//       subHtml: `<div class="lightGallery-captions">
//                 <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
//                 <p>Published on November 13, 2018</p>
//             </div>`,
//     },
//     {
//       id: "2",
//       size: "1400-933",
//       src: "https://images.unsplash.com/photo-1473876988266-ca0860a443b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
//       thumb:
//         "https://images.unsplash.com/photo-1473876988266-ca0860a443b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
//       subHtml: `<div class="lightGallery-captions">
//                 <h4>Photo by <a href="https://unsplash.com/@kylepyt">Kyle Peyton</a></h4>
//                 <p>Published on September 14, 2016</p>
//             </div>`,
//     },
//     {
//       id: "3",
//       size: "1400-932",
//       src: "https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80",
//       thumb:
//         "https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
//       subHtml: `<div class="lightGallery-captions">
//                 <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
//                 <p>Published on May 8, 2020</p>
//             </div>`,
//     },
//   ]);

//   const addItem = useCallback(() => {
//     setItems([
//       ...items,
//       {
//         id: "4",
//         size: "1400-933",
//         src: "https://images.unsplash.com/photo-1609902726285-00668009f004?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80",
//         thumb:
//           "https://images.unsplash.com/photo-1609902726285-00668009f004?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
//         subHtml: `<div class="lightGallery-captions">
//                 <h4>Photo by <a href="https://unsplash.com/@bruno_adam">Bruno Adam</a></h4>
//                 <p>Published on January 6, 2021</p>
//             </div>`,
//       },
//       {
//         id: "5",
//         size: "1600-2398",
//         src: "https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80",
//         thumb:
//           "https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
//         subHtml: `<div class="lightGallery-captions">
//             <h4>Photo by <a href="https://unsplash.com/@bruno_adam">Bruno Adam</a></h4>
//             <p>Published on January 6, 2021</p>
//         </div>`,
//       },
//     ]);
//   }, []);

//   const onInit = useCallback((detail) => {
//     if (detail) {
//       lightGallery.current = detail.instance;
//     }
//   }, []);

//   const getItems = useCallback(() => {
//     return items.map((item) => {
//       return (
//         <a
//           key={item.id}
//           data-lg-size={item.size}
//           className="gallery-item"
//           data-src={item.src}
//         >
//           <img
//             style={{ maxWidth: "280px" }}
//             className="img-responsive"
//             src={item.thumb}
//           />
//         </a>
//       );
//     });
//   }, [items]);

//   useEffect(() => {
//     lightGallery.current.refresh();
//     console.log("videl", lgVideo);
//   }, [items]);

//   return (
//     <div className="App">
//       <button onClick={addItem}>Add new item</button>
//       <LightGallery
//         plugins={[lgVideo, lgZoom]}
//         elementClassNames="custom-class-name"
//         onInit={onInit}
//       >
//         {getItems()}
//       </LightGallery>
//     </div>
//   );
// }

// export default GallaryPage;

import React, { useEffect } from "react";
import "./Gallary.css";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import fjGallery from "flickr-justified-gallery";
import { Container, Typography, Box } from "@mui/material";
function GallaryPage() {
  const HeaderComponent = () => (
    <div
      className="home-container"
      style={{
        backgroundImage: "url(/buddha-1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "30vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        className="home-overlay"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          padding: "2rem",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <Container>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            className="home-title"
            style={{ color: "#fff", fontWeight: "bold" }}
          >
            Gallery
          </Typography>
        </Container>
      </Box>
    </div>
  );

  useEffect(() => {
    fjGallery(document.querySelectorAll(".gallery"), {
      itemSelector: ".gallery__item",
      rowHeight: 180,
      lastRow: "start",
      gutter: 2,
      rowHeightTolerance: 0.1,
      calculateItemsHeight: false,
    });
  }, []);

  return (
    <div>
      <HeaderComponent />
      <LightGallery
        plugins={[lgZoom, lgVideo]}
        mode="lg-fade"
        pager={false}
        thumbnail={true}
        galleryId={"nature"}
        autoplayFirstVideo={false}
        elementClassNames={"gallery"}
        mobileSettings={{
          controls: false,
          showCloseIcon: false,
          download: false,
          rotate: false,
        }}
      >
        <a
          data-lg-size="1600-2400"
          data-pinterest-text="Pin it2"
          data-tweet-text="lightGallery slide  2"
          className="gallery__item"
          data-src="/20230703_165838.jpg"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@therawhunter' >Massimiliano Morosinotto </a></h4><p> Location - <a href='https://unsplash.com/s/photos/tre-cime-di-lavaredo%2C-italia'>Tre Cime di Lavaredo, Italia</a>This is the Way</p>"
        >
          <img className="img-responsive" src="/20230703_165838.jpg" />
        </a>
        <a
          data-lg-size="1600-2400"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="/20230703_162355.jpg"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@thesaboo' >Sascha Bosshard </a></h4><p> Location - <a href='https://unsplash.com/s/photos/pizol%2C-mels%2C-schweiz'>Pizol, Mels, Schweiz</a></p>"
        >
          <img className="img-responsive" src="/20230703_162355.jpg" />
        </a>
        <a
          data-lg-size="1600-2398"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="/20230703_143200.jpg"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@yusufevli' >Yusuf Evli </a></h4><p> Foggy Road</p>"
        >
          <img className="img-responsive" src="/20230703_143200.jpg" />
        </a>
        <a
          data-lg-size="1600-1067"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="/20230703_142858.jpg"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Jay Mantri</a></h4><p>  Misty shroud over a forest</p>"
        >
          <img className="img-responsive" src="/20230703_142858.jpg" />
        </a>
        {/* <a
          data-lg-size="1600-1067"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Florian van Duyn</a></h4><p>Location - <a href='Bled, Slovenia'>Bled, Slovenia</a> </p>"
        >
          <img
            className="img-responsive"
            src="https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
          />
        </a>
        <a
          data-lg-size="1600-1126"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@juanster' >Juan Davila</a></h4><p>Location - <a href='Bled, Slovenia'>Bled, Slovenia</a> Wooded lake island </p>"
        >
          <img
            className="img-responsive"
            src="https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
          />
        </a>
        <a
          data-lg-size="1600-1063"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@davidmarcu' >David Marcu</a></h4><p>Location - <a href='https://unsplash.com/s/photos/ciuca%C8%99-peak%2C-romania'>Ciucaș Peak, Romania</a> Alone in the unspoilt wilderness </p>"
        >
          <img
            className="img-responsive"
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
          />
        </a>
        <a
          data-lg-size="1600-2400"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://images.unsplash.com/photo-1585338447937-7082f8fc763d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@whoisbenjamin' >whoisbenjamin</a></h4>
          <p>Location - <a href='https://unsplash.com/s/photos/ciuca%C8%99-peak%2C-romania'>Snowdonia National Park, Blaenau Ffestiniog, UK</a> 
          A swan on a calm misty lake in the mountains of Snowdonia, North Wales. <a href='https://unsplash.com/photos/9V6EkAoTWJM'>Link</a> </p>"
        >
          <img
            className="img-responsive"
            src="https://images.unsplash.com/photo-1585338447937-7082f8fc763d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
          />
        </a>
        <a
          data-lg-size="1600-1144"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://images.unsplash.com/photo-1476842384041-a57a4f124e2e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@aaronburden' >Aaron Burden</a></h4><p>Location - <a href='https://unsplash.com/s/photos/grayling%2C-michigan%2C-united-states'>Grayling, Michigan, United States</a> Colorful trees near a lake. <a href='https://unsplash.com/photos/00QWN1J0g48'>Link</a> </p>"
        >
          <img
            className="img-responsive"
            src="https://images.unsplash.com/photo-1476842384041-a57a4f124e2e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
          />
        </a>
        <a
          data-lg-size="1600-1067"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://images.unsplash.com/photo-1465311530779-5241f5a29892?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@kalenemsley' >Kalen Emsley</a></h4><p>Location - <a href='https://unsplash.com/s/photos/yukon-territory%2C-canada'>Yukon Territory, Canada</a> No captions. <a href='https://unsplash.com/photos/eHpYD4U5830'>Link</a> </p>"
        >
          <img
            className="img-responsive"
            src="https://images.unsplash.com/photo-1465311530779-5241f5a29892?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
          />
        </a>
        <a
          data-lg-size="1600-1067"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@kace' >Kace Rodriguez</a></h4><p>Location - <a href='https://unsplash.com/s/photos/pfeiffer-beach%2C-united-states'>Pfeiffer Beach, United States</a> Pfeiffer Beach at Dusk. <a href='https://unsplash.com/photos/eHpYD4U5830'>Link</a> </p>"
        >
          <img
            className="img-responsive"
            src="https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
          />
        </a>
        <a
          data-lg-size="1600-2400"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://images.unsplash.com/photo-1610448721566-47369c768e70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@patwhelen' >Pat Whelen</a></h4><p>Location - <a href='https://unsplash.com/s/photos/portsea-vic%2C-australia'>Portsea VIC, Australia</a> No caption <a href='https://unsplash.com/photos/EKLXDQ-dDRg'>Link</a> </p>"
        >
          <img
            className="img-responsive"
            src="https://images.unsplash.com/photo-1610448721566-47369c768e70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
          />
        </a>
        <a
          data-lg-size="1600-1067"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@derekthomson' >Derek Thomson</a></h4><p>Location - <a href='https://unsplash.com/s/photos/mcway-falls%2C-united-states'>McWay Falls, United States</a> No caption <a href='https://unsplash.com/photos/TWoL-QCZubY'>Link</a> </p>"
        >
          <img
            className="img-responsive"
            src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
          />
        </a>
        <a
          data-lg-size="1600-2400"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://images.unsplash.com/photo-1539678050869-2b97c7c359fd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@michaljaneck' >Michal Janek</a></h4><p>Location - <a href='https://unsplash.com/s/photos/big-sur%2C-united-states'>Big Sur, United States</a> Coast  </p>"
        >
          <img
            className="img-responsive"
            src="https://images.unsplash.com/photo-1539678050869-2b97c7c359fd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
          />
        </a>
        <a
          data-lg-size="1600-2400"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://images.unsplash.com/photo-1446630073557-fca43d580fbe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@papillon' >Iris Papillon</a></h4><p>Location - <a href='https://unsplash.com/s/photos/big-sur%2C-united-states'>Big Sur, United States</a> Big Sur drive  </p>"
        >
          <img
            className="img-responsive"
            src="https://images.unsplash.com/photo-1446630073557-fca43d580fbe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
          />
        </a>
        <a
          data-lg-size="1600-1065"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://images.unsplash.com/photo-1596370743446-6a7ef43a36f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@piyushh_dubeyy' >piyush dubey</a></h4><p>Published on August 2, 2020</p>"
        >
          <img
            className="img-responsive"
            src="https://images.unsplash.com/photo-1596370743446-6a7ef43a36f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
          />
        </a>
        <a
          data-lg-size="1600-2134"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@fynn_it' >fynn</a></h4><p>Location - <a href='https://unsplash.com/s/photos/big-sur%2C-united-states'>Big Sur, United States</a> Wasserauen, Appenzell Innerrhoden, Schweiz  </p>"
        >
          <img
            className="img-responsive"
            src="https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
          />
        </a>
        <a
          data-lg-size="1600-1060"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@danielleone' >Daniel Leone</a></h4><p>Location - <a href='https://unsplash.com/s/photos/poon-hill%2C-ghode-pani%2C-nepal'>Poon Hill, Ghode Pani, Nepal</a> Taken from the top of Poon Hill before sun rise </p>"
        >
          <img
            className="img-responsive"
            src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
          />
        </a>
        <a
          data-lg-size="1600-1037"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://images.unsplash.com/photo-1510011560141-62c7e8fc7908?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@bboba' >Boba Jovanovic</a></h4><p>Location - <a href='https://unsplash.com/s/photos/bay-of-kotor'>Bay of Kotor</a> Boka kotorska bay </p>"
        >
          <img
            className="img-responsive"
            src="https://images.unsplash.com/photo-1510011560141-62c7e8fc7908?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
          />
        </a>
        <a
          data-lg-size="1600-899"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://images.unsplash.com/photo-1586276393635-5ecd8a851acc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@svsdesigns' >Surendra Vikram Singh</a></h4><p>Location - <a href='https://unsplash.com/s/photos/lachung%2C-sikkim%2C-india'>Lachung, Sikkim, India</a> Cloud covered mountain </p>"
        >
          <img
            className="img-responsive"
            src="https://images.unsplash.com/photo-1586276393635-5ecd8a851acc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
          />
        </a>
        <a
          data-lg-size="1600-1067"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://images.unsplash.com/photo-1471931452361-f5ff1faa15ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2252&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@camadams' >Cam Adams</a></h4><p>Location - <a href='https://unsplash.com/s/photos/banff%2C-canada'>Banff, Canada</a> Lake along jagged mountains</p>"
        >
          <img
            className="img-responsive"
            src="https://images.unsplash.com/photo-1471931452361-f5ff1faa15ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
          />
        </a> */}
      </LightGallery>
    </div>
  );
}
export default GallaryPage;
