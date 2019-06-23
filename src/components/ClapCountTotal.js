import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { textStyles } from '../utils'

const ClapCountTotal = styled.span`
    transform: scale(1);
    text-align: center;
    left: 0;
    ${textStyles}

    ${({ theme: { primaryColor, size } }) => css`
        top: -${size / 3}px;
        color: ${primaryColor};
        width: ${size}px;
    `}
`

export default ClapCountTotal
