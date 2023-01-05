import cx from "./RadioButton.module.css";



const RadioButton = (props) => {
  
   
    
    return (
        <div>
            <div
               
                className="shadow-button-wrap w-inline-block"
               
               
            >
                <div className={cx.btntextt}>{props.title}</div>
                <div
                    className={cx.btnshadow2} 
                />
                <div
                    className={cx.btnshadow} 
                />
            </div>

        </div>
    )
}

export default RadioButton