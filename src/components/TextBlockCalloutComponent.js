import React from 'react'
import {
  TextBlockCallout,
  SingleQuote,
  MainCopy,
  AuthorGroup,
  Dash,
  Author,
} from './TextBlockCallout.style'

const TextBlockCalloutComponent = ({
  author = 'Mia Carmichael',
  mainCopy = 'I’VE FOUND A SECOND FAMILY AT BEAR',
  singleQuote = 'https://static.overlay-tech.com/assets/282530fd-4f44-4cc0-b5fa-540bde33403c.svg',
}) => {
  return (
    <TextBlockCallout>
      <SingleQuote alt="" src={singleQuote} />
      <MainCopy>{mainCopy}</MainCopy>
      <AuthorGroup>
        <Dash>-</Dash>
        <Author>{author}</Author>
      </AuthorGroup>
    </TextBlockCallout>
  )
}

export default TextBlockCalloutComponent
