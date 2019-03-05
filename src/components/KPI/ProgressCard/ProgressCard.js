import React, { Component } from 'react'
import styled from 'styled-components'

const Card = styled.div`
  width: fit-content
  height: fit-content
  margin: 10px
  padding: 10px 20px
  border: 1px solid #ccc
  font-family: Roboto
  display: flex
  flex-direction: column
  align-items: center
  transition: .25s

  :hover {
    cursor: pointer
    box-shadow: 0px 0px 8px #ccc
  }
`

const Title = styled.p`
  margin: 0 0 10px 0
  padding: 0
`

const GraphBackground = styled.div`
  position: relative
  width: 200px
  height: 200px
  background: ${props => props.bgColor || '#ddd'}
  border-radius: 50%
  display: flex
  justify-content: center
  align-items: center
`

const GraphSVG = styled.svg`
  width: 200px
  height: 200px
  transform: rotate(-90deg)
`

const GraphCircle = styled.circle`
  fill: transparent
  stroke: ${props => {
    if (props.percent >= 70) {
      return 'green'
    } else if (props.percent >= 45) {
      return 'goldenrod'
    } else if (props.percent >= 0) {
      return 'firebrick'
    }
  }}
  stroke-width: 30
  r: 85
  cx: 100
  cy: 100
  transition: .35s

  ${props => {
    let radius = 85
    let circumference = radius * 2 * Math.PI
    let offset = circumference - props.percent / 100 * circumference

    return `
    stroke-dasharray: ${circumference} ${circumference}
    stroke-dashoffset: ${offset}
    `
  }}
`

const GraphText = styled.span`
  position: absolute
  height: 140px
  width: 140px
  border-radius: 50%
  font-size: 2rem
  background: #fff
  display: flex
  justify-content: center
  align-items: center
`

const Parameters = styled.div`
  width: 100%
  margin: 10px 0
  display: flex
`

const ParameterTitles = styled.div`
  flex: 1
  padding-right: 20px
`

const ParameterTitle = styled.p`
  margin: 6px 0
  padding: 0
  text-align: right
`

const ParameterValues = styled.div`
  flex: 1
  padding-left: 20px
`

const ParameterValue = styled.p`
  margin: 6px 0
  padding: 0
  text-align: left
`

class ProgressCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount = () => {
    setInterval(() => {
      if (this.state.count < this.props.goal) {
        this.setState({ count: this.state.count + 1 })
      } else if (this.state.count === this.props.goal) {
        this.setState({ count: 0 })
      }
    }, 100)
  }


  render() {
    return (
      <Card>
        <Title>{this.props.title || 'KPI Title'}</Title>
        <GraphBackground bgColor={this.props.bgColor}>
          <GraphSVG>
            <GraphCircle
              fgColor={this.props.fgColor}
              percent={Math.floor((this.props.actual || this.state.count) / this.props.goal * 100)}
            />
          </GraphSVG>
          <GraphText>{Math.floor((this.props.actual || this.state.count) / this.props.goal * 100)}%</GraphText>
        </GraphBackground>
        <Parameters>
          <ParameterTitles>
            <ParameterTitle>Goal: </ParameterTitle>
            <ParameterTitle>Actual: </ParameterTitle>
          </ParameterTitles>
          <ParameterValues>
            <ParameterValue>{this.props.goal || 100}</ParameterValue>
            <ParameterValue>{this.props.actual || this.state.count || 0}</ParameterValue>
          </ParameterValues>
        </Parameters>
      </Card>
    )
  }
}

export default ProgressCard
