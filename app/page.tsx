import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import FirstSection from "./first-section/page";
import Carousel from "../components/ui/carousel";
import SecondSection from "./second-section/page";
import ExplainerSection from "./explainer-section/page";
import ThirdSection from "./third-section/page";
import FourthSection from "./fourth-section/page";
import PricingSection from "./pricing/page";
import FifthSection from "./fifth-section/page";
import Favicon from "./favicon.ico";
import LoginPage from "./login/page"; 
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Airpri",
  description:
    "framecastai.com: Generate professional AI headshots in minutes.",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default async function Index() {
  const cookiesStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookiesStore});

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/overview");
  }

  return (
    <div>
      <LoginPage/>
      {/* <FirstSection />
      <Carousel />
      <SecondSection />
      <ExplainerSection />
      <ThirdSection />
      <FourthSection />
      <PricingSection />
      <FifthSection /> */}
    </div>
  );
}
