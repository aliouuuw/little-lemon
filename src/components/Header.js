import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior:'smooth' ,
        block: "start",
      });
    }
  };

  const [transval, setTransval] = useState(0);

  useEffect(() => {
    let prevscroll = 0;

    const handleScroll = () => {
      const currentscroll = window.scrollY;

      if (currentscroll > prevscroll){
        setTransval(-200);
      } else {
        setTransval(0);
      }
      prevscroll = currentscroll;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  return (
    <Box
      position="fixed"
      zIndex='banner'
      top={0}
      left={0}
      right={0}
      //translateY='-200'
      transform={`translateY(${transval}px)`}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            {
            socials.map((item, i) => <a href={item.url} key={i}><FontAwesomeIcon icon={item.icon} size="2x" style={{paddingRight:'10px', height:"20px"}}/></a>)
            }
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="/#projects" onClick={handleClick('projects')}>Projects</a>
              <a href="/#contact-me" onClick={handleClick('contactme')} >Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
