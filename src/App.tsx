import React from 'react'
import styled from 'styled-components'

export const App: React.FC = () => {
  console.log('aaa')
  const [state, setState] = React.useState<string>()
  return <Styled>hello</Styled>
}

const Styled = styled.h1`
  color: tomato;
`
