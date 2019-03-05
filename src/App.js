import React, { Component } from 'react'
import styled from 'styled-components'

// Components
import ProgressCard from './components/KPI/ProgressCard/ProgressCard'

const Root = styled.div`
  width: 100vw
  height: 100%
  background: #fff
  display: flex
  flex-direction: column
  font-family: Roboto
`

const Header = styled.header`
  width: 100%
  height: 80px
  display: flex
  justify-content: center
  align-items: center
  font-size: 2rem
  background: #222
  color: #ccc
`

const DemoContainer = styled.div`
  padding: 0 10px
  display: flex
`

class App extends Component {
  render() {
    return (
      <Root>
        <Header>React Component Sandbox</Header>
        <h2 style={{padding: '0 20px'}}>Circular Progress Bars</h2>
        <DemoContainer>
          <ProgressCard title="KPI 1" goal={100} actual={0} />
          <ProgressCard title="KPI 2" goal={250} actual={0} />
          <ProgressCard title="KPI 3" goal={500} actual={0} />
        </DemoContainer>
      </Root>
    )
  }
}

export default App
