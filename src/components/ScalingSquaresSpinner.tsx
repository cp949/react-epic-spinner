import styled from '@emotion/styled'
import React from 'react'
import { generateDiv, clsx2, DefaultSpinnerCompProps, DefaultSpinnerProps, useThemeColor } from './util'

type CompProps = DefaultSpinnerCompProps

const Comp = styled.div<CompProps>`
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    animation: scaling-squares-animation ${(props) => props.animationDuration}ms;
    animation-iteration-count: infinite;
    transform: rotate(0deg);

    * {
        box-sizing: border-box;
    }

    .square {
        height: calc(${(props) => props.size}px * 0.25 / 1.3);
        width: calc(${(props) => props.size}px * 0.25 / 1.3);
        margin-right: auto;
        margin-left: auto;
        border: calc(${(props) => props.size}px * 0.04 / 1.3) solid ${(props) => props.color};
        position: absolute;
        animation-duration: ${(props) => props.animationDuration}ms;
        animation-iteration-count: infinite;
    }
    .square:nth-child(1) {
        animation-name: scaling-squares-spinner-animation-child-1;
    }
    .square:nth-child(2) {
        animation-name: scaling-squares-spinner-animation-child-2;
    }
    .square:nth-child(3) {
        animation-name: scaling-squares-spinner-animation-child-3;
    }
    .square:nth-child(4) {
        animation-name: scaling-squares-spinner-animation-child-4;
    }
    @keyframes scaling-squares-animation {
        50% {
            transform: rotate(90deg);
        }
        100% {
            transform: rotate(180deg);
        }
    }
    @keyframes scaling-squares-spinner-animation-child-1 {
        50% {
            transform: translate(150%, 150%) scale(2, 2);
        }
    }
    @keyframes scaling-squares-spinner-animation-child-2 {
        50% {
            transform: translate(-150%, 150%) scale(2, 2);
        }
    }
    @keyframes scaling-squares-spinner-animation-child-3 {
        50% {
            transform: translate(-150%, -150%) scale(2, 2);
        }
    }
    @keyframes scaling-squares-spinner-animation-child-4 {
        50% {
            transform: translate(150%, -150%) scale(2, 2);
        }
    }
`

type Props = DefaultSpinnerProps

const ScalingSquaresSpinner = (props: Props) => {
    const color = useThemeColor(props.color)
    const { size = 56, animationDuration = 1250, className = '', style } = props

    return (
        <Comp
            size={size}
            color={color}
            animationDuration={animationDuration}
            className={clsx2('scaling-squares-spinner', className)}
            style={style}
        >
            {generateDiv(4, 'square')}
        </Comp>
    )
}

export default ScalingSquaresSpinner
