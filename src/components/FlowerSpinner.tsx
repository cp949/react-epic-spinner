import styled from '@emotion/styled'
import React from 'react'
import { clsx2, DefaultSpinnerCompProps, DefaultSpinnerProps, useThemeColor } from './util'

type CompProps = DefaultSpinnerCompProps & {
    dotSize: number
}

const Comp = styled.div<CompProps>`
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    * {
        box-sizing: border-box;
    }

    .dots-container {
        height: ${(props) => props.dotSize}px;
        width: ${(props) => props.dotSize}px;
    }
    .smaller-dot {
        background: ${(props) => props.color};
        height: 100%;
        width: 100%;
        border-radius: 50%;
        animation: flower-spinner-smaller-dot-animation ${(props) => props.animationDuration}ms 0s infinite both;
    }
    .bigger-dot {
        background: ${(props) => props.color};
        height: 100%;
        width: 100%;
        padding: 10%;
        border-radius: 50%;
        animation: flower-spinner-bigger-dot-animation ${(props) => props.animationDuration}ms 0s infinite both;
    }
    @keyframes flower-spinner-bigger-dot-animation {
        0%,
        100% {
            box-shadow: 0px 0px 0px ${(props) => props.color}, 0px 0px 0px ${(props) => props.color},
                0px 0px 0px ${(props) => props.color}, 0px 0px 0px ${(props) => props.color},
                0px 0px 0px ${(props) => props.color}, 0px 0px 0px ${(props) => props.color},
                0px 0px 0px ${(props) => props.color}, 0px 0px 0px ${(props) => props.color};
        }
        50% {
            transform: rotate(180deg);
        }
        25%,
        75% {
            box-shadow: ${(props) => props.dotSize * 2.6}px 0 0 ${(props) => props.color},
                -${(props) => props.dotSize * 2.6}px 0 0 ${(props) => props.color},
                0 ${(props) => props.dotSize * 2.6}px 0 ${(props) => props.color},
                0 -${(props) => props.dotSize * 2.6}px 0 ${(props) => props.color},
                ${(props) => props.dotSize * 1.9}px -${(props) => props.dotSize * 1.9}px 0 ${(props) => props.color},
                ${(props) => props.dotSize * 1.9}px ${(props) => props.dotSize * 1.9}px 0 ${(props) => props.color},
                -${(props) => props.dotSize * 1.9}px -${(props) => props.dotSize * 1.9}px 0 ${(props) => props.color},
                -${(props) => props.dotSize * 1.9}px ${(props) => props.dotSize * 1.9}px 0 ${(props) => props.color};
        }
        100% {
            transform: rotate(360deg);
            box-shadow: 0px 0px 0px ${(props) => props.color}, 0px 0px 0px ${(props) => props.color},
                0px 0px 0px ${(props) => props.color}, 0px 0px 0px ${(props) => props.color},
                0px 0px 0px ${(props) => props.color}, 0px 0px 0px ${(props) => props.color},
                0px 0px 0px ${(props) => props.color}, 0px 0px 0px ${(props) => props.color};
        }
    }
    @keyframes flower-spinner-smaller-dot-animation {
        0%,
        100% {
            box-shadow: 0px 0px 0px ${(props) => props.color}, 0px 0px 0px ${(props) => props.color},
                0px 0px 0px ${(props) => props.color}, 0px 0px 0px ${(props) => props.color},
                0px 0px 0px ${(props) => props.color}, 0px 0px 0px ${(props) => props.color},
                0px 0px 0px ${(props) => props.color}, 0px 0px 0px ${(props) => props.color};
        }
        25%,
        75% {
            box-shadow: ${(props) => props.dotSize * 1.4}px 0 0 ${(props) => props.color},
                -${(props) => props.dotSize * 1.4}px 0 0 ${(props) => props.color},
                0 ${(props) => props.dotSize * 1.4}px 0 ${(props) => props.color},
                0 -${(props) => props.dotSize * 1.4}px 0 ${(props) => props.color},
                ${(props) => props.dotSize}px -${(props) => props.dotSize}px 0 ${(props) => props.color},
                ${(props) => props.dotSize}px ${(props) => props.dotSize}px 0 ${(props) => props.color},
                -${(props) => props.dotSize}px -${(props) => props.dotSize}px 0 ${(props) => props.color},
                -${(props) => props.dotSize}px ${(props) => props.dotSize}px 0 ${(props) => props.color};
        }
        100% {
            box-shadow: 0px 0px 0px ${(props) => props.color}, 0px 0px 0px ${(props) => props.color},
                0px 0px 0px ${(props) => props.color}, 0px 0px 0px ${(props) => props.color},
                0px 0px 0px ${(props) => props.color}, 0px 0px 0px ${(props) => props.color},
                0px 0px 0px ${(props) => props.color}, 0px 0px 0px ${(props) => props.color};
        }
    }
`

type Props = DefaultSpinnerProps

const FlowerSpinner = (props: Props) => {
    const color = useThemeColor(props.color)
    const { size = 56, animationDuration = 2500, className = '', style } = props

    const dotSize = size / 7

    return (
        <Comp
            size={size}
            color={color}
            animationDuration={animationDuration}
            className={clsx2('flower-spinner', className)}
            style={style}
            dotSize={dotSize}
        >
            <div className="dots-container">
                <div className="bigger-dot">
                    <div className="smaller-dot" />
                </div>
            </div>
        </Comp>
    )
}

export default FlowerSpinner
