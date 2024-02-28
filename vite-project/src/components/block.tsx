import React from "react";


interface BlockProps{
    value: string;

}

const Block : React.FC<BlockProps> = (props) => {
    return  <div className='block'>{props.value}</div>;
};

export default Block;