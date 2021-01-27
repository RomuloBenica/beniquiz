import React, { useState } from 'react';
import { useRouter } from 'next/router';

import styled from 'styled-components';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Head from 'next/head';

import db from '../db.json';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
const Background = styled.div`
  background-image: url(${db.bg});
  display:flex;
  flex-direction:column;
  align-items:center;

  flex:1;
  background-size: cover;
  background-position: center;
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Beniquiz</title>

      </Head>
      <QuizContainer>
        <QuizLogo></QuizLogo>
        <Widget>
          <Widget.Header>
            <h1>Titulo</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function Submit(event) {
              event.preventDefault();

              router.push(`/quiz?${name}`);
            }}>
              <input 
                placeholder="Diga seu nome:" 
                onChange={function (infosDeEvento) {
                  setName(infosDeEvento.target.value)
                }}
                value={name}
              />
              <button type="submit" disabled={name.length === 0} >
                Jogar, {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>

          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https:github.com/RomuloBenica" />
    </QuizBackground>
  )
}
 