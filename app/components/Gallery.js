import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const Gallery = () => {
  const images = [
    { src: '/images/buddha.jpg', title: 'Buddha Vihar' },
    // Add more images here
  ];

  return (
    <Container>
      <Grid container spacing={4}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={image.src}
                alt={image.title}
              />
              <CardContent>
                <Typography variant="h6">{image.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Gallery;
