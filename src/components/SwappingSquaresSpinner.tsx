import styled from '@emotion/styled'
import React from 'react'
import { clsx2, DefaultSpinnerCompProps, DefaultSpinnerProps, generateDiv, useThemeColor } from './util'

type CompProps = DefaultSpinnerCompProps

const Comp = styled.div<CompProps>`
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    * {
        box-sizing: border-box;
    }

    .square {
        height: calc(${(props) => props.size}px * 0.25 / 1.3);
        width: calc(${(props) => props.size}px * 0.25 / 1.3);
        animation-duration: ${(props) => props.animationDuration}ms;
        border: calc(${(props) => props.size}px * 0.04 / 1.3) solid ${(props) => props.color};
        margin-right: auto;
        margin-left: auto;
        position: absolute;
        animation-iteration-count: infinite;
    }
    .square:nth-child(1) {
        animation-name: swapping-squares-animation-child-1;
        animation-delay: ${(props) => props.animationDuration * 0.5}ms;
    }
    .square:nth-child(2) {
        animation-name: swapping-squares-animation-child-2;
        animation-delay: 0ms;
    }
    .square:nth-child(3) {
        animation-name: swapping-squares-animation-child-3;
        animation-delay: ${(props) => props.animationDuration * 0.5}ms;
    }
    .square:nth-child(4) {
        animation-name: swapping-squares-animation-child-4;
        animation-delay: 0ms;
    }
    @keyframes swapping-squares-animation-child-1 {
        50% {
            transform: translate(150%, 150%) scale(2, 2);
        }
    }
    @keyframes swapping-squares-animation-child-2 {
        50% {
            transform: translate(-150%, 150%) scale(2, 2);
        }
    }
    @keyframes swapping-squares-animation-child-3 {
        50% {
            transform: translate(-150%, -150%) scale(2, 2);
        }
    }
    @keyframes swapping-squares-animation-child-4 {
        50% {
            transform: translate(150%, -150%) scale(2, 2);
        }
    }
`

type Props = DefaultSpinnerProps

const SwappingSquaresSpinner = (props: Props) => {
    const color = useThemeColor(props.color)
    const { size = 56, animationDuration = 1000, className = '', style } = props

    return (
        <Comp
            size={size}
            color={color}
            animationDuration={animationDuration}
            className={clsx2('swapping-squares-spinner', className)}
            style={style}
        >
            {generateDiv(4, 'square')}
        </Comp>
    )
}

export default SwappingSquaresSpinner
