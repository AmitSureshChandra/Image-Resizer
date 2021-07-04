import {useState, useEffect} from 'react'
function ImageResizer(){
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");
    const [percentage, setPercentage] = useState(50);
    const [size_metric, setSizeMetric] = useState("percentage");
    const [file, setFile] = useState(null);
    const [resizeFile, setResizeFile] = useState(null);

    useEffect(() => {
        document.getElementById('percentage').checked = true
    }, [])

    let imageInput = () => {
        document.getElementById('image').click()
    }

    let loadImage = (event) => {
        setFile(event.target.files[0])
        document.getElementById('image').value = null
    }

    return (
        <div className="column justify-center align-center" style={{padding: '30px'}}>
            {
                file && <div align="center"><img width={100} src={URL.createObjectURL(file)} alt="selected" /></div>
            }

            {
                (file && file.name) && <div align="center" style={{marginBottom: "10px"}}> Image selected : <span style={{color: "#934", textDecoration: "underline"}}> {file.name} </span></div>
            }

            <div align="center">
                <button style={{   
                        color: "brown",
                        border: "2px solid",
                        borderRadius: "5px",
                        margin: "5px"
                    }}
                        onClick={imageInput}
                    >
                    Choose Image
                </button>

                <button disabled={!(file && file.name) } onClick={() => setFile(null)}>
                    Cancel 
                </button>

              
            </div>

            <div align="center" className="m2">
                Define the new size of your image using:
            </div>
            <div align="center" className="m2">

                <input type="radio" value="percentage" id="percentage" name="image_size" onClick={ event => { setSizeMetric(event.target.value)} } />
                <label htmlFor="percentage" >Percentage</label>

                <input type="radio" value="dimension" id="dimension" name="image_size" onClick={ event =>{ setSizeMetric(event.target.value)}} />
                <label htmlFor="dimension" >Dimension</label>

            </div>

            {
                (
                    ()=> {
                        if(size_metric === 'dimension'){
                            return (
                                    <div align="center">
                                        <input type="number" id="width" placeholder="width" value={width} onInput={e => setWidth(e.target.value)} style={{ maxWidth: "60px"}}/> X <input type="number" id="height" placeholder="height" value={height} onInput={e => setHeight(e.target.value)}  style={{ maxWidth: "60px"}}/> 
                                    </div>
                            )
                        }else{
                            return <div align="center">
                               <input type="range" min="1" max="100" id="percentage" placeholder="percentage" value={percentage} onInput={e => setPercentage(e.target.value)} /> {percentage} %
                            </div>
                        }
                    }
                )()
            }
            <div align="center" style={{marginTop: "30px"}}>
                <button  
                        disabled={(!((size_metric === 'dimension') &&  width && height) && !((size_metric === 'percentage') &&  percentage))
                    } 
                >Resize</button>
            </div>

            {
                resizeFile &&
                <div align="center">
                    <button style={{ marginLeft:"10px"}} disabled={!(resizeFile) }> Download </button>
               </div>
            }

            <input accept="image/*" id="image" onChange={ loadImage } hidden type="file" />
        </div>
    )
}

export default ImageResizer