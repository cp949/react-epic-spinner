import styled from '@emotion/styled'
import React from 'react'
import { clsx2, DefaultSpinnerCompProps, DefaultSpinnerProps, useThemeColor } from './util'

type CompProps = DefaultSpinnerCompProps

const Comp = styled.div<CompProps>`
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    border-radius: 50%;
    perspective: 800px;

    * {
        box-sizing: border-box;
    }

    .orbit {
        position: absolute;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .orbit:nth-of-type(1) {
        left: 0%;
        top: 0%;
        animation: orbit-spinner-orbit-one-animation ${(props) => props.animationDuration}ms linear infinite;
        border-bottom: 3px solid ${(props) => props.color};
    }
    .orbit:nth-of-type(2) {
        right: 0%;
        top: 0%;
        animation: orbit-spinner-orbit-two-animation ${(props) => props.animationDuration}ms linear infinite;
        border-right: 3px solid ${(props) => props.color};
    }
    .orbit:nth-of-type(3) {
        right: 0%;
        bottom: 0%;
        animation: orbit-spinner-orbit-three-animation ${(props) => props.animationDuration}ms linear infinite;
        border-top: 3px solid ${(props) => props.color};
    }
    @keyframes orbit-spinner-orbit-one-animation {
        0% {
            transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
        }
        100% {
            transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
        }
    }
    @keyframes orbit-spinner-orbit-two-animation {
        0% {
            transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
        }
        100% {
            transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
        }
    }
    @keyframes orbit-spinner-orbit-three-animation {
        0% {
            transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
        }
        100% {
            transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
        }
    }
`

type Props = DefaultSpinnerProps

const OrbitSpinner = (props: Props) => {
    const color = useThemeColor(props.color)
    const { size = 56, animationDuration = 1000, className = '', style } = props

    return (
        <Comp
            size={size}
            color={color}
            animationDuration={animationDuration}
            className={clsx2('orbit-spinner', className)}
            style={style}
        >
            <div className="orbit one" />
            <div className="orbit two" />
            <div className="orbit three" />
        </Comp>
    )
}

export default OrbitSpinner
