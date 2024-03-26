import { Container, Typography } from "@mui/material";
import Title from "./Title";

// Services Section
const Services = () => {
  interface iService {
    title: string;
    icon: string;
    desc: string;
  }

  const serviceTypes: iService[] = [
    {
      title: "Web site",
      icon: "./serviceIcons/1.svg",
      desc: "HypernovaHypernovaHypernova \n HypernovaHypernovaHypernova \n HypernovaHypernovaHypernova \n HypernovaHypernovaHypernova",
    },
    {
      title: "Mobil dasturlar",
      icon: "./serviceIcons/2.svg",
      desc: "HypernovaHypernovaHypernova \n HypernovaHypernovaHypernova \n HypernovaHypernovaHypernova \n HypernovaHypernovaHypernova",
    },
    {
      title: "CRM",
      icon: "./serviceIcons/3.svg",
      desc: "HypernovaHypernovaHypernova \n HypernovaHypernovaHypernova \n HypernovaHypernovaHypernova \n HypernovaHypernovaHypernova",
    },
    {
      title: "Telegram bot",
      icon: "./serviceIcons/4.svg",
      desc: "HypernovaHypernovaHypernova \n HypernovaHypernovaHypernova \n HypernovaHypernovaHypernova \n HypernovaHypernovaHypernova",
    },
    {
      title: "Online do‘kon",
      icon: "./serviceIcons/5.svg",
      desc: "HypernovaHypernovaHypernova \n HypernovaHypernovaHypernova \n HypernovaHypernovaHypernova \n HypernovaHypernovaHypernova",
    },
    {
      title: "Yordam kerakmi ?",
      icon: "./serviceIcons/6.svg",
      desc: "HypernovaHypernovaHypernova \n HypernovaHypernovaHypernova \n HypernovaHypernovaHypernova \n HypernovaHypernovaHypernova",
    },
  ];

  return (
    <Container maxWidth="xl">
      <Title content="Services we can help with" />

    
     <div className="flex items-center justify-center flex-wrap">
        {serviceTypes.map((e, id) => (
          <div data-aos="zoom-in" data-aos-duration="800" className="m-8 mx-20" key={id}>
            <div className="gradient rounded-md w-[60px] flex items-center justify-center">
              <img src={e.icon} alt={e.title} />
            </div>

            <Typography variant="h6" sx={{ my: 2 }} fontWeight={600}>
              {e.title}
            </Typography>

            <Typography width={240} variant="body2" color="text.secondary">
              {e.desc}
            </Typography>
          </div>
        ))}
      </div>

    </Container>
  );
};

export default Services;
