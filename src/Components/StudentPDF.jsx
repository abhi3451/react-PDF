import { Document, Text } from "@react-pdf/renderer";
import WrapperPage from "./WrapperPDF";

import logo from "../assets/images/logo.png";
import logo2 from "../assets/images/logo2.png";
import upper from "../assets/images/upperDesign.png";
import lower from "../assets/images/lowerDesign.png";
import navigation from "../assets/images/navigation.png";
import CoverPagePDF from "./CoverPagePDF";
import MotivationPage from "./MotivationPage";
import CareerReportPage from "./CareerReportPage";
import MarketDemandPage from "./MarketDemandPage";

const StudentPDF = ({ data }) => {
  const assets = { logo, logo2, upper, lower, navigation };

  return (
    <Document>
      {/* 🟡 COVER PAGE inside Wrapper */}
      <WrapperPage
        showLogo={true}
        showUpper={false}
        showLower={true}
        showFooterText={true}
        showNavigation={true}
        assets={assets}
      >
        <CoverPagePDF name={data.name} />
      </WrapperPage>

      <MotivationPage showLogo={false}
        showUpper={true}
        showLogo2={true}
        showLower
        showFooterText
        showNavigation={false}
        assets={assets} 
        />

      <WrapperPage
        showLogo={false}
        showUpper={true}
        showLogo2={true}
        showLower
        showFooterText
        showNavigation={false}
        assets={assets}
      >
        <CareerReportPage skills={data?.guiding_star} />
      </WrapperPage>
      <WrapperPage
        showLogo={false}
        showUpper={true}
        showLogo2={true}
        showLower
        showFooterText
        showNavigation={false}
        assets={assets}
      >
        <MarketDemandPage
          marketDemand={data?.market_demand}
          name={data?.name}
        />
      </WrapperPage>
    </Document>
  );
};

export default StudentPDF;
