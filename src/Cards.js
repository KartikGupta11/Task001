import React from 'react'
import software from "../src/assets/software.svg"
import mobileapp from "../src/assets/webapp.svg"
import devops from "../src/assets/devops.svg"
import design from "../src/assets/design.svg"
import publish from "../src/assets/publish.svg"
import brush from "../src/assets/brush.svg"

const Cards = () => {
  return (
    <div className="section wf-section">
      <div className="container">
        <div className="discover-container">
          <div
            className="text-align-center"
          >
            <div className="text-2xl">
              Discover our services to scale your business.
            </div>
          </div>
          <div
            className="collection-list-wrapper w-dyn-list"
          >
            <div role="list" className="discover-categories w-dyn-items">
              <div
                style={{
                  backgroundColor: "hsla(47.294117647058826, 100.00%, 50.00%, 1.00)"
                }}
                role="listitem"
                className="discover-categories-item w-dyn-item"
              >
                <div
                  className="discover-categories-item-link w-inline-block"
                >
                  <img
                    src={software}
                    loading="lazy"
                    alt="Software Development"
                    className="discover-categories-item-icon"
                  />
                  <div
                    className="discover-categories-item-title"
                  >
                    10 Yeras experience
                  </div>
                  <div
                    className="discover-categories-item-description"
                  >
                    Maximize your ROI with our custom-built, high impact, secure, scalable, and meaningful products.
                  </div>
                </div>
                <div
                  className="discover-categories-item-tags-container"
                >
                  {/* <div className="text-xs">
                    <strong>Popular tags</strong>
                  </div> */}
                  
                </div>
              </div>

              <div
                style={{
                  backgroundColor:"rgb(255, 90, 68)"
                }}
                role="listitem"
                className="discover-categories-item w-dyn-item"
              >
                <div
                  className="discover-categories-item-link w-inline-block"
                >
                  <img
                    src={design}
                    loading="lazy"
                    alt="web app"
                    className="discover-categories-item-icon"
                  />
                  <div
                    
                    className="discover-categories-item-title"
                  >
                    Award Archivements
                  </div>
                  <div
                  
                    className="discover-categories-item-description"
                  >
                    We walk the extra mile to develop your web apps that are well-planned, highly scalable, and secure.
                  </div>
                </div>
                <div
                  
                  className="discover-categories-item-tags-container"
                >
                 
                  
                </div>
              </div>
              <div
                style={{ backgroundColor: "#23a094" }}
                // style={{
                //   backgroundColor: "hsla(7.039106145251395, 75.53%, 53.53%, 1.00)"
                // }}
                role="listitem"
                className="discover-categories-item w-dyn-item"
              >
                <div
                 
                
                  className="discover-categories-item-link w-inline-block"
                >
                  <img
                    src={mobileapp}
                    loading="lazy"
                    alt="mobile app"
                    className="discover-categories-item-icon"
                  />
                  <div
                   
                    className="discover-categories-item-title"
                  >
                    Fasr and perfect work
                  </div>
                  <div
                
                    className="discover-categories-item-description"
                  >
                    We create mobile apps for businesses with complex goals and challenges across all platforms and devices.
                  </div>
                </div>
                <div
               
                  className="discover-categories-item-tags-container"
                >
                  
                 
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "hsla(60.62499999999999, 88.89%, 57.65%, 1.00)"
                }}
                role="listitem"
                className="discover-categories-item w-dyn-item"
              >
                <div
               
                  className="discover-categories-item-link w-inline-block"
                >
                  <img
                    src={devops}
                    loading="lazy"
                    alt="DevOps"
                    className="discover-categories-item-icon"
                  />
                  <div
                    
                    className="discover-categories-item-title"
                  >
                   Solid team work
                  </div>
                  <div
               
                    className="discover-categories-item-description"
                  >
                  We embrace an open way of working by bringing a diverse set of voices and technologies together.
                  </div>
                </div>
                <div
             
                  className="discover-categories-item-tags-container"
                >
                 
                  
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "hsla(47.294117647058826, 100.00%, 50.00%, 1.00)"
                }}
                role="listitem"
                className="discover-categories-item w-dyn-item"
              >
                <div
                 
                  className="discover-categories-item-link w-inline-block"
                >
                  <img
                    src={brush}
                    loading="lazy"
                    alt="Design"
                    className="discover-categories-item-icon"
                  />
                  <div
                    
                    className="discover-categories-item-title"
                  >
                    Best client says
                  </div>
                  <div
                    
                    className="discover-categories-item-description"
                  >
                    We create designs that communicates clearly, stands out, and sells more.  
                  </div>
                </div>
                <div
                
                  className="discover-categories-item-tags-container"
                >
                 
                 
                </div>
              </div>




              <div
                style={{ backgroundColor: "#90a8ed" }}
                role="listitem"
                className="discover-categories-item w-dyn-item"
              >
                <div
                 
                  className="discover-categories-item-link w-inline-block"
                >
                  <img
                    src={publish}
                    loading="lazy"
                    alt="Writing & Publishing"
                    className="discover-categories-item-icon"
                  />
                  <div
               
                    className="discover-categories-item-title"
                  >
                    Money Back Guarantee
                  </div>
                  <div
                    
                    className="discover-categories-item-description"
                  >
                    We solve Your Business Problems
                   with Our Cloud Professional Services
                  </div>
                </div>
                <div
            
                  className="discover-categories-item-tags-container"
                >
                 
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Cards