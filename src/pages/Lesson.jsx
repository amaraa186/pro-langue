import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Button,
  Heading,
  Text,
  IconButton,
  TapArea,
  Module,
  Tabs,
  Video,
} from "gestalt";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import Header from "../partials/Header";
import Footer from "../partials/Footer";

const Lesson = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = React.useState(false);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <Box justifyContent="center" alignItems="center" display="flex">
                <Tabs
                  activeTabIndex={activeIndex}
                  onChange={({ activeTabIndex, event }) => {
                    event.preventDefault();
                    setActiveIndex(activeTabIndex);
                  }}
                  tabs={[
                    { text: "Видео хичээл" },
                    { text: "Шинэ үгс" },
                    { text: "Жишээ өгүүлбэр" },
                    { text: "Бататгах шалгалт" },
                  ]}
                />
              </Box>
              <Box>
                {activeIndex == 0 && (
                  <Box padding={4}>
                    <Video
                      accessibilityMaximizeLabel="Maximize"
                      accessibilityMinimizeLabel="Minimize"
                      accessibilityMuteLabel="Mute"
                      accessibilityPauseLabel="Pause"
                      accessibilityPlayLabel="Play"
                      accessibilityProgressBarLabel="Progress bar"
                      accessibilityUnmuteLabel="Unmute"
                      accessibilityHideCaptionsLabel="Hide captions"
                      //   accessibilityShowCaptionsLabel="Show captions"
                      aspectRatio={1024 / 435}
                      //   captions="https://iandevlin.github.io/mdn/video-player-with-captions/subtitles/vtt/sintel-en.vtt"
                      controls
                      onPlayError={({ error }) => error && setPlaying(false)}
                      onPlay={({ event }) => setPlaying(true)}
                      onControlsPlay={() => setPlaying(true)}
                      onControlsPause={() => setPlaying(false)}
                      onEnded={() => setPlaying(false)}
                      playing={playing}
                      loop
                      src="https://iandevlin.github.io/mdn/video-player-with-captions/video/sintel-short.mp4"
                    />
                  </Box>
                )}
                {activeIndex == 1 && (
                  <Box>
                    <Swiper
                      pagination={{
                        type: "progressbar",
                      }}
                      navigation={true}
                      modules={[Pagination, Navigation]}
                      className="mySwiper"
                    >
                      {[1, 2, 3, 4, 5].map((i) => (
                        <SwiperSlide key={i}>
                          <Box
                            justifyContent="center"
                            alignItems="center"
                            display="flex"
                            direction="column"
                            padding={8}
                          >
                            <Flex gap={{ row: 2, column: 2 }}>
                              <Heading>Wood</Heading>
                              <IconButton
                                icon="sound"
                                size="sm"
                                iconColor="gray"
                              />
                            </Flex>
                            <Heading>Үгийн утга : Мод</Heading>
                          </Box>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </Box>
                )}
              </Box>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Lesson;
