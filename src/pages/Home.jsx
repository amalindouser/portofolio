import React, { useState, useRef, useEffect} from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
  Image,
  Stack,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Progress,
  useColorModeValue,
  Button,
  Icon,
  Flex,
  Center,
} from '@chakra-ui/react';
import { motion, AnimatePresence  } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import Navbar from '../components/Navbar';
import { image, title } from 'framer-motion/client';

const MotionBox = motion(Box);
const MotionText = motion(Text)
const MotionStack = motion(Stack);
const MotionCard = motion(Card);

const HeroSection = () => (
  <MotionBox
    minHeight="100vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
    bgGradient="linear(to-r, purple.500, pink.400)"
    color="white"
    px={{ base: 4, md: 6 }}
    py={{ base: 8, md: 12 }}
    transition="all 0.3s ease-in-out"
  >
    <Stack
      direction={{ base: 'column', md: 'row' }}
      spacing={{ base: 8, md: 12 }}
      align="center"
      textAlign={{ base: 'center', md: 'left' }}
      maxW="1000px"
      w="full"
    >
      {/* Foto dengan bubble dan blur */}
      <MotionBox
        position="relative"
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        mb={{ base: 4, md: 0 }}
      >
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w={{ base: "260px", md: "360px" }}
          h={{ base: "260px", md: "360px" }}
          bg="whiteAlpha.300"
          borderRadius="full"
          zIndex={0}
          filter="blur(30px)"
        />

        
        {/* Foto bulat */}
        <Box
          zIndex={1}
          overflow="hidden"
          borderRadius="full"
          w={{ base: "180px", sm: "220px", md: "300px" }}
          h={{ base: "180px", sm: "220px", md: "300px" }}
          border="4px solid white"
          boxShadow="xl"
          mx="auto"
        >
          <img
            src="/images/foto_.jpg"
            alt="Bagus Viki Amalindo"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
      </MotionBox>

      {/* Deskripsi */}
      <MotionStack
        spacing={4}
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        px={{ base: 2, md: 0 }}
      >
        <Heading size={{ base: "lg", md: "2xl" }} letterSpacing="wide">
          Bagus Viki Amalindo
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} fontWeight="medium">
          Front-End Developer
        </Text>
        <Text fontSize={{ base: "sm", md: "md" }}>
          Saya adalah lulusan S1 Informatika yang memiliki ketertarikan kuat di bidang pengembangan antarmuka web modern.
        </Text>
        <Text fontSize={{ base: "sm", md: "md" }}>
          Fokus saya adalah membangun UI yang responsif dan efisien menggunakan React.js, Chakra UI.
        </Text>
        <Text fontSize={{ base: "sm", md: "md" }}>
          Saya telah mengembangkan berbagai proyek web, termasuk sistem rekomendasi pekerjaan berbasis Content-Based Filtering menggunakan Python dan Flask.
        </Text>
        <Text fontSize={{ base: "sm", md: "md" }}>
          Saya terus belajar dan mengikuti perkembangan teknologi front-end untuk menciptakan pengalaman pengguna yang optimal.
        </Text>
      </MotionStack>
    </Stack>
  </MotionBox>
);


