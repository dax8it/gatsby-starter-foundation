import React from 'react'
import styled from '@emotion/styled'

const SectionWrapper = styled.div`
  background-color: #2D0E4C;
  color: white;
  margin-top: 2rem;
  padding: 80px 20px;
`

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center; // Center all content
`

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 2rem;
  letter-spacing: 0.05em;
`

const MainText = styled.p`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 3rem, 3.5rem);
  line-height: 1.2;
  font-weight: 300;
  margin: 0 auto; // Center the text block
  margin-bottom: 2rem;
  max-width: 90%;
`

const WhoWeAreSection = () => {
  return (
    <SectionWrapper>
      <ContentWrapper>
        <Title>Who We Are</Title>
        <MainText>
        We harness AI to supercharge creativity. Our team blends digital intelligence with artistic flair, crafting standout brands that resonate and perform.
        </MainText>
      </ContentWrapper>
    </SectionWrapper>
  )
}

export default WhoWeAreSection