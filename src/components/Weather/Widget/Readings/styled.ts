import styled from '@emotion/styled'

const Root = styled.div`
  text-align: left;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid #fff;
  svg {
    margin-right: 0.5rem;
  }
`

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0.25rem;
`

const Img = styled.img`
  width: 2rem;
  height: 2rem;
  filter: invert(1);
`

const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
`

export { Root, Section, Img, SectionWrapper }
