import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      async="async"
      defer="defer"
      src="https://www.youvisit.com/tour/Embed/js3"
    >
      {' '}
    </script>,
  ])
}
