import React, { useEffect } from 'react'
import Header from '../components/header'

import '../index.css'

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="app">
      <Header />
      <div className="home-content">
        <div>
          <section className="hero">
            <small style={{ marginTop: '4rem', marginBottom: '1rem' }}>A SYNC Network project</small>
            <p className="title">Why Collection lists?</p>

            <p className="description" id="why-lists">
              Collection Lists aim to solve the problem of the community creating, discovering and maintaining lists
              of reputable NFT Projects in a way that is inclusive, transparent, decentralized and open source.
            </p>
            <p>
              As the community continues to evolve and mature, we are continuing to see sustained exponential
              growth in the number of NFT Collections being created and used by participants of the network.
            </p>
            <p>
              This is an exciting success of permissionless innovation enabled by the open nature of blockchain
              networks. Ethereum continues to prove out to be the most attractive platform for innovative projects in
              decentralized finance. This is not surprising because it has the best tooling and ecosystem, making it the
              best place for developers and entrepreneurs to build, as well as the most attractive place for users
              because of the diversity of products and rapidly improving tools.
            </p>
            <h2>The tradeoffs of permissionless innovation</h2>
            <p>
              The permissionless nature of Ethereum and the ease of creating tokens and NFTs also comes with tradeoffs. Since
              there are no central gatekeepers, it is up to the users and projects in the space to establish trust
              and reputation, as well as perform actions of moderation. How can users tell credible projects from scams?
            </p>
            <p>
              <a href="https://neonrain.io">NeonRain</a> is a marketplace that faces the issues of token reputation directly.
              The responsibility of curating the tokens that show up in the NeonRain Interface will be decenteralized and up
              to the broader community. This is important to protect the users of NeonRain, as no single entity is responsible
              for curating the NFT Collections that show up in the interface.
            </p>
            <p>
              The ability to moderate token inclusion carries too much power and responsibility in a single gatekeeper.
              That power residing solely on any team is against the ethos of the broader DeFi ecosystem as a whole.
            </p>
            <h2>Enter Collection lists</h2>
            <p>
              The goal of Collection Lists is to enable trust to emerge around reputable NFT Projects in a way that is aligned with
              the values of decentralization.
            </p>
            <p>
              The Ethereum community is known for solving problems as an ecosystem. Today exist numerous reputable
              projects who are responsible for maintaining trustworthy lists of NFT projects. Until now, there hasn’t
              been a standard, interoperable way for those NFT projects to codify those lists and share them with the
              broader community.
            </p>
            <p>
              Collection Lists is a modified form of the Uniswap ERC20 token json schema standard that enables exactly this.
              Built specifically for the needs of NFT projects. Projects can encode lists of reputable tokens in a machine readable way.
              Anyone can make a list. These lists can then be imported into the NeonRain interface.
            </p>
            <p>
              We imagine Collection Lists being an important building block for the Ethereum ecosystem to self-govern
              reputation around NFT collections and hope to see collection lists used in other projects, as well as an ecosystem of
              tools, dashboards, and discussion forums to emerge around them.
            </p>
            <p>SYNC Network would like to thank Hayden Adams and the Uniswap team for their Hard work.</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home
