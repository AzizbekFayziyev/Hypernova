// Our projects section

import {
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Title from "./Title";
import { LastPage } from "@mui/icons-material";

const Projects = () => {
  const media = useMediaQuery("(max-width: 820px)");

  // Our works
  interface IWorks {
    title: string;
    desc: string;
    img: string;
    reverse: boolean;
  }

  const works: IWorks[] = [
    {
      title: "“ Arken Jenerator ”",
      desc: "Perkins texnologiyaning etakchi dvigatel brendlaridan biri bo'lib, butun dunyo bo'ylab brenddir. U etakchi brendlardan biri bo'lganligi sababli, u o'zining barcha ishlarini qog'ozda tashkil etadigan va loyihalashtiradigan tizimda ishlashi bilan mashhur. Ularning ishchi tizimlarida ishlab chiqarish bosqichi butunlay o'ziga xosdir, ular ishlab chiqilgan dvigatellarni chet elga yuborishadi.",
      img: "./projects/1.png",
      reverse: false,
    },
    {
      title: "“ BAHRA CHICKEN MEATS “",
      desc: "'Bahra Chickens' bu barra tovuq go'shtlari va yarim tayyor mahsulotlarini ishlab chiqaruvchi kompaniyadir. Ushbu kompaniya 2018-yil tashkil topgan. “Bahra Chickens” korxonasi sizning savdo rastangizni halol va ishonchli xizmat bilan to‘ldiradi. Bugungi kunga kelib kompaniyada 150 ga yaqin xodim faoliya olib boradi. Ular tijorat departament, marketing, operatsiyalar bo‘limlarida ishlaydi.",
      img: "./projects/2.png",
      reverse: true,
    },
    {
      title: "“ Ofiyat “ klinikasi",
      desc: "Ofiyat Med Klinikasi 2022-yil 1-oktabrdan o'z faoliyatini boshlagan. Ofiyat Med Klinikasida 20 dan ortiq malakali shifokorlar mavjud va hozirgi kungacha ushbu malakali shifokorlar 1000 dan ortiq muvaffaqiyatli jarrohlik amaliyotlarini amalga oshirishgan.",
      img: "./projects/3.png",
      reverse: false,
    },
  ];

  return (
    <Container maxWidth="xl">
      <Title content="Bizning proyektlariz" />

      {works.map((e, id) => (
        <Stack
          sx={{ my: media ? 4 : 2 }}
          key={id}
          flexDirection={e.reverse ? "row-reverse" : "row"}
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap={media ? "wrap" : "nowrap"}
        >
          <img
            data-aos="fade-right"
            data-aos-duration="800"
            width={media ? 320 : 420}
            src={e.img}
            alt="phone"
          />

          <div
            data-aos="fade-left"
            data-aos-duration="800"
            className="max-w-[700px]"
          >
            <Typography variant="h5" fontWeight={600}>
              {e.title}
            </Typography>

            <Typography color="text.secondary" sx={{ my: 4 }}>
              {e.desc}
            </Typography>

            <Button
              className="btn"
              size="large"
              sx={{ borderRadius: "30px", background: "#fff" }}
              variant="contained"
            >
              <span className="text-secondary font-medium">
                Saytga o‘tish
                <LastPage
                  className="bg-secondary rounded-full scale-105 ml-3"
                  htmlColor="#fff"
                />
              </span>
            </Button>
          </div>
        </Stack>
      ))}
    </Container>
  );
};

export default Projects;
