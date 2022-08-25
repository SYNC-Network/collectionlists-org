import React, { useState, memo } from 'react'
import styled from 'styled-components'
import Search from './search'
import CopyHelper from './copy'

import { toChecksumAddress } from 'ethereumjs-util'
import FilterResults from 'react-filter-search'

const TokenItem = styled.section`
  display: grid;
  max-width: 960px;
  grid-gap: 1rem;
  grid-template-columns: 1fr 128px  148px;
  margin-bottom: 1rem;
  a {
    color: #131313;
  }

  @media screen and (max-width: 960px) {
    display: grid;
    max-width: 960px;
    grid-gap: 1rem;
    grid-template-columns: 24px 96px 1fr;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 360px) {
    grid-template-columns: 24px 96px 150px;
  }
`
const TokenInfo = styled.span`
  display: grid;
  grid-template-columns: 35px 1fr;
  grid-gap: 1rem;
  height: fit-content;
  align-items: center;
  span {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const TokenIcon = styled.img`
  width: 40px;
  border-radius: 32px;
  background-color: white;
  height: 40px;
`
const TokenTagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 960px) {
    display: none;
  }
`

const TokenTag = styled.div`
  font-size: 11px;
  background-color: rgb(230, 230, 230, 0.4);
  color: #858585;
  padding: 0.25rem 0.35rem;
  margin-right: 0.2rem;
  border-radius: 4px;
  height: 14px;
  width: fit-content;
`

const TokenAddress = styled.span`
  display: grid;
  grid-template-columns: auto 16px;
  grid-gap: 0.5rem;
  height: fit-content;
  align-items: center;
`

export const ListItem = memo(function ListItem({ collection }) {
  return (
    <TokenItem>
      <TokenInfo>
        <TokenIcon
          className="token-icon"
          alt={`${collection.name} token icon`}
          src={
            !collection.logoURI
              // ? `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${toChecksumAddress(
              //     collection.address
              //   )}/logo.png`
              ? `data:image/png;base64,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`  
              : collection.logoURI.startsWith('ipfs')
              ? `https://ipfs.io/ipfs/${collection.logoURI.split('//')[1]}`
              : collection.logoURI
          }
          onError={(e) => {
            e.target.className = 'replace'
            e.target.src = 'https://raw.githubusercontent.com/feathericons/feather/master/icons/help-circle.svg'
          }}
        />

        <span className="hide-small">
          <a style={{ textAlign: 'right' }} href={`https://etherscan.io/address/${toChecksumAddress(collection.address)}`}>
            {collection.name}
          </a>
        </span>
      </TokenInfo>

      <TokenTagWrapper className="hide-small">
        {collection?.tags?.length > 0 && (
          <>
            <TokenTag>{collection.tags[0].toUpperCase()}</TokenTag>
            {collection.tags.length > 1 && <TokenTag>...</TokenTag>}
          </>
        )}
      </TokenTagWrapper>
      <TokenAddress>
        <a style={{ textAlign: 'right' }} href={`https://etherscan.io/address/${toChecksumAddress(collection.address)}`}>
          {`${toChecksumAddress(collection.address)?.slice(0, 6)}...${toChecksumAddress(collection.address)?.slice(38, 42)}`}
        </a>
        <CopyHelper toCopy={collection.address} />
      </TokenAddress>
    </TokenItem>
  )
})

const Title = styled.h1`
  font-size: 48px;
  line-height: 125%;
  @media screen and (max-width: 960px) {
  }
`

const TokenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 960px;
  width: 100%;
  height: fit-content;
  min-height: 60vh;
  margin-bottom: 2rem;
`

const ListWrapper = styled.section`
  @media screen and (max-width: 414px) {
  }
`

const ListTitle = styled.div`
  font-weight: 500;
  color: #1f1f1f80;
  display: grid;
  max-width: 960px;
  grid-gap: 1rem;
  grid-template-columns: 1fr 128px  148px;
  margin-bottom: 1rem;
  @media screen and (max-width: 414px) {
    display: none;
  }
`

const ListHeader = styled.div`
  display: flex;
  align-items: baseline;
  @media screen and (max-width: 640px) {
    flex-direction: column;
    margin-bottom: 2rem;
  }
`

export default function Collections({ collections }) {
  const [value, setValue] = useState('')

  function handleChange(e) {
    const { value } = e.target
    setValue(value)
  }

  return (
    <ListWrapper>
      <ListHeader className="flex-between" style>
        <Title>List Collections</Title>
        <Search handleChange={handleChange} value={value} setValue={setValue} />
      </ListHeader>

      <TokenWrapper>
        <ListTitle>
          <p className="hide-small">Name</p>

          <p className="hide-small">Tags</p>

          <p className="hide-small" style={{ textAlign: 'right' }}>
            Address
          </p>
        </ListTitle>

        <FilterResults
          value={value}
          data={collections}
          renderResults={(results) =>
            results.length === 0 ? 'None found!' : results.map((data, i) => <ListItem key={i} collection={data} />)
          }
        />
      </TokenWrapper>
    </ListWrapper>
  )
}
