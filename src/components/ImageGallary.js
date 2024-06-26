// import React, { useEffect } from "react";
// import LightGallery from "lightgallery/react";
// import lgZoom from "lightgallery/plugins/zoom";
// import "lightgallery/scss/lightgallery.scss";
// import "lightgallery/scss/lg-zoom.scss";
// import lgShare from "lightgallery/plugins/share";
// import lgHash from "lightgallery/plugins/hash";
// import Masonry from "masonry-layout";
// import imagesLoaded from "imagesloaded";
// import "./style.scss";

// // const ImageGallary = ({ name }) => {
//   useEffect(() => {
//     const container = document.querySelector(".masonry-gallery-demo");
//     if (container) {
//       const msnry = new Masonry(container, {
//         itemSelector: ".gallery-item",
//         columnWidth: ".grid-sizer",
//         percentPosition: true,
//       });

//       imagesLoaded(container).on("progress", () => {
//         msnry.layout();
//       });
//     }
//   }, []);

//   return (
//     <LightGallery
//       elementClassNames={"masonry-gallery-demo"}
//       plugins={[lgZoom, lgShare, lgHash]}
//       speed={500}
//     >
//       <div className="grid-sizer"></div>
//       <a
//         data-lg-size="1600-1067"
//         className="gallery-item"
//         data-src="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
//         data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@tobbes_rd' >Tobias Rademacher </a></h4><p> Location - <a href='https://unsplash.com/s/photos/puezgruppe%2C-wolkenstein-in-gr%C3%B6den%2C-s%C3%BCdtirol%2C-italien'>Puezgruppe, Wolkenstein in Gröden, Südtirol, Italien</a>layers of blue.</p>"
//       >
//         <img
//           alt="layers of blue."
//           className="img-responsive"
//           src="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
//         />
//       </a>
//       <a
//         data-lg-size="1600-2400"
//         data-pinterest-text="Pin it2"
//         data-tweet-text="lightGallery slide  2"
//         className="gallery-item"
//         data-src="https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
//         data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@therawhunter' >Massimiliano Morosinotto </a></h4><p> Location - <a href='https://unsplash.com/s/photos/tre-cime-di-lavaredo%2C-italia'>Tre Cime di Lavaredo, Italia</a>This is the Way</p>"
//       >
//         <img
//           className="img-responsive"
//           src="https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
//         />
//       </a>
//       <a
//         data-lg-size="1600-2400"
//         data-pinterest-text="Pin it3"
//         data-tweet-text="lightGallery slide  4"
//         className="gallery-item"
//         data-src="https://images.unsplash.com/photo-1605973029521-8154da591bd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
//         data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@thesaboo' >Sascha Bosshard </a></h4><p> Location - <a href='https://unsplash.com/s/photos/pizol%2C-mels%2C-schweiz'>Pizol, Mels, Schweiz</a></p>"
//       >
//         <img
//           className="img-responsive"
//           src="https://images.unsplash.com/photo-1605973029521-8154da591bd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
//         />
//       </a>
//       <a
//         data-lg-size="1600-2398"
//         data-pinterest-text="Pin it3"
//         data-tweet-text="lightGallery slide  4"
//         className="gallery-item"
//         data-src="https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
//         data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@yusufevli' >Yusuf Evli </a></h4><p> Foggy Road</p>"
//       >
//         <img
//           className="img-responsive"
//           src="https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
//         />
//       </a>
//       <a
//         data-lg-size="1600-1067"
//         data-pinterest-text="Pin it3"
//         data-tweet-text="lightGallery slide  4"
//         className="gallery-item"
//         data-src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
//         data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Jay Mantri</a></h4><p>  Misty shroud over a forest</p>"
//       >
//         <img
//           className="img-responsive"
//           src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
//         />
//       </a>
//       <a
//         data-lg-size="1600-1067"
//         data-pinterest-text="Pin it3"
//         data-tweet-text="lightGallery slide  4"
//         className="gallery-item"
//         data-src="https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
//         data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Florian van Duyn</a></h4><p>Location - <a href='Bled, Slovenia'>Bled, Slovenia</a> </p>"
//       >
//         <img
//           className="img-responsive"
//           src="https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
//         />
//       </a>
//       <a
//         data-lg-size="1600-2400"
//         data-pinterest-text="Pin it3"
//         data-tweet-text="lightGallery slide  4"
//         className="gallery-item"
//         data-src="https://images.unsplash.com/photo-1617289229198-69f2cb3377aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
//         data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@s_hangaraj'>Sundar H Angaraj</a></h4><p> Lush Valley</p>"
//       >
//         <img
//           className="img-responsive"
//           src="https://images.unsplash.com/photo-1617289229198-69f2cb3377aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
//         />
//       </a>
//     </LightGallery>
//   );
// };

// export default ImageGallary;
import React, { useState } from "react";

const ImageGallary = ({}) => {
  const images = [
    {
      original: "/buddha-1.jpg",
      description: "Image 1 description",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      description: "Image 2 description",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      description: "Image 3 description",
    },
  ];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div>
      <div className="image-gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => openLightbox(index)}
            className="thumbnail"
          />
        ))}
      </div>

      {lightboxOpen && (
        <div className="lightbox">
          <span className="close-btn" onClick={closeLightbox}>
            &times;
          </span>
          <img
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
          />
          <button onClick={prevImage}>Previous</button>
          <button onClick={nextImage}>Next</button>
        </div>
      )}

      <style jsx>{`
        .image-gallery {
          display: flex;
          flex-wrap: wrap;
        }
        .thumbnail {
          width: 100px;
          height: 100px;
          object-fit: cover;
          margin: 5px;
          cursor: pointer;
        }
        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .lightbox img {
          max-width: 80%;
          max-height: 80%;
          object-fit: contain;
        }
        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 24px;
          cursor: pointer;
          color: #fff;
        }
        button {
          background: none;
          border: none;
          color: #fff;
          font-size: 16px;
          cursor: pointer;
          padding: 10px;
          margin: 10px;
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default ImageGallary;
