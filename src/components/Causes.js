import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import DonateSection from "./DonateSection";

const Causes = () => {
  return (
    <>
      <div
        className="home-container"
        style={{
          backgroundImage: "url(/buddha-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          className="home-overlay"
          style={{
            // backgroundColor: "rgba(0, 0, 0, 0.5)",
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
              Our Causes
            </Typography>
            <Typography variant="body1" gutterBottom style={{ color: "#fff" }}>
              यह ट्रस्ट/चैरिटी एक परोपकारी संगठन है जो जाति, वर्ग, समुदाय, लिंग,
              और राजनीति से ऊपर काम करता है।
            </Typography>
          </Container>
        </Box>
      </div>
      <div className="causes-section">
        <Container>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            className="causes-title"
          >
            {/* Our Causes */}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            className="causes-subtitle"
            sx={{ marginBottom: "30px" }}
          >
            {/* बहुत दूर, शब्द पर्वतों के पीछे, वोकालिया और कॉन्सोनैंटिया देशों से
            दूर, वहां अंधे टेक्स्ट्स रहते हैं। */}
          </Typography>
          <Grid container spacing={4} className="causes-grid">
            <Grid item xs={12} md={4}>
              <div className="cause-card">
                <img src="/cause-1.jpg" alt="Cause" className="cause-image" />
                <div className="cause-content">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="cause-title"
                  >
                    शिक्षक/प्रशिक्षण और अनुसंधान संस्थान
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    भिक्षुओं, ननों, नवसिखुओं और गृहस्थों के लिए शिक्षक/प्रशिक्षण
                    और अनुसंधान संस्थान स्थापित करना।
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="cause-card">
                <img src="/cause-3.jpg" alt="Cause" className="cause-image" />
                <div className="cause-content">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="cause-title"
                  >
                    ध्यान केंद्र
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    भिक्षुओं, ननों, नवसिखुओं और गृहस्थों के लिए ध्यान केंद्र
                    स्थापित करना।
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="cause-card">
                <img src="/cause-3.jpg" alt="Cause" className="cause-image" />
                <div className="cause-content">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="cause-title"
                  >
                    प्रशिक्षण शिविर
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    भिक्षुओं, ननों, नवसिखुओं और गृहस्थों के लिए प्रशिक्षण
                    कार्यक्रम और शिविर आयोजित करना।
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="cause-card">
                <img src="/cause-3.jpg" alt="Cause" className="cause-image" />
                <div className="cause-content">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="cause-title"
                  >
                    बौद्ध स्थलों का संरक्षण
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    प्राचीन बौद्ध विश्वविद्यालयों, अभिलेखों, खंडहरों, महाविहारों
                    और बौद्ध स्थलों की खोज और अतिक्रमण-मुक्त संरक्षण के सभी
                    कार्य करना।
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="cause-card">
                <img src="/cause-3.jpg" alt="Cause" className="cause-image" />
                <div className="cause-content">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="cause-title"
                  >
                    पर्यावरण संरक्षण
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    पर्यावरण के संरक्षण के लिए हर संभव प्रयास करना।
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="cause-card">
                <img src="/cause-3.jpg" alt="Cause" className="cause-image" />
                <div className="cause-content">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="cause-title"
                  >
                    बौद्ध तीर्थ यात्रा
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    समय-समय पर बौद्ध भक्तों के लिए तीर्थ यात्राओं का आयोजन करना।
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="cause-card">
                <img src="/cause-3.jpg" alt="Cause" className="cause-image" />
                <div className="cause-content">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="cause-title"
                  >
                    सांस्कृतिक उत्सव
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    बौद्ध धर्म के प्रचार के लिए सांस्कृतिक उत्सवों, महान
                    व्यक्तित्वों के स्मरण और अन्य आयोजनों का आयोजन करना।
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="cause-card">
                <img src="/cause-3.jpg" alt="Cause" className="cause-image" />
                <div className="cause-content">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="cause-title"
                  >
                    स्कूल, कॉलेज और पुस्तकालय
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    बौद्ध धर्म के प्रचार और प्रसार के लिए स्कूल, कॉलेज, बौद्ध
                    विश्वविद्यालय, अभिलेखागार, अनुसंधान संस्थान, स्तूप, स्तंभ,
                    महान व्यक्तियों की मूर्तियाँ और पुस्तकालय स्थापित करना।
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="cause-card">
                <img src="/cause-3.jpg" alt="Cause" className="cause-image" />
                <div className="cause-content">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="cause-title"
                  >
                    पाली भाषा का संरक्षण
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    पाली भाषा के संरक्षण और विकास के सभी कार्य करना।
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="cause-card">
                <img src="/cause-3.jpg" alt="Cause" className="cause-image" />
                <div className="cause-content">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="cause-title"
                  >
                    अनाथालय और नि:शुल्क अस्पताल
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    अनाथालय, वृद्धाश्रम और नि:शुल्क अस्पताल स्थापित करना।
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="cause-card">
                <img src="/cause-3.jpg" alt="Cause" className="cause-image" />
                <div className="cause-content">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="cause-title"
                  >
                    संविधान की सुरक्षा
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    भारतीय संविधान की सुरक्षा के लिए सभी कार्य करना, संविधान
                    अध्ययन के लिए रविवार और सार्वजनिक छुट्टियों के स्कूल चलाना,
                    संगोष्ठियों का आयोजन करना और पूरे भारत में भारतीय संविधान और
                    बौद्ध ग्रंथों को पाठ्यक्रम में शामिल करने का प्रयास करना।
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="cause-card">
                <img src="/cause-3.jpg" alt="Cause" className="cause-image" />
                <div className="cause-content">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="cause-title"
                  >
                    महिला सशक्तिकरण
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    महिलाओं के सम्मान, सशक्तिकरण, समानता, सुरक्षा और संरक्षण के
                    लिए सभी कार्य करना।
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="cause-card">
                <img src="/cause-3.jpg" alt="Cause" className="cause-image" />
                <div className="cause-content">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="cause-title"
                  >
                    प्रकाशन
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    प्रकाशन गतिविधियों के लिए धन की व्यवस्था करना और पत्रिकाओं
                    का प्रकाशन करना।
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="cause-card">
                <img src="/cause-3.jpg" alt="Cause" className="cause-image" />
                <div className="cause-content">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="cause-title"
                  >
                    सामाजिक कल्याण
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    मानवता के कल्याण और बौद्ध धर्म के प्रचार के लिए सभी सामाजिक
                    गतिविधियाँ करना।
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="cause-card">
                <img src="/cause-3.jpg" alt="Cause" className="cause-image" />
                <div className="cause-content">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="cause-title"
                  >
                    जरूरतमंद बच्चों का समर्थन
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    बेसहारा लड़कों और लड़कियों के लिए शिक्षा, प्रशिक्षण, विवाह
                    आदि की व्यवस्था करना।
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="cause-card">
                <img src="/cause-3.jpg" alt="Cause" className="cause-image" />
                <div className="cause-content">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="cause-title"
                  >
                    गांव जागरण
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    पूरे समाज के जागरण के लिए गांवों में कैडर आयोजित करना।
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="cause-card">
                <img src="/cause-3.jpg" alt="Cause" className="cause-image" />
                <div className="cause-content">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="cause-title"
                  >
                    डॉ. अंबेडकर की शिक्षाएं
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    डॉ. भीमराव अंबेडकर की शिक्षाओं "शिक्षित बनो, संगठित बनो,
                    संघर्ष करो" के साथ पूरे जागरूक वर्ग को एक मंच पर लाना और
                    पूरे समाज में मैत्री, करुणा, हर्ष और समता स्थापित करना।
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="cause-card">
                <img src="/cause-3.jpg" alt="Cause" className="cause-image" />
                <div className="cause-content">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="cause-title"
                  >
                    शैक्षणिक संस्थान
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    प्राथमिक विद्यालय, माध्यमिक विद्यालय, इंटर कॉलेज, स्नातक और
                    स्नातकोत्तर संस्थान और पुस्तकालय स्थापित करना और संचालित
                    करना।
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <DonateSection />
    </>
  );
};

export default Causes;
