import React from 'react'
import cx from "./Faeturedcards.module.css"

const Featuredcards = (props) => {
  return (
    <div>
        <div className="section" style={{backgroundColor:"white"}}>
  <div className="container">
    <div className={cx.sectionintropush}>
      <h2 className="section-title">Our Best tEam</h2>
      <p className={cx.textmd}>Make sales even when you’re offline.
      </p>
    </div>
  </div>
  <div className="container">
    <div className="w-dyn-list">
      <div role="list" className={cx.gridthirds}>
        <div role="listitem" className="flex w-dyn-item">
          <div
            className={cx.cardwrap} style={{backgroundColor:"white"}}
          >
            <div
              style={{
                backgroundImage:
                  'url("https://assets-global.website-files.com/617825a38a48f37525a3c16f/619d1d67fd0195e2f6a60a2f_jesse-enkamp.png")'
              }}
              className={cx.cscardthumbnailwrap}
            >
             
            </div>
            <div className={cx.cardcontent}>
              <div className={cx.cscardcontent}>
                <h3 className={cx.textmd} style={{fontWeight:"700"}}>{props.contenttitle1}</h3>
                <h4 style={{ color: "#98282a" }} className={cx.textmd}>
               {props.contenttitle1para}
                </h4>
              </div>
              <div className="text-small top-auto">
                <strong>Read More -&gt;</strong>
              </div>
            </div>
          </div>
        </div>
        <div role="listitem" className="flex w-dyn-item">
          <div
            className={cx.cardwrap} style={{backgroundColor:"white"}}
          >
            <div
              style={{
                backgroundImage:
                  'url("https://assets-global.website-files.com/617825a38a48f37525a3c16f/619d1d67fd0195e2f6a60a2f_jesse-enkamp.png")'
              }}
              className={cx.cscardthumbnailwrap}
            >
             
            </div>
            <div className={cx.cardcontent}>
              <div className={cx.cscardcontent}>
                <h3 className={cx.textmd} style={{fontWeight:"700"}}>{props.contenttitle2}</h3>
                <h4 style={{ color: "#98282a" }} className={cx.textmd}>
                {props.contenttitle2para}
                </h4>
              </div>
              <div className="text-small top-auto">
                <strong>Read More -&gt;</strong>
              </div>
            </div>
          </div>
        </div>
        <div role="listitem" className="flex w-dyn-item">
          <div
            className={cx.cardwrap} style={{backgroundColor:"white"}}
          >
            <div
              style={{
                backgroundImage:
                  'url("https://assets-global.website-files.com/617825a38a48f37525a3c16f/619d1d67fd0195e2f6a60a2f_jesse-enkamp.png")'
              }}
              className={cx.cscardthumbnailwrap}
            >
             
            </div>
            <div className={cx.cardcontent}>
              <div className={cx.cscardcontent}>
                <h3 className={cx.textmd} style={{fontWeight:"700"}}>{props.contenttitle3}</h3>
                <h4 style={{ color: "#98282a" }} className={cx.textmd}>
                    {props.contenttitle3para}
                </h4>
              </div>
              <div className="text-small top-auto">
                <strong>Read More -&gt;</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Featuredcards