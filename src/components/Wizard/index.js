import { frwc64 } from '../../util/frwc64.js'
import WagmiButton from '../WagmiButton/index.js'
import React, { useState } from 'react';
import styled from "@emotion/styled";

const Wizard = () => {

    const options = ['background','body','head','prop','familiar','rune'];
    const [wizard, setWizard] = useState({});
    const [wizId, setWizardId] = useState('')

    function findWizard(id) {
        const int_id = parseInt(id);
        if(int_id > 10000 || int_id < 0) {
            alert('ERROR not a wizzy ID');
            return;
        }
        console.log(int_id);
        let wiz = frwc64.generateWizard(int_id);
        frwc64.renderWizard(wiz);
        setWizard(wiz);
        console.log(wizard);
    }

    function findComponent(c) {

    }

    return (
        <>
            <canvas width ="400" height="400"></canvas>
            <StyledInput placeholder='Wizard ID' type="number" onChange={e => setWizardId(e.target.value)}></StyledInput>
            <WagmiButton onClick={() => findWizard(wizId)}>
                Load Wizard
            </WagmiButton>
            <select>

            </select>
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