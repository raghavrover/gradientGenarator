import styled from 'styled-components'

export const GradientContainer = styled.div`
  min-height: 100vh;
  padding: 30px 20px 30px 20px;
  background-image: ${props => {
    const {gradientDetails} = props
    const {gradientDirection, gradient1, gradient2} = gradientDetails
    return `linear-gradient(to ${gradientDirection}, ${gradient1}, ${gradient2})`
  }};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 500;
  text-align: center;

  color: #ffffff;
`
export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: ${props => (props.colorText ? '14px' : '18px')};
  font-weight: 400;

  color: #ffffff79;
`

export const DirectionsList = styled.ul`
  padding-left: 0;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
export const ColorsContainer = styled.div`
  margin-bottom: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ColorContainer = styled.div`
  margin-right: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const InputElement = styled.input`
  height: 40px;
  width: 100px;
  border: none;
  border-radius: 10px;
  padding: 0;
  margin: 0;

  outline: none;
  cursor: pointer;

  background-color: transparent;
`

export const GenerateButton = styled.button`
  height: 38px;
  width: 100px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;

  color: #1e293b;
  background-color: #00c9b7;
`
