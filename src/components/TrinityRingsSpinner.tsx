import styled from '@emotion/styled'
import React from 'react'
import { clsx2, DefaultSpinnerCompProps, DefaultSpinnerProps, useThemeColor } from './util'

type CompProps = DefaultSpinnerCompProps & {
    outerWidth: number
}

const Comp = styled.div<CompProps>`
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    padding: 3px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    overflow: hidden;
    box-sizing: border-box;

    * {
        box-sizing: border-box;
    }

    .circle {
        position: absolute;
        display: block;
        border-radius: 50%;
        border: 3px solid ${(props) => props.color};
        opacity: 1;
    }
    .circle:nth-child(1) {
        height: ${(props) => props.outerWidth}px;
        width: ${(props) => props.outerWidth}px;
        animation: trinity-rings-spinner-circle1-animation ${(props) => props.animationDuration}ms infinite linear;
        border-width: 3px;
    }
    .circle:nth-child(2) {
        height: calc(${(props) => props.outerWidth}px * 0.65);
        width: calc(${(props) => props.outerWidth}px * 0.65);
        animation: trinity-rings-spinner-circle2-animation ${(props) => props.animationDuration}ms infinite linear;
        border-width: 2px;
    }
    .circle:nth-child(3) {
        height: calc(${(props) => props.outerWidth}px * 0.1);
        width: calc(${(props) => props.outerWidth}px * 0.1);
        animation: trinity-rings-spinner-circle3-animation ${(props) => props.animationDuration}ms infinite linear;
        border-width: 1px;
    }
    @keyframes trinity-rings-spinner-circle1-animation {
        0% {
            transform: rotateZ(20deg) rotateY(0deg);
        }
        100% {
            transform: rotateZ(100deg) rotateY(360deg);
        }
    }
    @keyframes trinity-rings-spinner-circle2-animation {
        0% {
            transform: rotateZ(100deg) rotateX(0deg);
        }
        100% {
            transform: rotateZ(0deg) rotateX(360deg);
        }
    }
    @keyframes trinity-rings-spinner-circle3-animation {
        0% {
            transform: rotateZ(100deg) rotateX(-360deg);
        }
        100% {
            transform: rotateZ(-360deg) rotateX(360deg);
        }
    }
`

type Props = DefaultSpinnerProps

const TrinityRingsSpinner = (props: Props) => {
    const color = useThemeColor(props.color)
    const { size = 56, animationDuration = 1500, className = '', style } = props

    const containerPadding = 3
    const outerWidth = size - containerPadding * 2
    return (
        <Comp
            size={size}
            color={color}
            animationDuration={animationDuration}
            className={clsx2('swapping-squares-spinner', className)}
            style={style}
            outerWidth={outerWidth}
        >
            <div className="circle circle1" />
            <div className="circle circle2" />
            <div className="circle circle3" />
        </Comp>
    )
}

export default TrinityRingsSpinner
