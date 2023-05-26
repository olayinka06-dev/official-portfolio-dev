import { AiOutlineHtml5 } from 'react-icons/ai';
import { TiCss3 } from 'react-icons/ti';
import { GrReactjs } from 'react-icons/gr';
import { TiBrandReactNative, TiBrandMongodb } from 'react-icons/ti';
import { FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiRedux } from 'react-icons/si';

const ServiceData = [
    {
      website: [
        "Bank Website",
        "Chat Website",
        "E-commerce website",
        "Social media platform",
        "Video streaming Website",
      ],
      languages: [
        { name: "HTML", icon: <AiOutlineHtml5 /> },
        { name: "CSS", icon: <TiCss3 /> },
        { name: "React", icon: <GrReactjs /> },
        { name: "Node Js", icon: <FaNodeJs /> },
        { name: "Mongo DB", icon: <SiMongodb /> },
        { name: "Mongoose", icon: <SiMongodb /> },
        { name: "Socket.IO", icon: <GrReactjs /> },
        { name: "Redux", icon: <SiRedux /> },
      ],
    },
    {
      app: [
        "Bank Application",
        "Chat Application",
        "E-commerce App",
        "Social media platform",
        "Video streaming app",
      ],
      languages: [
        { name: "HTML", icon: <AiOutlineHtml5 /> },
        { name: "CSS", icon: <TiCss3 /> },
        { name: "React Native", icon: <TiBrandReactNative /> },
        { name: "Node Js", icon: <FaNodeJs /> },
        { name: "Mongo DB", icon: <SiMongodb /> },
        { name: "Mongoose", icon: <TiBrandMongodb /> },
        { name: "Socket.IO", icon: <GrReactjs /> },
        { name: "Redux", icon: <SiRedux /> },
      ],
    },
  ];
  
  export default ServiceData;
  