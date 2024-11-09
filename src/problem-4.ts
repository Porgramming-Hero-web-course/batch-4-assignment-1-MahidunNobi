{
    type propType={
        shape: "circle" | "rectangle",
        radius?: number,
        height?: number
        width?: number
    }
    
    const calculateShapeArea=({shape, radius, height, width}:propType)=>{
        if(shape === "circle"){
            return Math.PI * radius! * radius!
        }else if(shape === "rectangle"){
            return height! * width!
        }
    }
}