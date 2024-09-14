import AboutMe from "@/components/Aboutme";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
 

export default function Home() {
  return (
   <div>
    <Hero/>
    <main  >
    <AboutMe/>
    <Service/>
    <Featured/>
    </main>
   </div>
  )
}
