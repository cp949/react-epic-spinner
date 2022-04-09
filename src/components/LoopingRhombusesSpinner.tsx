import styled from '@emotion/styled'
import React from 'react'
import { clsx2, DefaultSpinnerCompProps, DefaultSpinnerProps, generateDiv, useThemeColor } from './util'

type CompProps = DefaultSpinnerCompProps

const Comp = styled.div<CompProps>`
    width: ${(props) => props.size}px;
    height: ${(props) => props.size / 4}px;
    position: relative;

    * {
        box-sizing: border-box;
    }

    .rhombus {
        height: ${(props) => props.size / 4}px;
        width: ${(props) => props.size / 4}px;
        background-color: ${(props) => props.color};
        left: ${(props) => props.size}px;
        position: absolute;
        margin: 0 auto;
        border-radius: 2px;
        transform: translateY(0) rotate(45deg) scale(0);
        animation: looping-rhombuses-spinner-animation ${(props) => props.animationDuration}ms linear infinite;
    }
    .rhombus:nth-of-type(1) {
        animation-delay: calc(${(props) => props.animationDuration}ms * 1 / -1.5);
    }
    .rhombus:nth-of-type(2) {
        animation-delay: calc(${(props) => props.animationDuration}ms * 2 / -1.5);
    }
    .rhombus:nth-of-type(3) {
        animation-delay: calc(${(props) => props.animationDuration}ms * 3 / -1.5);
    }
    @keyframes looping-rhombuses-spinner-animation {
        0% {
            transform: translateX(0) rotate(45deg) scale(0);
        }
        50% {
            transform: translateX(-233%) rotate(45deg) scale(1);
        }
        100% {
            transform: translateX(-466%) rotate(45deg) scale(0);
        }
    }
`

type Props = DefaultSpinnerProps

const LoopingRhombusesSpinner = (props: Props) => {
    const color = useThemeColor(props.color)
    const { size = 56, animationDuration = 2500, className = '', style } = props

    return (
        <Comp
            size={size}
            color={color}
            animationDuration={animationDuration}
            className={clsx2('intersecting-circles-spinner', className)}
            style={style}
        >
            <div className="spinnerBlock">{generateDiv(3, 'rhombus')}</div>
        </Comp>
    )
}

export default LoopingRhombusesSpinner
