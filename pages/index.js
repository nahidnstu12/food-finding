import Head from "next/head";
import { useState } from "react";
import TabOptions from "../components/common/TabOptions";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { getCorrectScreen } from "../utils/service";
import MobileHeader from "../components/layout/MobileHeader";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Delivary");
  return (
    <div className="pt-4">
      <Head>
        <title>Food Finding App</title>
        <meta
          name="description"
          content="Food Finding App, to find restrurant and their available food collection."
        />
        <link rel="icon" href="/logo.png" />       
      </Head>
      <div className="hidden md:block">
        <Header />
      </div>
      <div className="md:hidden max-width">
        <MobileHeader />
      </div>

      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
}
