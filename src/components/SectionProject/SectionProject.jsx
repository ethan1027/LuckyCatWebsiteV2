import PropTypes from "prop-types";
import {
  Box,
  chakra,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import StatsCard from "@/components/StatsCard/StatsCard";

import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

const propTypes = {
  attributes: PropTypes.shape({
    project: PropTypes.shape({
      tagline: PropTypes.string,
      content: PropTypes.string,
    }),
  }).isRequired,
};

const SectionProject = ({
  attributes: {
    project: { tagline, content },
  },
}) => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")}>
      <Box
        maxW="7xl"
        mx={"auto"}
        pt={8}
        pb={16}
        px={{ base: 6, sm: 12, md: 12 }}
        id="whyluckycat"
      >
        <chakra.h1
          textAlign={"center"}
          fontSize={"4xl"}
          py={10}
          fontWeight={"bold"}
        >
          {tagline}
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 4 }}>
          <Box>
            <Text textColor={useColorModeValue("gray.800", "gray.300")}>
              {content}
            </Text>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 1 }} spacing={{ base: 5, lg: 8 }}>
            <StatsCard
              title={"Users"}
              stat={5000}
              digits={0}
              icon={<BsPerson size={"3em"} />}
            />
            <StatsCard
              title={"Servers"}
              stat={1000}
              digits={0}
              icon={<FiServer size={"3em"} />}
            />
            <StatsCard
              title={"Datacenters"}
              stat={700}
              digits={0}
              icon={<GoLocation size={"3em"} />}
            />
          </SimpleGrid>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

SectionProject.propTypes = propTypes;

export default SectionProject;
