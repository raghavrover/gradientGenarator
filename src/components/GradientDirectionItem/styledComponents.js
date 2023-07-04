import styled from 'styled-components'

export const GradientDirectionListItem = styled.li`
  list-style-type: none;
  margin-right: 6px;
`

export const GradientDirectionItemButton = styled.button`
  height: 37px;
  width: 100px;
  border: none;
  border-radius: 6px;
  margin-bottom: 10px;

  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;

  color: #334155;

  background-color: #ffffff;
  opacity: ${props => (props.isActive === true ? 1 : 0.5)};
`
