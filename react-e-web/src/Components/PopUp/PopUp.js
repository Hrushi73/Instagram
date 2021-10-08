import React from "react";

import { Wrapper, Content } from "./PopUp.styles";

const PopUp = ({ onClose,children }) => {
    return <Wrapper>
        <div className='Box'>
            <span class="close" onClick={onClose}>&times;</span>
            <Content>{children}</Content>
        </div>
    </Wrapper>
}

export default PopUp;