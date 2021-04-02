import React, { useState, useRef } from 'react'
import Chevron from '../components/chevron'

function Accordion(props) {
  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')

  const content = useRef(null)

  function toggleAccordion() {
    const hasContent = props.content
    if (hasContent) {
      setActiveState(setActive === '' ? 'active' : '')
      setHeightState(
        setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
      )
    } else {
      setActiveState(setActive === '' ? 'empty' : '')
      setHeightState(setActive === 'empty' ? '0px' : `0px`)
    }
  }

  return (
    <div className="accordion__section group step">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <h4 className="accordion__title">{props.title}</h4>
        <Chevron className="accordion__icon" width={10} fill={'#777'} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  )
}

export default Accordion
