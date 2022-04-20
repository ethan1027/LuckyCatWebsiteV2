import {
  Stat,
  Flex,
  Box,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import AnimatedNumber from "animated-number-react";

//proptypes
const propTypes = {
  title: PropTypes.string,
  stat: PropTypes.number,
  icon: PropTypes.object,
  digits: PropTypes.number,
};

const defaultProps = {
  title: "",
  stat: 0,
  icon: "",
  digits: 2,
};

const StatsCard = ({ title, stat, icon, digits }) => {
  const formatValue = (value) => value.toFixed(digits);
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            <AnimatedNumber value={stat} formatValue={formatValue} />
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
};

StatsCard.propTypes = propTypes;
StatsCard.defaultProps = defaultProps;

export default StatsCard;
