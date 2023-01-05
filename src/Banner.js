import React from 'react'
import headerhero from "../src/assets/heroheader2.webp"
import RadioButton from './RadioButton'

const Banner = (props) => {
  return (
    <div className="wf-section">
      <div className="grid-halves" style={{ minHeight: '80vh' }}>
        <div className="bg-pink border-right" style={{backgroundColor: props.textcolor}}>
          <div className="column-padding">
            <div className="tablet-centered">
              <div className="content-grid home-hero" style={{marginTop:"140px"}}> 
                <h1 className='craft-text'>{props.title}
                  <span className="line-break-fixed"></span>
                </h1>
                <p className="section-sub-head">{props.para}
                 
                </p>
                <RadioButton title="Learn More" href={"/case-studies"} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-yellow-dark" style={{backgroundColor: props.imgcolor}}>
          <div className="column-padding centered">
            <div className="callout-wrap">
              <img
                src={headerhero}
                loading="lazy"
                width={605}
                alt=""
                className="callout-image creator"
                style={{
                  willChange: "transform",
                  transform:
                    "translate3d(0px, 2.15316vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Banner
