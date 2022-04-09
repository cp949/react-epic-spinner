import styled from '@emotion/styled'
import React from 'react'
import { clsx2, DefaultSpinnerCompProps, DefaultSpinnerProps, useThemeColor } from './util'

type CompProps = DefaultSpinnerCompProps & {
    borderWidth: number
}

const Comp = styled.div<CompProps>`
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    position: relative;

    * {
        box-sizing: border-box;
    }

    .circle {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        animation: radar-spinner-animation ${(props) => props.animationDuration}ms infinite;
    }
    .circle:nth-child(1) {
        padding: ${(props) => props.borderWidth * 2 * 0}px;
        animation-delay: ${(props) => props.animationDuration * 0.15}ms;
    }
    .circle:nth-child(2) {
        padding: ${(props) => props.borderWidth * 2 * 1}px;
        animation-delay: ${(props) => props.animationDuration * 0.15}ms;
    }
    .circle:nth-child(3) {
        padding: ${(props) => props.borderWidth * 2 * 2}px;
        animation-delay: ${(props) => props.animationDuration * 0.15}ms;
    }
    .circle:nth-child(4) {
        padding: ${(props) => props.borderWidth * 2 * 3}px;
        animation-delay: 0ms;
    }
    .circle-inner,
    .circle-inner-container {
        height: 100%;
        width: 100%;
        border-radius: 50%;
        border: ${(props) => props.borderWidth}px solid transparent;
    }
    .circle-inner {
        border-left-color: ${(props) => props.color};
        border-right-color: ${(props) => props.color};
    }
    @keyframes radar-spinner-animation {
        50% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
`

type Props = DefaultSpinnerProps

const RadarSpinner = (props: Props) => {
    const color = useThemeColor(props.color)
    const { size = 56, animationDuration = 2000, className = '', style } = props

    return (
        <Comp
            size={size}
            color={color}
            animationDuration={animationDuration}
            className={clsx2('radar-spinner', className)}
            style={style}
            borderWidth={(size * 5) / 110}
        >
            {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="circle">
                    <div className="circle-inner-container">
                        <div className="circle-inner" />
                    </div>
                </div>
            ))}
        </Comp>
    )
}

export default RadarSpinner