const ProjectSection = () => {
  const projects = [
    {
      title: "Sistem Aplikasi Rumah Sakit Tavizi",
      description: "Website RS Tavizi dengan fitur reservasi dan dashboard.",
      image: "/images/Tavizi.jpg",
    },
    {
      title: "Web App T-Shirts VND-CEPER",
      description: "Aplikasi katalog & toko kaos lokal berbasis React.",
      image: "/images/VND.jpg",
    },
    {
      title: "Web App Siap Siaga Gempa Bumi - SeismoSphere",
      description: "Aplikasi edukasi gempa berbasis React.js.",
      image: "/images/Seismosphere.png",
    },
    {
      title: "Sistem Rekomendasi Pekerjaan",
      description: "Rekomendasi kerja berbasis Python & TF-IDF.",
      image: "/images/Job Recomendation.jpg",
    },
  ];

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      minH={{ base: "auto", md: "100vh" }}
      mt={{ base: 8, md: 16 }}
      px={{ base: 4, md: 8 }}
      gap={6}
    >
      {/* Kiri: Judul */}
      <Box
        w={{ base: "100%", md: "40%" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        py={{ base: 4, md: 0 }}
      >
        <Heading
          size={{ base: "xl", md: "2xl" }}
          color="white"
          bgGradient="linear(to-r, purple.500, pink.400)"
          p={6}
          borderRadius="md"
          textAlign="center"
          shadow="xl"
        >
          Project
        </Heading>
      </Box>

      {/* Kanan: Scrollable Card Area */}
      <Box
        w={{ base: "100%", md: "60%" }}
        overflowY="auto"
        maxH={{ base: "auto", md: "90vh" }}
        scrollSnapType="y mandatory"
        css={{
          "&::-webkit-scrollbar": { width: "6px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#CBD5E0",
            borderRadius: "8px",
          },
        }}
        px={2}
      >
        {projects.map((project, index) => (
          <AnimatePresence key={index}>
            <MotionBox
              scrollSnapAlign="center"
              mb={8}
              px={{ base: 2, md: 0 }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
              display="flex"
              justifyContent="center"
            >
              <Box
                bg="white"
                borderRadius="xl"
                shadow="xl"
                overflow="hidden"
                w={{ base: "100%", sm: "90%", md: "80%" }}
                maxW="600px"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  w="100%"
                  h={{ base: "160px", sm: "180px", md: "220px" }}
                  objectFit="cover"
                />
                <Box p={6}>
                  <Heading size="md" mb={2}>
                    {project.title}
                  </Heading>
                  <Text fontSize="sm" color="gray.700">
                    {project.description}
                  </Text>
                </Box>
              </Box>
            </MotionBox>
          </AnimatePresence>
        ))}
      </Box>
    </Flex>
  );
};



const SectionExperience = () => {
  const experiencesActivities = [
    {
      position: "Lolos Pendanaan PKM-PM 2023",
      company: "Kemendikbud",
      period: "Mei 2023 – Jun 2023",
      description:
        "PKM Pengabdian Masyarakat dalam peningkatan budidaya coklat. Berperan dalam desain grafis dan pengelolaan media sosial.",
    },
    {
      position: "Magang dan Studi Independet (SIB) bidang pengembangan React dan Backend",
      company: "Dicoding x Kampus Merdeka",
      period: "Batch 6",
      description:
        "Mengikuti program Studi Independen selama 5 bulan yang difasilitasi oleh Dicoding dan Kampus Merdeka. Mempelajari pengembangan aplikasi web menggunakan React.js, Node.js, Express, serta dasar-dasar RESTful API dan MongoDB. Selain itu, juga mempelajari prinsip UI/UX, deployment aplikasi, dan pengujian. Program ditutup dengan pembuatan proyek akhir berupa aplikasi full-stack sebagai implementasi pembelajaran.",
    },
    {
      position: " Panitia P2K FTI 2022 divisi Konsumsi",
      company: "FTI UAD",
      period: "2022",
      description:
        "Menjadi panitia Pengenalan Program Kampus Fakultas Teknologi Industri sebagai anggota divisi Konsumsi. Bertanggung jawab atas distribusi logistik dan konsumsi bagi peserta dan panitia.",
    },
    {
    position: "Panitia P2K FTI 2023",
    company: "Universitas Ahmad Dahlan",
    period: "2023",
    description:
      "Bertugas di divisi Kesehatan dalam acara P2K FTI 2023. Mengelola pengecekan kondisi peserta dan memberikan pertolongan pertama jika diperlukan.",
    },
    {
    position: "Panitia Leadership Enhancement FTI 2022",
    company: "Universitas Ahmad Dahlan",
    period: "2022",
    description:
      "Berperan dalam divisi Konsumsi untuk kegiatan Leadership Enhancement. Mengatur kebutuhan konsumsi peserta dan panitia selama kegiatan berlangsung.",
    },
    {
      position: "Asisten Praktikum",
      company: "Informatika Universitas Ahmad Dahlan",
      period: "2023",
      description:
        "Membantu jalannya praktikum di laboratorium. Memberikan bimbingan teknis kepada mahasiswa serta melakukan penilaian dan asistensi laporan praktikum.",
    },
    {
      position: "Magang Desain Grafis",
      company: "Gapai Mentorship",
      period: "2024",
      description:
        "Mengerjakan desain untuk kebutuhan media sosial, poster, dan promosi digital menggunakan Canva dan Figma. Berpengalaman bekerja dengan klien UMKM dan komunitas kampus.",
    },
  ];

  const experiencesOrganizations = [
    {
      position: "Anggota Himpunan Mahasiswa",
      company: "HIMATIF UAD",
      period: "2021 – 2022",
      description:
        "Berkontribusi dalam acara seminar nasional dan pelatihan teknologi.",
    },
    {
    position: "Wakil Ketua LSO Futsal FTI UAD",
    company: "Universitas Ahmad Dahlan",
    period: "2022 – 2023",
    description:
      "Bertanggung jawab dalam membantu ketua mengelola kegiatan LSO Futsal di Fakultas Teknologi Industri, termasuk perencanaan latihan rutin, pengelolaan event internal dan eksternal, serta koordinasi antaranggota untuk menjaga kekompakan dan prestasi tim.",
    }
  ];
  
  const [showAllActivities, setShowAllActivities] = useState(false);
  const [showAllOrgs, setShowAllOrgs] = useState(false);

  const visibleActivities = showAllActivities
    ? experiencesActivities
    : experiencesActivities.slice(0, 1);
  const visibleOrgs = showAllOrgs
    ? experiencesOrganizations
    : experiencesOrganizations.slice(0, 1);

  return (
    <Box py={16} px={4} bg="white" id="experience">
      <Flex justify="center" align="center" mb={10}>
        <Heading
          size={{ base: "lg", md: "xl" }}
          bgGradient="linear(to-r, purple.500, pink.400)"
          color="white"
          p={6}
          borderRadius="lg"
          textAlign="center"
          shadow="xl"
        >
          Pengalaman
        </Heading>
      </Flex>

      <Box
        w="100%"
        maxW="960px"
        mx="auto"
        px={{ base: 2, md: 6 }}
        display="flex"
        flexDirection="column"
        gap={12}
      >
        {/* === KEGIATAN === */}
        <Box>
          <Heading
            size={{ base: "md", md: "lg" }}
            mb={6}
            textAlign="left"
            fontWeight="semibold"
          >
            Kegiatan
          </Heading>

          <VStack spacing={6} align="stretch" w="full">
            <AnimatePresence>
              {visibleActivities.map((exp) => (
                <MotionBox
                  key={exp.position}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  bg="white"
                  p={6}
                  rounded="xl"
                  shadow="md"
                  borderLeft="4px solid"
                  borderColor="purple.400"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  cursor="pointer"
                  _hover={{ shadow: "xl" }}
                >
                  <Stack direction="row" align="center" mb={2}>
                    <Icon as={Briefcase} color="purple.400" />
                    <Text
                      fontWeight="bold"
                      fontSize={{ base: "md", md: "lg" }}
                    >
                      {exp.position}
                    </Text>
                  </Stack>
                  <Text color="gray.600" fontSize="sm">
                    {exp.company} &bull; {exp.period}
                  </Text>
                  <Text mt={2} fontSize="sm" color="gray.700">
                    {exp.description}
                  </Text>
                </MotionBox>
              ))}
            </AnimatePresence>

            {experiencesActivities.length > 1 && (
              <Button
                onClick={() => setShowAllActivities((prev) => !prev)}
                alignSelf="center"
                variant="outline"
                colorScheme="purple"
              >
                {showAllActivities ? "Tutup" : "Lihat Selengkapnya"}
              </Button>
            )}
          </VStack>
        </Box>

        {/* === ORGANISASI === */}
        <Box>
          <Heading
            size={{ base: "md", md: "lg" }}
            mb={6}
            textAlign="left"
            fontWeight="semibold"
          >
            Organisasi
          </Heading>

          <VStack spacing={6} align="stretch" w="full">
            <AnimatePresence>
              {visibleOrgs.map((exp) => (
                <MotionBox
                  key={exp.position}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  bg="white"
                  p={6}
                  rounded="xl"
                  shadow="md"
                  borderLeft="4px solid"
                  borderColor="purple.400"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  cursor="pointer"
                  _hover={{ shadow: "xl" }}
                >
                  <Stack direction="row" align="center" mb={2}>
                    <Icon as={Briefcase} color="purple.400" />
                    <Text
                      fontWeight="bold"
                      fontSize={{ base: "md", md: "lg" }}
                    >
                      {exp.position}
                    </Text>
                  </Stack>
                  <Text color="gray.600" fontSize="sm">
                    {exp.company} &bull; {exp.period}
                  </Text>
                  <Text mt={2} fontSize="sm" color="gray.700">
                    {exp.description}
                  </Text>
                </MotionBox>
              ))}
            </AnimatePresence>

            {experiencesOrganizations.length > 1 && (
              <Button
                onClick={() => setShowAllOrgs((prev) => !prev)}
                alignSelf="center"
                variant="outline"
                colorScheme="purple"
              >
                {showAllOrgs ? "Tutup" : "Lihat Selengkapnya"}
              </Button>
            )}
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};



const SkillsSection = () => {
  const skills = [
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  ];

  const cardBg = useColorModeValue("white", "gray.700");

  return (
    <Box
      py={16}
      px={{ base: 4, md: 8 }}
      bgGradient="linear(to-b, pink.400, purple.600)"
      w="full"
      maxW="1200px"
      mx="auto"
      borderRadius="2xl"
      id="skills"
    >
      <Heading
        size={{ base: "lg", md: "xl" }}
        mb={10}
        color="white"
        textAlign="center"
        letterSpacing="wide"
      >
        Keahlian
      </Heading>

      <SimpleGrid
        columns={{ base: 2, sm: 3, md: 4, lg: 5 }}
        spacing={{ base: 4, md: 6 }}
        justifyItems="center"
      >
        {skills.map((skill, index) => (
          <MotionBox
            key={index}
            bg={cardBg}
            p={4}
            borderRadius="xl"
            boxShadow="md"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            w={{ base: "100px", sm: "110px", md: "120px" }}
            h={{ base: "110px", sm: "120px", md: "140px" }}
            _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src={skill.logo}
              alt={skill.name}
              boxSize={{ base: "36px", sm: "42px", md: "50px" }}
              objectFit="contain"
              mb={2}
            />
            <Text
              fontSize={{ base: "xs", sm: "sm" }}
              fontWeight="medium"
              textAlign="center"
            >
              {skill.name}
            </Text>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};


const EducationSection = () => {
  const educationList = [
    {
      school: "Universitas Ahmad Dahlan",
      major: "S1 Informatika",
      year: "2025",
      logo: "/images/uad_logo.png",
    },
  ];

  return (
    <Box
      py={16}
      px={{ base: 4, md: 8 }}
      w="full"
      bg="gray.50"
      id="education"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "start" }}
        justify="center"
        gap={12}
        maxW="1200px"
        mx="auto"
      >
        {/* Judul Section */}
        <Heading
          size={{ base: "lg", md: "xl" }}
          bgGradient="linear(to-r, purple.500, pink.400)"
          color="white"
          p={6}
          borderRadius="lg"
          shadow="xl"
          textAlign="center"
          minW={{ base: "full", md: "200px" }}
        >
          Pendidikan
        </Heading>

        {/* Daftar Pendidikan */}
        <VStack align="stretch" spacing={6} w="full">
          {educationList.map((edu, index) => (
            <Box
              key={index}
              bg="white"
              p={6}
              rounded="xl"
              shadow="md"
              w="full"
              _hover={{
                shadow: "lg",
                transform: "scale(1.01)",
                transition: "0.3s",
              }}
            >
              <HStack spacing={4} align="center">
                <Image
                  src={edu.logo}
                  alt={edu.school}
                  boxSize={{ base: "48px", md: "60px" }}
                  objectFit="contain"
                />
                <Box>
                  <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>
                    {edu.school}
                  </Text>
                  <Text fontSize={{ base: "sm", md: "md" }}>
                    {edu.major}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    Lulus: {edu.year}
                  </Text>
                </Box>
              </HStack>
            </Box>
          ))}
        </VStack>
      </Flex>
    </Box>
  );
};

const PortfolioPage = () => {
  return (
    <Box>
      <Navbar />
      <HeroSection />
      <ProjectSection />
      <SectionExperience />
      <SkillsSection />
      <EducationSection />
    </Box>
  );
};

export default PortfolioPage;
