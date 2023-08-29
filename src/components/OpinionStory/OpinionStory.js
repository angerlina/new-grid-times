import React from 'react';
import styled from 'styled-components/macro';
import {QUERIES} from "../../constants";

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <Container href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </Container>
  );
};

const Container = styled.a`
  --opinion-border-bottom: solid var(--color-gray-300) 1px;
  --opinion-padding: 16px;
  @media ${QUERIES.tabletOnly} {
    --opinion-border-bottom: none;
    --opinion-padding: 0;
  }
  flex: 1;
  :not(:last-of-type) {
    border-bottom: var(--opinion-border-bottom);
    padding-bottom: var(--opinion-padding);
  }
  :not(:first-of-type) {
    padding-top: var(--opinion-padding);
  }

`

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  @media ${QUERIES.tabletOnly} {
    display: revert;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
