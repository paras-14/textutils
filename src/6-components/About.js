import React,{useState} from 'react'

export default function About() {
    const [MyStyle, setMyStyle] = useState({
        color:'red',
        backgroundColor:'orange',
    })

    const [btnText,setBtnText]=useState("Enable White Mode")
    const [paras,SetParas]=useState({
        color:'white',
        backgroundColor:'grey',
    })

    

    const toggleStyle=()=>{
        if(MyStyle.color==='red'){
            setMyStyle({
                color:'black',
                backgroundColor:'white',
                border:"3px solid",
                borderColor:"grey",
            })
            setBtnText("Enable orange Mode");
            SetParas({
                color:'white',
                backgroundColor:'grey',
            })
            
        }
        else{
            setMyStyle({
                color:'red',
                backgroundColor:'orange',
                border:"3px solid",
                borderColor:"red",
            })
            setBtnText("Enable white Mode");
            SetParas({
                color:'yellow',
                backgroundColor:'red',
    
            })
        }
    }

  return (
    <div className="container" style={MyStyle}>
    <h1 className="my-3">About Us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample" style={MyStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body" style={paras}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body" style={paras}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body" style={paras}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
            </div>
        <div className="container my-3">
            <button type="button" onClick={toggleStyle} class="btn btn-danger">{btnText}</button>
        </div>
    </div>
  )
}
