import React from 'react'
import { Button } from '../components'

const PreFooter = () => {
  return (
    <section className="dark-grey-section">
      <div className="wrapper narrow centered">
        <h3>Why College of America</h3>
        <p>
          Here, you’ll have access to all the resources of a large public
          research university—and the personalized attention that makes you feel
          like part of a tight-knit community. This combination is why we’re
          nationally recognized for excellence and why our alumni outcomes can’t
          be beat.
        </p>
        <p>
          <b>Explore campus and see yourself at CoA:</b>
        </p>
        <Button variant="solid" color="grey">
          Take a Virtual Tour
        </Button>
      </div>
    </section>
  )
}

export default PreFooter
