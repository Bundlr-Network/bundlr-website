import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'

import Button from '../Button'
import { ButtonScheme } from '../Button/Button'
import { DevIcon } from '@/svg'
import SectionTitle from '../SectionTitle'
import Testimonial from '../Testimonial'
import { useInView } from 'react-intersection-observer'

const useHomeHorizontalScroll = () => {
  return {}
}

const HomeHorizontalScroll = () => {
  /**
   * Server Section
   */
  const serverControls = useAnimation()
  const imageControls = useAnimation()
  const [serverTitleRef, serverTitleInView] = useInView()
  const [serverDescriptionRef, serverDescriptionInView] = useInView()
  const [serverImageRef, serverImageInView] = useInView({
    threshold: 0.4
  })

  const serverVariants = {
    title: {
      visible: { opacity: 1 },
      hidden: { opacity: 0 }
    },
    description: {
      visible: { opacity: 1, duration: 2000 },
      hidden: { opacity: 0, duration: 2000 }
    },
    serverLeft: {
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: -50 }
    },
    serverRight: {
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: 50 }
    }
  }

  useEffect(() => {
    if (serverTitleInView) {
      serverControls.start('visible')
    }
  }, [serverControls, serverTitleInView])

  useEffect(() => {
    if (serverDescriptionInView) {
      serverControls.start('visible')
    }
  }, [serverControls, serverDescriptionInView])

  useEffect(() => {
    if (serverImageInView) {
      imageControls.start('visible')
    }
  }, [imageControls, serverImageInView])

  /**
   * Cloud Section
   */

  const cloudControls = useAnimation()
  const [cloudTitleRef, cloudTitleInView] = useInView()
  const [cloudDescriptionRef, cloudDescriptionInView] = useInView()
  const [cloudImageRef, cloudImageInView] = useInView()

  const cloudVariants = {
    title: {
      visible: { opacity: 1 },
      hidden: { opacity: 0 }
    },
    description: {
      visible: { opacity: 1, duration: 2000 },
      hidden: { opacity: 0, duration: 2000 }
    },
    cloud: {
      visible: { opacity: 1 },
      hidden: { opacity: 0 }
    }
  }

  useEffect(() => {
    if (cloudTitleInView) {
      cloudControls.start('visible')
    }
  }, [cloudControls, cloudTitleInView])

  /**
   * Successor Section
   */

  const successorControls = useAnimation()
  const successorImageControls = useAnimation()
  const [successorTitleRef, successorTitleInView] = useInView({
    threshold: 0.4
  })
  const [successorImageRef, successorImageInView] = useInView()

  const successorVariants = {
    title: {
      visible: { opacity: 1 },
      hidden: { opacity: 0 }
    },
    image: {
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 100 }
    }
  }

  useEffect(() => {
    if (successorTitleInView) {
      successorControls.start('visible')
    }
  }, [successorControls, successorTitleInView])

  useEffect(() => {
    if (successorImageInView) {
      successorImageControls.start('visible')
    }
  }, [successorImageControls, successorImageInView])

  /**
   * Conclusion Section
   */

  const conclusionControls = useAnimation()
  const conclusionImageControls = useAnimation()
  const [conclusionTitleRef, conclusionTitleInView] = useInView({
    threshold: 0.4
  })
  const [conclusionImageRef, conclusionImageInView] = useInView({
    threshold: 0.2
  })

  const conclusionVariants = {
    title: {
      visible: { opacity: 1 },
      hidden: { opacity: 0 }
    },
    image: {
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 100 }
    }
  }

  useEffect(() => {
    if (conclusionTitleInView) {
      conclusionControls.start('visible')
    }
  }, [conclusionControls, conclusionTitleInView])

  useEffect(() => {
    if (conclusionImageInView) {
      conclusionImageControls.start('visible')
    }
  }, [conclusionImageControls, conclusionImageInView])

  return (
    <>
      <div
        className="overflow-hidden w-screen h-screen flex flex-col items-center justify-center p-10 lg:p-24 relative top-0 left-0 bg-seashell -z-10 gap-10 lg:gap-0"
        style={
          {
            // boxShadow: '0 0 70px rgba(0,0,0,.2)'
          }
        }
      >
        <h2 className={'z-[99] text-center text-5xl lg:text-7xl'}>
          Data is Evolving
        </h2>
      </div>
      <div
        className="w-screen h-screen flex flex-col items-center justify-center lg:justify-between p-10 lg:p-24 relative top-0 left-0 bg-seashell -z-10 gap-10 lg:gap-0"
        style={
          {
            // boxShadow: '0 0 70px rgba(0,0,0,.2)'
          }
        }
      >
        <motion.h2
          ref={serverTitleRef}
          animate={serverControls}
          initial="hidden"
          variants={serverVariants.title}
          className={'z-[99] text-center text-5xl lg:text-7xl'}
        >
          On-Premise Servers
        </motion.h2>
        <motion.h3
          ref={serverDescriptionRef}
          className="font-robotoMono text-lg max-w-md text-center z-[99] leading-loose"
          initial="hidden"
          animate={serverControls}
          variants={serverVariants.description}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          In the internet’s early days, online data was stored in local servers.
          This was inconvenient and expensive for most people.
        </motion.h3>
        <div className="mb-36 lg:mb-0" />
        <img
          src={'/new/assets/home/server-left.webp'}
          className="absolute -bottom-48 -left-20 w-auto lg:hidden"
        />
        <motion.img
          ref={serverImageRef}
          animate={imageControls}
          variants={serverVariants.serverLeft}
          initial="hidden"
          src={'/new/assets/home/server-left.webp'}
          className="absolute bottom-56 lg:-bottom-8 -left-20 hidden lg:block w-[500px]"
          transition={{ delay: 0.6 }}
        />
        <motion.img
          ref={serverImageRef}
          animate={imageControls}
          variants={serverVariants.serverRight}
          initial="hidden"
          src={'/new/assets/home/server-right.webp'}
          className="absolute bottom-56 lg:-bottom-8 -right-20 hidden lg:block w-[500px]"
          transition={{ delay: 0.6 }}
        />
      </div>
      <div
        className="overflow-hidden w-screen h-screen flex items-center justify-center text-7xl relative top-0 left-0 bg-seashell -z-10"
        style={
          {
            // boxShadow: '0 0 70px rgba(0,0,0,.2)'
          }
        }
      >
        <div className="h-full w-screen	shrink-0 px-5 lg:px-[79px] pt-[120px]">
          <div className="w-full lg:w-2/5 ml-auto">
            <motion.h2
              className="z-[99] text-center text-5xl lg:text-7xl lg:text-left"
              ref={cloudTitleRef}
              animate={cloudControls}
              initial="hidden"
              variants={cloudVariants.title}
            >
              The Cloud
            </motion.h2>
            <motion.div
              className="flex flex-col gap-6 mt-12 ml-0 lg:ml-16 items-center justify-center lg:items-start"
              ref={cloudDescriptionRef}
              animate={cloudControls}
              initial="hidden"
              variants={cloudVariants.description}
            >
              <p className="font-robotoMono text-base max-w-md z-10 leading-loose text-center lg:text-left">
                With the advent of the cloud, data storage became more
                affordable, convenient, and performant.
              </p>
              <p className="font-robotoMono text-base max-w-md z-10 text-center lg:text-left">
                But, data centralized in the cloud.
              </p>
            </motion.div>
          </div>
          {/* center of screen absolute image */}
          <motion.img
            ref={cloudImageRef}
            animate={cloudControls}
            variants={cloudVariants.cloud}
            initial="hidden"
            transition={{
              delay: 0.6
            }}
            src="/new/assets/home/cloud.webp"
            alt="cloud"
            className="absolute bottom-52  md:bottom-10 lg:-left-32 left-4 right-0 mx-auto lg:max-w-[70%] scale-110 md:scale-100"
          />
        </div>
      </div>
      <div
        className="overflow-hidden w-screen h-screen flex items-center justify-center text-7xl relative top-0 left-0 bg-seashell -z-10"
        style={
          {
            // boxShadow: '0 0 70px rgba(0,0,0,.2)'
          }
        }
      >
        <div className="flex flex-col gap-10 mt-36 px-6 lg:px-0 justify-center items-center mb-72 lg:mb-48 lg:mb-72">
          <motion.h2
            className="max-w-5xl z-10 text-center text-4xl lg:text-6xl"
            ref={successorTitleRef}
            animate={successorControls}
            initial="hidden"
            variants={successorVariants.title}
          >
            The Next Generation of Data Infrastructure
          </motion.h2>
          <motion.h3
            className="font-robotoMono text-base max-w-2xl z-10 text-center leading-loose"
            animate={successorControls}
            initial="hidden"
            variants={successorVariants.title}
          >
            Through cryptographic guarantees and trustless provenance, you can
            now secure your data, make it censorship resistant and available
            forever – all while retaining the performance and convenience that
            you expect
          </motion.h3>
        </div>
        <motion.img
          ref={successorImageRef}
          animate={successorImageControls}
          initial="hidden"
          variants={successorVariants.image}
          src="/new/assets/home/data-sphere.webp"
          alt=""
          className="hidden lg:block absolute -bottom-[180px] md:-bottom-[580px] lg:bottom-auto lg:-left-[450px] block bg-cover w-[700px]"
        />
        <motion.img
          ref={successorImageRef}
          animate={successorImageControls}
          initial="hidden"
          variants={successorVariants.image}
          src="/new/assets/home/data-sphere-flop.webp"
          alt=""
          className="absolute -bottom-[140px] md:-bottom-[580px] lg:bottom-auto -right-[140px] lg:-right-[450px] block bg-cover w-[700px]"
        />

        {/* <div className="hidden lg:flex absolute top-0 right-0 overflow-hidden transform rotate-180">
          <img
            src="/assets/community/cta-blocks-2.png"
            className="w-full h-full rounded-lg"
            alt="image1"
          />
        </div>
        <div className="lg:flex absolute -bottom-36 lg:top-0 left-0 overflow-hidden">
          <img
            src="/assets/community/cta-blocks-2.png"
            className="w-full h-full rounded-lg"
            alt="image2"
          />
        </div> */}

        {/* <motion.img
          className="absolute bottom-0 left-0 right-0 mx-auto hidden lg:block"
          ref={successorImageRef}
          animate={successorImageControls}
          initial="hidden"
          variants={successorVariants.image}
          src="/assets/home/dataverse.png"
          alt="dataverse"
        />
        <motion.img
          className="absolute -bottom-36 md:-bottom-[496px] left-0 right-0 mx-auto lg:hidden"
          animate={successorControls}
          initial="hidden"
          variants={successorVariants.image}
          src="/assets/home/dataverse-mobile.png"
          alt="dataverse"
        /> */}
      </div>
      <div
        className="z-[9999] bg-black overflow-hidden text-white w-screen h-screen flex items-start justify-center relative top-0 left-0 -z-[2]"
        style={
          {
            // boxShadow: '0 0 70px rgba(0,0,0,.2)'
          }
        }
      >
        <div className="flex flex-col gap-6 mt-36">
          <motion.h2
            className="text-center text-5xl lg:text-7xl font-fkDisplay z-10"
            ref={conclusionTitleRef}
            animate={conclusionControls}
            initial="hidden"
            variants={conclusionVariants.title}
          >
            Bundlr is the Trustless <br /> Source of Truth
          </motion.h2>
          <a
            className="self-center"
            href={'https://docs.bundlr.network/'}
            target="_blank"
            rel="noreferrer"
          >
            <Button scheme={ButtonScheme.white} className="z-[9999]">
              LEARN MORE
              <DevIcon />
            </Button>
          </a>
        </div>
        <motion.img
          ref={conclusionImageRef}
          animate={conclusionImageControls}
          initial="hidden"
          variants={conclusionVariants.image}
          // mobile and desktop image
          //  /assets/home/dataverse-mobile.png,
          // /assets/home/dataverse.png
          src="/new/assets/home/dataverse.webp"
          alt="dataverse"
          className="absolute bottom-0 left-0 right-0 mx-auto hidden md:flex"
        />
        <motion.img
          animate={conclusionControls}
          initial="hidden"
          variants={conclusionVariants.image}
          // mobile and desktop image
          //  /assets/home/dataverse-mobile.png,
          // /assets/home/dataverse.png
          src="/assets/home/dataverse-mobile.png"
          alt="dataverse"
          className="absolute -bottom-36 md:-bottom-[468px] left-0 right-0 mx-auto lg:hidden"
        />
      </div>
    </>
  )
}

export default HomeHorizontalScroll
