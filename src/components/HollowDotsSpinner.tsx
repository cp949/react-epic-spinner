import styled from '@emotion/styled'
import React from 'react'
import { clsx2, DefaultSpinnerCompProps, DefaultSpinnerProps, generateDiv, useThemeColor } from './util'

type CompProps = DefaultSpinnerCompProps & {
    animationDelay: number
    dotCount: number
    dotSize: number
}

const Comp = styled.div<CompProps>`
    height: ${(props) => props.dotSize}px;
    width: ${(props) => props.size}px;

    * {
        box-sizing: border-box;
    }

    .dot {
        width: ${(props) => props.dotSize}px;
        height: ${(props) => props.dotSize}px;
        margin: 0 calc(${(props) => props.dotSize}px / 2);
        border: calc(${(props) => props.dotSize}px / 5) solid ${(props) => props.color};
        border-radius: 50%;
        float: left;
        transform: scale(0);
        animation: hollow-dots-spinner-animation ${(props) => props.animationDuration}ms ease infinite 0ms;
    }
    .dot:nth-of-type(1) {
        animation-delay: calc(${(props) => props.animationDelay}ms * 1);
    }
    .dot:nth-of-type(2) {
        animation-delay: calc(${(props) => props.animationDelay}ms * 2);
    }
    .dot:nth-of-type(3) {
        animation-delay: calc(${(props) => props.animationDelay}ms * 3);
    }
    @keyframes hollow-dots-spinner-animation {
        50% {
            transform: scale(1);
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`

type Props = DefaultSpinnerProps

const HollowDotsSpinner = (props: Props) => {
    const color = useThemeColor(props.color)
    const { size = 84, animationDuration = 1000, className = '', style } = props
    const dotCount = 3

    return (
        <Comp
            size={size}
            color={color}
            animationDuration={animationDuration}
            className={clsx2('hollow-dots-spinner', className)}
            style={style}
            animationDelay={animationDuration * 0.3}
            dotCount={dotCount}
            dotSize={size / (2 * dotCount)}
        >
            {generateDiv(dotCount, 'dot')}
        </Comp>
    )
}

export default HollowDotsSpinner
