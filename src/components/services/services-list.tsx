import { Box } from "@chakra-ui/react";
import ServicesCard from "./services-card";

export default function ServicesList() {
  return (
    <div
      className="flex flex-col bg-[#FFFFFF] "
      style={{
        background: "#FFFFFF",
      }}
    >
      <Box mb={40}>
        <ServicesCard
          img="/services/web-service.svg"
          header="Web Development"
          placement="right"
          text="GoNCode, we transform your ideas into digital masterpieces. Our Web
          Development team specializes in creating sleek, responsive, and
          high-performing websites tailored to your unique needs. With
          cutting-edge technology and a passion for perfection, we ensure your
          website not only looks fantastic but also delivers an unparalleled
          user experience. Trust us to elevate your online presence and connect
          you with your audience in the most engaging way possible."
        />
        <ServicesCard
          img="/services/UI-service.svg"
          header="UI/UX + Graphic Design"
          placement="left"
          text="Design is the silent ambassador of your brand, and at GoNCode,
           we speak the language fluently. Our UI/UX and Graphic Design services
            focus on creating visually captivating and user-friendly designs that 
            communicate your brand's story and values. Our designers are artisans
             and strategists, making sure every color, typography, and layout choice 
             enhances the user's experience and engagement. Let us design the face of 
             your digital presence that's not only beautiful but also strategically sound"
        />
        <ServicesCard
          img="/services/mobile-service.svg"
          header="Mobile Development"
          placement="right"
          text="Step into the future of mobile experiences with GoNCode's Mobile
           Development services. Our expertise in developing both Android and iOS
            applications ensures your product resonates with a broad audience.
             We blend functionality with creativity, crafting mobile solutions
              that are not only visually stunning but also intuitively easy to use.
               From concept to launch, our team is dedicated to turning your vision
                into a mobile app that stands out in the crowded marketplace"
        />
        <ServicesCard
          img="/services/blockchain-service.svg"
          header="Blockchain Development"
          placement="left"
          text="In the cutting-edge world of Blockchain, GoNCode stands as a beacon of
           innovation. Our Blockchain Development services are at the forefront of 
           decentralized technology, offering solutions ranging from smart contracts 
           to complete blockchain networks. We empower your business with secure, transparent,
            and efficient blockchain applications, tailored to revolutionize how you operate 
            and interact in the digital domain. With GoNCode, embark on a journey to harness
             the full potential of blockchain technology"
        />
      </Box>
    </div>
  );
}
