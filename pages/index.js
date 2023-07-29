import Navbar from "../components/navbar";
import Header from "../components/header";
import Services from "../components/services";
import Skills from "../components/skills";
import Team from "../components/team";
import Clients from "../components/clients";
import Contact from "../components/contact";
import Footer from "../components/footer";
export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Services></Services>
      <Skills></Skills>
      <Team></Team>
      <Clients></Clients>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
