import React from "react";
import {
  Box,
  Flex,
  Button,
  Heading,
  Text,
  Icon,
  TapArea,
  Module,
} from "gestalt";
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
              <Flex>
                <Box paddingX={2}>
                  <Heading size="500">About This Course</Heading>
                  <Box height={10} />
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Text>
                  <Box height={10} />
                  <Heading size="500">Сурах зүйлс</Heading>
                  <Box height={10} />
                  <Flex gap={{ row: 4, column: 4 }}>
                    <Box>
                      <Flex alignItems="center" gap={{ row: 2, column: 2 }}>
                        <Icon icon="check-circle" color="shopping" />
                        <Text>
                          Basic communication in English in everyday situations.
                        </Text>
                      </Flex>
                      <Flex alignItems="center" gap={{ row: 2, column: 2 }}>
                        <Icon icon="check-circle" color="shopping" />
                        <Text>
                          You will develop excellent understanding and listening
                          skills for this level.
                        </Text>
                      </Flex>
                      <Flex alignItems="center" gap={{ row: 2, column: 2 }}>
                        <Icon icon="check-circle" color="shopping" />
                        <Text>
                          You will learn more than 1000 common words and
                          phrases.
                        </Text>
                      </Flex>
                    </Box>
                    <Box>
                      <Flex alignItems="center" gap={{ row: 2, column: 2 }}>
                        <Icon icon="check-circle" color="shopping" />
                        <Text>
                          You will develop excellent understanding and listening
                          skills for this level.
                        </Text>
                      </Flex>
                      <Flex alignItems="center" gap={{ row: 2, column: 2 }}>
                        <Icon icon="check-circle" color="shopping" />
                        <Text>
                          Basic communication in English in everyday situations.
                        </Text>
                      </Flex>
                      <Flex alignItems="center" gap={{ row: 2, column: 2 }}>
                        <Icon icon="check-circle" color="shopping" />
                        <Text>
                          You will learn more than 1000 common words and
                          phrases.
                        </Text>
                      </Flex>
                    </Box>
                  </Flex>
                  <Box height={10} />
                  <Heading size="500">
                    Хичээлийг үзэхэд шаардагдах зүйлс
                  </Heading>
                  <Box height={10} />
                  <Box>
                    <Flex alignItems="center" gap={{ row: 2, column: 2 }}>
                      <Icon icon="check-circle" color="shopping" />
                      <Text>
                        You will develop excellent understanding and listening
                        skills for this level.
                      </Text>
                    </Flex>
                    <Flex alignItems="center" gap={{ row: 2, column: 2 }}>
                      <Icon icon="check-circle" color="shopping" />
                      <Text>
                        Basic communication in English in everyday situations.
                      </Text>
                    </Flex>
                    <Flex alignItems="center" gap={{ row: 2, column: 2 }}>
                      <Icon icon="check-circle" color="shopping" />
                      <Text>
                        You will learn more than 1000 common words and phrases.
                      </Text>
                    </Flex>
                  </Box>
                  <Box paddingY={6}>
                    <Box paddingX={8} height={1} color="darkWash" />
                  </Box>
                  <Box>
                    <Heading size="500">Хичээлүүд</Heading>
                    <Box height={10} />
                    <Module.Expandable
                      accessibilityExpandLabel="Expand the module"
                      accessibilityCollapseLabel="Collapse the module"
                      id="ModuleExample - default"
                      items={[
                        {
                          children: (
                            <Box>
                              <TapArea>
                                <Box paddingY={1}>
                                  <Text weight="bold" color="subtle">
                                    Видео хичээл
                                  </Text>
                                </Box>
                              </TapArea>
                              <TapArea>
                                <Box paddingY={1}>
                                  <Text weight="bold" color="subtle">
                                    Шинэ үг
                                  </Text>
                                </Box>
                              </TapArea>
                              <TapArea>
                                <Box paddingY={1}>
                                  <Text weight="bold" color="subtle">
                                    Шалгалт
                                  </Text>
                                </Box>
                              </TapArea>
                            </Box>
                          ),
                          title: "Lesson 1 : Beginner English",
                        },
                        {
                          children: <Text size="200">Children1</Text>,
                          title: "Lesson 2 : Pronunciation",
                        },
                        {
                          children: <Text size="200">Children1</Text>,
                          title: "Lesson 3 : Vocabulary",
                        },
                      ]}
                    ></Module.Expandable>
                  </Box>
                </Box>
                <Box
                  borderStyle="shadow"
                  justifyContent="center"
                  width={1200}
                  height={260}
                >
                  <Box paddingY={4} paddingX={6}>
                    <Box paddingY={2}>
                      <Heading size="400">Хичээлийн мэдээлэл</Heading>
                    </Box>
                    <Flex alignItems="center" gap={{ row: 2, column: 2 }}>
                      <Icon icon="video-camera" color="shopping" />
                      <Text>26 Видео хичээл</Text>
                    </Flex>
                    <Flex alignItems="center" gap={{ row: 2, column: 2 }}>
                      <Icon icon="play" color="shopping" />
                      <Text>Компьютерээр нэвтрэх боломж</Text>
                    </Flex>
                    <Flex alignItems="center" gap={{ row: 2, column: 2 }}>
                      <Icon icon="clock" color="shopping" />
                      <Text>Хэдэн ч удаа хамаагүй үзэх боломж</Text>
                    </Flex>
                    <Flex alignItems="center" gap={{ row: 2, column: 2 }}>
                      <Icon icon="file-unknown" color="shopping" />
                      <Text>Хичээл бүр бататгах шалгалттай</Text>
                    </Flex>
                  </Box>
                  <Box paddingX={6} paddingY={2}>
                    <TapArea>
                      <Box color="shopping" rounding={2} paddingY={3}>
                        <Text color="light" align="center" weight="bold">
                          Хичээл үзэх
                        </Text>
                      </Box>
                    </TapArea>
                  </Box>
                </Box>
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
