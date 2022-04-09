import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { clsx2, DefaultSpinnerCompProps, DefaultSpinnerProps, useThemeColor } from './util'

const anim1 = keyframes`
100% {
  transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
}
`
const anim2 = keyframes`
100% {
  transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
}
`
const anim3 = keyframes`
100% {
  transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
}
`
type CompProps = DefaultSpinnerCompProps

const Comp = styled.div<CompProps>`
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    overflow: hidden;

    * {
        box-sizing: border-box;
    }

    .spinner-inner {
        position: relative;
        display: block;
        height: 100%;
        width: 100%;
    }

    .spinner-circle {
        display: block;
        position: absolute;
        color: ${(props) => props.color};
        font-size: calc(${(props) => props.size}px * 0.24);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .spinner-line {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        animation-duration: ${(props) => props.animationDuration}ms;
        border-left-width: calc(${(props) => props.size}px / 25);
        border-top-width: calc(${(props) => props.size}px / 25);
        border-left-color: ${(props) => props.color};
        border-left-style: solid;
        border-top-style: solid;
        border-top-color: transparent;
    }

    .spinner-line:nth-of-type(1) {
        animation: atom-spinner-animation-1 ${(props) => props.animationDuration}ms linear infinite;
        transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
    }

    .spinner-line:nth-of-type(2) {
        animation: atom-spinner-animation-2 ${(props) => props.animationDuration}ms linear infinite;
        transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
    }

    .spinner-line:nth-of-type(3) {
        animation: atom-spinner-animation-3 ${(props) => props.animationDuration}ms linear infinite;
        transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
    }

    @keyframes atom-spinner-animation-1 {
        100% {
            transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
        }
    }
    @keyframes atom-spinner-animation-2 {
        100% {
            transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
        }
    }
    @keyframes atom-spinner-animation-3 {
        100% {
            transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
        }
    }
`

type Props = DefaultSpinnerProps

const AtomSpinner = (props: Props) => {
    const color = useThemeColor(props.color)
    const { size = 56, animationDuration = 1000, className = '', style } = props

    return (
        <Comp
            size={size}
            color={color}
            animationDuration={animationDuration}
            className={clsx2('atom-spinner', className)}
            style={style}
        >
            <div className="spinner-inner">
                <div className="spinner-line" />
                <div className="spinner-line" />
                <div className="spinner-line" />
                {/* Chrome renders little circles malformed */}
                <div className="spinner-circle">&#9679;</div>
            </div>
        </Comp>
    )
}

export default AtomSpinner
