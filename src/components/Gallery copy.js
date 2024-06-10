import React, { useState } from 'react';
import { Grid, Modal, Backdrop, Fade, Box, Typography, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';
import image1 from '/image_1.jpg';
import image2 from '/image_2.jpg';
import image3 from '/image_3.jpg';
// Add more images as needed

const useStyles = makeStyles((theme) => ({
  galleryContainer: {
    padding: theme.spacing(4),
    textAlign: 'center',
  },
  galleryImage: {
    width: '100%',
    height: 'auto',
    cursor: 'pointer',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    outline: 'none',
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
}));

const images = [image1, image2, image3]; // Add more images to this array

const Gallery = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.galleryContainer}>
      <Typography variant="h4" component="h2" gutterBottom>
        GALLERY
      </Typography>
      <Grid container spacing={4}>
        {images.map((image, index) => (
          <Grid item xs={12} md={4} key={index}>
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className={classes.galleryImage}
              onClick={() => handleOpen(image)}
            />
          </Grid>
        ))}
      </Grid>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className={classes.modalContent}>
            <IconButton className={classes.closeButton} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            {selectedImage && <img src={selectedImage} alt="Selected" width="100%" />}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Gallery;
