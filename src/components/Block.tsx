import React from 'react';

interface BlockProps {
    value?: string | null;
    blockId: string;
    onClick?: () => void;
    blockColor: string;
}

const Block: React.FC<BlockProps> = (props) => {
    return <div id={props.blockId} onClick={props.onClick} style = {{backgroundColor: props.blockColor}} className="block">{props.value}</div> 
   
};

export default Block;