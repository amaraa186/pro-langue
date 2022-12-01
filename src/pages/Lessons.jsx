import React from "react";
import { Box, Flex, Image, Heading, Text, Icon, TapArea } from "gestalt";
import { Link } from "react-router-dom";

import Header from "../partials/Header";
import Footer from "../partials/Footer";

const Lessons = (props) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Хичээлүүд</h1>
              </div>
              <Flex wrap gap={{ row: 6, column: 6 }} justifyContent="start">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Box
                    rounding={4}
                    borderStyle="shadow"
                    justifyContent="evenly"
                    width={350}
                    key={i}
                  >
                    <Box height={200} width={350}>
                      <Image
                        alt="image"
                        loading="lazy"
                        fit="cover"
                        naturalHeight={1}
                        naturalWidth={1}
                        src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                      />
                    </Box>
                    <Box paddingX={6} paddingY={2}>
                      <Heading size="500">French for Beginner</Heading>
                      <Text size="200">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Officiis officia, aliquid iusto necessitatibus
                        odio architecto cupiditate omnis. Totam corrupti ratione
                        facere necessitatibus voluptates modi, nam delectus non
                        placeat repudiandae quasi.
                      </Text>
                      <Box paddingY={4}>
                        <Flex alignItems="center" gap={{ row: 2, column: 2 }}>
                          <Box
                            rounding="circle"
                            width={35}
                            height={35}
                            color="shopping"
                            alignItems="center"
                            display="flex"
                            justifyContent="center"
                          >
                            <Icon icon="play" color="light" />
                          </Box>
                          <Text>26 Lesson</Text>
                        </Flex>
                      </Box>
                      <Box paddingY={2}>
                        <Box height={1} color="dark" />
                      </Box>
                      <Box>
                        <TapArea onTap={() => {}}>
                          <Box
                            justifyContent="center"
                            alignItems="center"
                            paddingX={4}
                            paddingY={3}
                            color="shopping"
                            rounding={2}
                          >
                            <Text color="light" align="center">
                              Хичээл үзэх
                            </Text>
                          </Box>
                        </TapArea>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Flex>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Lessons;
