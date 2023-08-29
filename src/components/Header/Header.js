import React from 'react';
import styled from 'styled-components/macro';
import {Menu, Search, User} from 'react-feather';

import {QUERIES} from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
    return (
        <HeaderWrapper>
            <SuperHeader>
                <Row>
                    <ActionGroup>
                        <button>
                            <Search size={24}/>
                        </button>
                        <button>
                            <Menu size={24}/>
                        </button>
                    </ActionGroup>
                    <ActionGroup>
                        <button>
                            <User size={24}/>
                        </button>
                    </ActionGroup>
                </Row>
            </SuperHeader>
            <MobileHeader>
                <Logo/>
            </MobileHeader>
            <DesktopHeader>
                <DesktopActionGroupWrapper>
                        <button>
                            <Search size={24}/>
                        </button>
                        <button>
                            <Menu size={24}/>
                        </button>
                </DesktopActionGroupWrapper>
                <Logo/>
                <SubscribeSectionWrapper>
                    <SubscribeSection>
                        <Button>Subscribe</Button>
                        <AlreadySubscriber>
                            Already a subscriber?
                        </AlreadySubscriber>
                    </SubscribeSection>
                </SubscribeSectionWrapper>
            </DesktopHeader>
        </HeaderWrapper>
    );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const HeaderWrapper = styled.header`
  --font-size-logo: 3rem;
  --current-date-top-margin: -1rem;
  @media ${QUERIES.laptopAndUp} {
    --font-size-logo: 4rem;
    --current-date-top-margin: -1.18rem;
  }
`
const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;
  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */

  svg {
    display: block;
  }
`;

const MobileHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const DesktopActionGroupWrapper = styled(ActionGroup)`
  flex: 1`


const DesktopHeader = styled(MaxWidthWrapper)`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 72px;
    margin-top: 16px;
    height: 98px;
  }
`

const SubscribeSectionWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  height: 100%;
`
const SubscribeSection = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  justify-content: center;
`

const AlreadySubscriber = styled.a`
  font-size: 0.875rem;
  font-style: italic;
  text-decoration: underline;
  color: var(--color-gray-900);
  position: absolute;
  bottom: 0;
`


export default Header;
