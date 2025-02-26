import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 6rem;
  position: sticky;
  top: 10rem;
  height: fit-content;
  padding:50px;

  p {
    text-align: left;
    max-width: 400px;
    font-size: 18px;
  }

  .title {
    text-align: left;
    max-width: 450px;
    font-size: 48px;
    line-height: 125%;
    letter-spacing: 0.002em;
    color: #1f1f1f;
    margin: 0;
    font-family: 'Montserrat';
  }

  .icon {
    width: 48px;
  }

  .list {
    max-width: 960px;
  }

  a {
    color: #131313;
    font-family: 'Poppins';
  }

  .syncnetwork {
    color: #1982c8;
    font-family: 'Poppins';
  }

  @media screen and (max-width: 960px) {
    position: relative;
    top: initial;
    margin-top: 2rem;

    .title {
      font-size: 35px;
    }
  }
`

const HoverLink = styled.a`
  transition: box-shadow 0.25s ease, translate 0.25s ease;
  margin-top: 0.5rem;
  width: fit-content;
  :hover {
    box-shadow: -6px 6px 0px #d6fdff;
    translate: 1px -1px;
  }
`

export default function Header() {
  return (
    <Hero>
      <span style={{ marginBottom: '1rem' }}>
        A{' '}
        <a href="https://syncnetwork.io/" className="syncnetwork">
          SYNC Network
        </a>{' '}
        Project
      </span>

      <p className="title">The NFT Collection list standard.</p>

      <p style={{ fontSize: '20px', lineHeight: '150%' }} className="description" id="why-lists">
        Collection Lists is a community-led initiative to improve discoverability, reputation and trust in NFT Collection lists
        in a manner that is inclusive, transparent, and decentralized.
      </p>

      <Link className="hide-small" to="/why">
      {'->'} Why lists?
      </Link>

      <HoverLink
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/SYNC-Network/collection-lists#authoring-token-lists"
      >
        {'->'} Make your own
      </HoverLink>
      <HoverLink
        target="_blank"
        rel="noopener noreferrer"
        href="https://discord.gg/sync"
      >
        {'->'} Community
      </HoverLink>
    </Hero>
  )
}
