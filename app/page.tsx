import Image from "next/image";
import { Hero } from "./pages/Hero";
import { Containerc } from "./pages/Container";
import { Screen3 } from "./pages/Screen3";
import { Screen4 } from "./pages/Screen4";
import AnimatedLogo from "./components/AnimatedLogo";
import { Logo } from "./components/Logo";
import { End } from "./components/End";

export default function Home() {
  return (

<div>
  <Hero/>
  <Containerc/>
  <Screen3/>
  <Screen4/>
  <Logo/>
  <End/>
</div>
  );
}
