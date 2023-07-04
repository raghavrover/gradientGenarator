import {
  GradientDirectionListItem,
  GradientDirectionItemButton,
} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionItemDetails, getDirectionId, isActiveDirectionId} = props
  const {displayText, directionId} = directionItemDetails

  const onDirectionChange = () => {
    getDirectionId(directionId)
  }

  return (
    <GradientDirectionListItem>
      <GradientDirectionItemButton
        onClick={onDirectionChange}
        isActive={isActiveDirectionId}
      >
        {displayText}
      </GradientDirectionItemButton>
    </GradientDirectionListItem>
  )
}

export default GradientDirectionItem
