import React from 'react'
import { Button } from '../components'

const PreFooter = () => {
  return (
    <section className="dark-grey-section">
      <div className="wrapper narrow centered">
        <h3>Why Bear University</h3>
        <p>
          Here, you’ll have access to all the resources of a large public
          research university—and the personalized attention that makes you feel
          like part of a tight-knit community. This combination is why we’re
          <a href=""> nationally recognized for excellence</a> and why our <a href="">alumni outcomes</a> can’t
          be beat.
        </p>
        <p>
          <strong>Explore campus and see yourself at Bear University:</strong>
        </p>
        <Button variant="solid" color="grey">
          Take a Virtual Tour
        </Button>
      </div>
    </section>
  )
}

export default PreFooter
