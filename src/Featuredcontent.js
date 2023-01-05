import React from 'react'
import cx from "./Featuredcontent.module.css"
import RadioButton from './RadioButton'

const Featuredcontent = (props) => {
  return (
    <div>
        <div
  className={cx.section} style={{background:"grey"}}
>
  <div className={cx.container}>
    <div className={cx.sectionintro}>
      <p className={cx.sectiontagline}>{props.title}</p>
      <h1 className={cx.head}>{props.heading}</h1>
      <p className={cx.textmd}>
     {props.para}
      </p>
    </div>
  </div>
  <div style={{display:"flex",justifyContent:"center",paddingTop:"40px"}}>
  <RadioButton title="Learn More"/>
  </div>
</div>

    </div>
  )
}

export default Featuredcontent