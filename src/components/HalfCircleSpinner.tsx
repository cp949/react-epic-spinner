import styled from '@emotion/styled'
import React from 'react'
import { clsx2, DefaultSpinnerCompProps, DefaultSpinnerProps, useThemeColor } from './util'

type CompProps = DefaultSpinnerCompProps

const Comp = styled.div<CompProps>`
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    border-radius: 100%;
    position: relative;

    * {
        box-sizing: border-box;
    }

    .circle {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        border: calc(${(props) => props.size}px / 10) solid transparent;
    }
    .circle.circle-1 {
        border-top-color: ${(props) => props.color};
        animation: half-circle-spinner-animation ${(props) => props.animationDuration}ms infinite;
    }
    .circle.circle-2 {
        border-bottom-color: ${(props) => props.color};
        animation: half-circle-spinner-animation ${(props) => props.animationDuration}ms infinite alternate;
    }
    @keyframes half-circle-spinner-animation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

type Props = DefaultSpinnerProps

const HalfCircleSpinner = (props: Props) => {
    const color = useThemeColor(props.color)
    const { size = 56, animationDuration = 1000, className = '', style } = props

    return (
        <Comp
            size={size}
            color={color}
            animationDuration={animationDuration}
            className={clsx2('half-circle-spinner', className)}
            style={style}
        >
            <div className="circle circle-1" />
            <div className="circle circle-2" />
        </Comp>
    )
}

export default HalfCircleSpinner
