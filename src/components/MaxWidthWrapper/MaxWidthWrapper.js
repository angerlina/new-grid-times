import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';

const MaxWidthWrapper = styled.div`
  position: relative;
  max-width: min(100%, calc(1200px + 32px * 2));
  margin-left: auto;
  margin-right: auto;
  --padding-around: 16px;
  padding-left: var(--padding-around);
  padding-right: var(--padding-around);

  @media ${QUERIES.laptopAndUp} {
    --padding-around: 32px;
  }
`;

export default MaxWidthWrapper;
