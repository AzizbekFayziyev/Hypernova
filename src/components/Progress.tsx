import { Container, Typography, useMediaQuery } from "@mui/material";

// Progress section
const Progress = () => {
  const media = useMediaQuery("(max-width: 1200px)");
  const mediaSm = useMediaQuery("(max-width: 720px)");

  interface Iprogress {
    level: number;
    desc: string;
    class: string;
    fade: string;
  }

  const progressLevels: Iprogress[] = [
    {
      level: 1,
      desc: "Bog‘lanish. Ushbu holatda mijoz va operatorlar proyekt borasida bir biri bilan aloqadada bo‘ladilar. Proyekt haqida og‘zaki kelishib oladilar",
      fade: "right",
      class: "top-[100px] right-[70%]",
    },
    {
      level: 2,
      desc: "Bog‘lanish. Ushbu holatda mijoz va operatorlar proyekt borasida bir biri bilan aloqadada bo‘ladilar. Proyekt haqida og‘zaki kelishib oladilar",
      fade: "left",
      class: "top-[240px] right-[-30px]",
    },
    {
      level: 3,
      desc: "Bog‘lanish. Ushbu holatda mijoz va operatorlar proyekt borasida bir biri bilan aloqadada bo‘ladilar. Proyekt haqida og‘zaki kelishib oladilar",
      fade: "right",
      class: "top-[460px] right-[70%]",
    },
    {
      level: 4,
      desc: "Bog‘lanish. Ushbu holatda mijoz va operatorlar proyekt borasida bir biri bilan aloqadada bo‘ladilar. Proyekt haqida og‘zaki kelishib oladilar",
      fade: "left",
      class: "top-[660px] right-[-35px]",
    },
    {
      level: 5,
      desc: "Bog‘lanish. Ushbu holatda mijoz va operatorlar proyekt borasida bir biri bilan aloqadada bo‘ladilar. Proyekt haqida og‘zaki kelishib oladilar",
      fade: "right",
      class: "top-[860px] right-[70%]",
    },
    {
      level: 6,
      desc: "Bog‘lanish. Ushbu holatda mijoz va operatorlar proyekt borasida bir biri bilan aloqadada bo‘ladilar. Proyekt haqida og‘zaki kelishib oladilar",
      fade: "left",
      class: "top-[1060px] right-[-35px]",
    },
  ];

  return (
    <Container sx={{ mt: 8 }} maxWidth="lg">
      <div className="relative flex justify-center">
        <img
          width={media ? 350 : "auto"}
          className={`${mediaSm ? "hidden" : "block"} mx-auto select-none`}
          src="./progress.png"
          alt="progress img"
        />

        <div className="levels">
          {progressLevels.map((e) => (
            <div
              data-aos={`fade-${e.fade}`}
              data-aos-duration="1000"
              key={e.level}
              className={`w-[350px] ${
                media ? "relative mx-auto my-12" : "absolute"
              } ${!media && e.class}`}
            >
              <Typography
                className="bg-white inline-block text-black rounded-md px-2"
                sx={{ mb: 2 }}
                variant="h6"
                fontWeight={600}
              >
                {e.level}-bosqich
              </Typography>

              <Typography color="text.secondary" fontWeight={600}>
                Bog‘lanish. Ushbu holatda mijoz va operatorlar proyekt borasida
                bir biri bilan aloqadada bo‘ladilar. Proyekt haqida og‘zaki
                kelishib oladilar.
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Progress;
