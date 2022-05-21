import { frwc64 } from '../../util/frwc64.js'
import WagmiButton from '../WagmiButton/index.js'
import React, { useState } from 'react';
import styled from "@emotion/styled";

const Wizard = () => {
    function findWizard(id) {
        const int_id = parseInt(id);
        console.log(id);
        let wiz = frwc64.generateWizard(parseInt(id));
        console.log(wiz);
        frwc64.renderWizard(wiz);
    }

    const [wizard, setWizard] = useState('');

    return (
        <>
            <canvas width ="400" height="400"></canvas>
            <StyledInput placeholder='Wizard ID' type="number" onChange={e => setWizard(e.target.value)}></StyledInput>
            <WagmiButton onClick={() => findWizard(wizard)}>
                Load Wizard
            </WagmiButton>
            {/* <WagmiButton onClick={() => findWizard(x)}>
                Load Component
            </WagmiButton> */}
        </>
    )
}

const StyledInput = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(p) => p.color};
    color: black;
    cursor: pointer;
    border: none;
    border: 3px solid black;
    padding: 1rem 1.6rem;
    font-weight: 500;
    font-size: 1.6rem;
    text-transform: uppercase;
    min-width: 180px;
    -webkit-box-shadow: 4px 4px 0px 0px #000000;
    box-shadow: 4px 4px 0px 0px #000000;

    &:focus {
        outline: none;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type=number] {
        -moz-appearance: textfield;
    }
`;

export default Wizard;