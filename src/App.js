import Header from './components/Header';
import { useRef } from 'react';
import addToRefs from './services/addToRefs';
import Banner from './components/Banner';
import Footer from './components/Footer';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import FAQ from './components/FAQ';

export default function App() {
    const sections = useRef([]);

    return (
        <>
            <Header sections={sections} />
            <main className="main">
                <Banner refProp={el => addToRefs(el, sections)} />
                <About refProp={el => addToRefs(el, sections)} />
                <HowItWorks refProp={el => addToRefs(el, sections)} />
                <Tokenomics refProp={el => addToRefs(el, sections)} />
                <Roadmap refProp={el => addToRefs(el, sections)} />
                <Team />
                <section className="section section--bottom">
                    <FAQ refProp={el => addToRefs(el, sections)} />
                    <Footer sections={sections} />
                </section>
            </main>
        </>
    );
}
