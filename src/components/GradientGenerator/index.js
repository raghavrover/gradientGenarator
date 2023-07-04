import {Component} from 'react'
import {
  GradientContainer,
  Heading,
  Paragraph,
  DirectionsList,
  ColorsContainer,
  ColorContainer,
  InputElement,
  GenerateButton,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    directionId: gradientDirectionsList[0].directionId,
    gradientObject: {
      gradient1: '#8ae323',
      gradient2: '#014f7b',
      gradientDirection: 'top',
    },
  }

  getFirstColor = event => {
    this.setState({color1: event.target.value})
  }

  getSecondColor = event => {
    this.setState({color2: event.target.value})
  }

  getDirectionId = id => {
    this.setState({directionId: id})
  }

  getDirection = id => {
    const directionObject = gradientDirectionsList.find(eachObject => {
      if (eachObject.directionId === id) {
        return true
      }
      return false
    })

    return directionObject.value
  }

  generateGradient = () => {
    const {color1, color2, directionId} = this.state
    const direction = this.getDirection(directionId)
    const gradientObject = {
      gradient1: color1,
      gradient2: color2,
      gradientDirection: direction,
    }
    this.setState({
      gradientObject,
    })
  }

  render() {
    const {color1, color2, directionId, gradientObject} = this.state

    return (
      <GradientContainer
        data-testid="gradientGenerator"
        gradientDetails={gradientObject}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <DirectionsList>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              key={eachDirection.directionId}
              directionItemDetails={eachDirection}
              isActiveDirectionId={directionId === eachDirection.directionId}
              getDirectionId={this.getDirectionId}
            />
          ))}
        </DirectionsList>
        <Paragraph>Pick the Colors</Paragraph>
        <ColorsContainer>
          <ColorContainer>
            <Paragraph colorValue>{color1}</Paragraph>
            <InputElement
              type="color"
              value={color1}
              onChange={this.getFirstColor}
            />
          </ColorContainer>

          <ColorContainer>
            <Paragraph colorValue>{color2}</Paragraph>
            <InputElement
              type="color"
              value={color2}
              onChange={this.getSecondColor}
            />
          </ColorContainer>
        </ColorsContainer>
        <GenerateButton onClick={this.generateGradient}>
          Generate
        </GenerateButton>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
