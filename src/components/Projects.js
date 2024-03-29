// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>MeeshySwap</h3>
                    <img src={uniswap} alt="Uniswap Swap Page" />
                    <p>
                        Decentralized Crypto Swap that my girlfriend 
                        approves of. 
                    </p>

                    <a href="https://uniswap.org/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/Uniswap/v2-core" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>PoliPics NFT's</h3>
                    <img src={compound} alt="Compound Landing Page" />
                    <p>
                        A trading card game of famous US Presidents
                        I'm developing. 
                    </p>

                    <a href="https://compound.finance/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/compound-finance/compound-protocol" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Columbia Project</h3>
                    <img src={aave} alt="Aave Landing Page" />
                    <p>
                        Collaberative project from my time at 
                        Columbia's Fintech Bootcamp.
                    </p>

                    <a href="https://aave.com/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/aave/aave-v3-core" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
