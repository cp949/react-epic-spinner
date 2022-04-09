import styled from '@emotion/styled'
import React from 'react'
import { clsx2, DefaultSpinnerCompProps, DefaultSpinnerProps, generateDiv as generateDiv, useThemeColor } from './util'

type CompProps = DefaultSpinnerCompProps & {
    delayModifier: number
}

const Comp = styled.div<CompProps>`
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    position: relative;
    transform: rotate(45deg);

    * {
        box-sizing: border-box;
    }

    .rhombus {
        height: calc(${(props) => props.size}px / 7.5);
        width: calc(${(props) => props.size}px / 7.5);
        animation-duration: ${(props) => props.animationDuration}ms;
        top: calc(${(props) => props.size}px / 2.3077);
        left: calc(${(props) => props.size}px / 2.3077);
        background-color: ${(props) => props.color};
        position: absolute;
        animation-iteration-count: infinite;
    }

    .rhombus:nth-child(2n + 0) {
        margin-right: 0;
    }

    .rhombus.child-1 {
        animation-name: breeding-rhombus-spinner-animation-child-1;
        animation-delay: calc(${(props) => props.delayModifier}ms * 1);
    }

    .rhombus.child-2 {
        animation-name: breeding-rhombus-spinner-animation-child-2;
        animation-delay: calc(${(props) => props.delayModifier}ms * 2);
    }

    .rhombus.child-3 {
        animation-name: breeding-rhombus-spinner-animation-child-3;
        animation-delay: calc(${(props) => props.delayModifier}ms * 3);
    }

    .rhombus.child-4 {
        animation-name: breeding-rhombus-spinner-animation-child-4;
        animation-delay: calc(${(props) => props.delayModifier}ms * 4);
    }

    .rhombus.child-5 {
        animation-name: breeding-rhombus-spinner-animation-child-5;
        animation-delay: calc(${(props) => props.delayModifier}ms * 5);
    }

    .rhombus.child-6 {
        animation-name: breeding-rhombus-spinner-animation-child-6;
        animation-delay: calc(${(props) => props.delayModifier}ms * 6);
    }

    .rhombus.child-7 {
        animation-name: breeding-rhombus-spinner-animation-child-7;
        animation-delay: calc(${(props) => props.delayModifier}ms * 7);
    }

    .rhombus.child-8 {
        animation-name: breeding-rhombus-spinner-animation-child-8;
        animation-delay: calc(${(props) => props.delayModifier}ms * 8);
    }

    .rhombus.big {
        height: calc(${(props) => props.size}px / 3);
        width: calc(${(props) => props.size}px / 3);
        animation-duration: ${(props) => props.animationDuration}ms;
        top: calc(${(props) => props.size}px / 3);
        left: calc(${(props) => props.size}px / 3);
        background-color: ${(props) => props.color};
        animation: breeding-rhombus-spinner-animation-child-big ${(props) => props.animationDuration} infinite;
        animation-delay: 0.5s;
    }

    @keyframes breeding-rhombus-spinner-animation-child-1 {
        50% {
            transform: translate(-325%, -325%);
        }
    }
    @keyframes breeding-rhombus-spinner-animation-child-2 {
        50% {
            transform: translate(0, -325%);
        }
    }
    @keyframes breeding-rhombus-spinner-animation-child-3 {
        50% {
            transform: translate(325%, -325%);
        }
    }
    @keyframes breeding-rhombus-spinner-animation-child-4 {
        50% {
            transform: translate(325%, 0);
        }
    }
    @keyframes breeding-rhombus-spinner-animation-child-5 {
        50% {
            transform: translate(325%, 325%);
        }
    }
    @keyframes breeding-rhombus-spinner-animation-child-6 {
        50% {
            transform: translate(0, 325%);
        }
    }
    @keyframes breeding-rhombus-spinner-animation-child-7 {
        50% {
            transform: translate(-325%, 325%);
        }
    }
    @keyframes breeding-rhombus-spinner-animation-child-8 {
        50% {
            transform: translate(-325%, 0);
        }
    }
    @keyframes breeding-rhombus-spinner-animation-child-big {
        50% {
            transform: scale(0.5);
        }
    }
`

type Props = DefaultSpinnerProps

const BreedingRhombusSpinner = (props: Props) => {
    const color = useThemeColor(props.color)
    const { size = 56, animationDuration = 2000, className = '', style } = props

    return (
        <Comp
            size={size}
            color={color}
            animationDuration={animationDuration}
            className={clsx2('breeding-rhombus-spinner', className)}
            style={style}
            delayModifier={animationDuration * 0.05}
        >
            {generateDiv(8, (i) => `rhombus child-${i + 1}`)}
            <div className="rhombus big" />
        </Comp>
    )
}

export default BreedingRhombusSpinner
