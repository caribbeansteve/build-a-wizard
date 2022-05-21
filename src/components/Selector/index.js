import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { getEllipsisTxt } from "../../helpers/formatter";

const Selector = () => {
  if (account) {
    return (
      <Wrapper>
        <StyledBadge>
          {account.ens?.name ?? getEllipsisTxt(account.address, 4)}
        </StyledBadge>
        <Disconnect onClick={onDisconnect}>
          <FontAwesomeIcon icon={faXmark} />
        </Disconnect>
      </Wrapper>
    );
  }

  return null;
};

const Wrapper = styled.div`
  border: 3px solid black;
  display: flex;
  // align-items: center;
  -webkit-box-shadow: 4px 4px 0px 0px #000000;
  box-shadow: 4px 4px 0px 0px #000000;
`;

export default Selector;