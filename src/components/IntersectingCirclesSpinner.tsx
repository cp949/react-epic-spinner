import styled from '@emotion/styled'
import React from 'react'
import { clsx2, DefaultSpinnerCompProps, DefaultSpinnerProps, generateDiv, useThemeColor } from './util'

type CompProps = DefaultSpinnerCompProps & {
    circleSize: number
}

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

    .spinnerBlock {
        animation: intersecting-circles-spinners-animation ${(props) => props.animationDuration}ms linear infinite;
        transform-origin: center;
        display: block;
        height: ${(props) => props.circleSize}px;
        width: ${(props) => props.circleSize}px;
    }
    .circle {
        display: block;
        border: 2px solid ${(props) => props.color};
        border-radius: 50%;
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
    .circle:nth-child(1) {
        left: 0;
        top: 0;
    }
    .circle:nth-child(2) {
        left: ${(props) => props.circleSize * -0.36}px;
        top: ${(props) => props.circleSize * 0.2}px;
    }
    .circle:nth-child(3) {
        left: ${(props) => props.circleSize * -0.36}px;
        top: ${(props) => props.circleSize * -0.2}px;
    }
    .circle:nth-child(4) {
        left: 0;
        top: ${(props) => props.circleSize * -0.36}px;
    }
    .circle:nth-child(5) {
        left: ${(props) => props.circleSize * 0.36}px;
        top: ${(props) => props.circleSize * -0.2}px;
    }
    .circle:nth-child(6) {
        left: ${(props) => props.circleSize * 0.36}px;
        top: ${(props) => props.circleSize * 0.2}px;
    }
    .circle:nth-child(7) {
        left: 0;
        top: ${(props) => props.circleSize * 0.36}px;
    }
    @keyframes intersecting-circles-spinners-animation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`

type Props = DefaultSpinnerProps

const IntersectingCirclesSpinner = (props: Props) => {
    const color = useThemeColor(props.color)
    const { size = 56, animationDuration = 1200, className = '', style } = props

    return (
        <Comp
            size={size}
            color={color}
            animationDuration={animationDuration}
            className={clsx2('intersecting-circles-spinner', className)}
            style={style}
            circleSize={size / 2}
        >
            <div className="spinnerBlock">{generateDiv(7, 'circle')}</div>
        </Comp>
    )
}

export default IntersectingCirclesSpinner
