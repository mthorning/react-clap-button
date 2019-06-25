import styled, { css, keyframes } from 'styled-components'
import { textStyles } from '../utils'

const ClapCountTotal = styled.span`
  transform: scale(1);
  text-align: center;
  left: 0;
  ${textStyles}

  ${({ theme: { primaryColor, size } }) => css`
    top: -${size / 1.85}px;
    color: ${primaryColor};
    width: ${size}px;
  `}
`

export default ClapCountTotal
