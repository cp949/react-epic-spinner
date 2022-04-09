import styled from '@emotion/styled'
import React from 'react'
import { clsx2, DefaultSpinnerCompProps, DefaultSpinnerProps, generateDiv, useThemeColor } from './util'

type CompProps = DefaultSpinnerCompProps & {
    circleMarginLeft: number
    circleCount: number
    circleSize: number
    delay: number
}

const Comp = styled.div<CompProps>`
    height: ${(props) => props.circleSize}px;
    width: ${(props) => props.size}px;
    display: flex;
    align-items: center;
    justify-content: center;

    * {
        box-sizing: border-box;
    }

    .circle {
        height: ${(props) => props.circleSize}px;
        width: ${(props) => props.circleSize}px;
        margin-left: ${(props) => props.circleMarginLeft}px;
        transform: rotate(45deg);
        border-radius: 10%;
        border: 3px solid ${(props) => props.color};
        overflow: hidden;
        background: transparent;
        animation: circles-to-rhombuses-animation ${(props) => props.animationDuration}ms linear infinite;
    }
    .circle:nth-of-type(1) {
        animation-delay: calc(${(props) => props.delay}ms * 1);
        margin-left: 0;
    }
    .circle:nth-of-type(2) {
        animation-delay: calc(${(props) => props.delay}ms * 2);
    }
    .circle:nth-of-type(3) {
        animation-delay: calc(${(props) => props.delay}ms * 3);
    }
    @keyframes circles-to-rhombuses-animation {
        0% {
            border-radius: 10%;
        }
        17.5% {
            border-radius: 10%;
        }
        50% {
            border-radius: 100%;
        }
        93.5% {
            border-radius: 10%;
        }
        100% {
            border-radius: 10%;
        }
    }
`

type Props = DefaultSpinnerProps

const CirclesToRhombusesSpinner = (props: Props) => {
    const color = useThemeColor(props.color)
    const { size = 85, animationDuration = 1200, className = '', style } = props

    const circleCount = 3
    const circleSize = size / (2.125 * circleCount - 1.125)
    const circleMarginLeft = circleSize * 1.125
    return (
        <Comp
            size={size}
            color={color}
            animationDuration={animationDuration}
            className={clsx2('circles-to-rhombuses-spinner', className)}
            style={style}
            delay={150}
            circleMarginLeft={circleMarginLeft}
            circleSize={circleSize}
            circleCount={circleCount}
        >
            {generateDiv(circleCount, 'circle')}
        </Comp>
    )
}

export default CirclesToRhombusesSpinner
