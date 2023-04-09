import { GLOBAL } from "@/GLOBAL";
import styled from "styled-components";

export const AccountPageContainer = styled.div`
    width: clamp(500px, 55%, 1000px);
    margin-top: 30px;
    display: flex; flex-direction: column;
    margin-bottom: 40px;
    @media (max-width: 1000px) { width: 95%; }
    /* change */
    & .info{
        width: 100%;
        display: flex; align-items: center;
        & .imageOuter{
            flex-shrink: 0;
            height: 120px; width: 120px;
            border-radius: 9999px;
            overflow: hidden;
            box-sizing: border-box;
            /* border: 2px solid ${GLOBAL.ACCENT_COLOR}}; */
            position: relative;
            & img{
                height: 100%;
                width: auto;
            }
        }
        padding-bottom: 30px;
        border-bottom: 1px solid ${GLOBAL.ACCENT_COLOR};
        & .meta{
            margin-left: 50px;
            flex-grow: 1;
            display: flex; justify-content: flex-start;
            flex-direction: column;
            & .row{
                width: 100%;
                display: flex; align-items: center;
                &.top{
                    & .username{
                        font-size: 1.3em;
                        font-weight: 500;
                        width: fit-content;
                    }
                    & .buttons{
                        flex-grow: 1;
                        display: flex; align-items: center;
                        & .button{
                            height: 35px;
                            width: 120px;
                            border: 0;
                            color: white;
                            margin-left: 30px;
                            cursor: pointer;
                        }
                        & .followButtonContainer{
                            margin-left: 30px;
                        }
                        & .settings{
                            border-radius: 5px;
                            display: flex; align-items: center;
                            background-color: ${GLOBAL.BUTTON_COLORS[0].PRIMARY};
                            color: white;
                            &:hover{
                                background-color: ${GLOBAL.BUTTON_COLORS[0].SECONDARY};
                            }
                            & span{
                                font-size: 1em;
                                font-weight: 500;
                            }
                        }
                    }
                }
                &.followersList{
                    margin-top: 30px;
                    display: flex; align-items: center;
                    & > div{
                        display: flex; align-items: center;
                        & .number{
                            font-weight: 500;
                            margin-right: 5px;
                        }
                        margin-right:30px;
                        &:last-of-type{
                            margin-right: 0;
                        }
                    }
                }
            }
            & .bio{
                width: 100%;
                display: flex; justify-content: flex-start;
                margin-top: 30px;
                /* & h3{
                    font-weight: 500;
                    margin-bottom: 10px;
                } */
            }
        }
    }
    & .postListOuter{
        margin-top: 30px;
        & .privateError{
            margin-top: 50px;
            width: 100%;
            display: flex; align-items: center;
            flex-direction: column;
            justify-content: center;
            & .imageContainer{
                height: 80px; 
                & img{
                    height: 100%;
                    opacity: 0.8;
                }
                /* margin-right: 40px; */
                margin-bottom: 20px;
            }
            & .text{
                display: flex; flex-direction: column;
                align-items: center;
                & h3{
                    font-weight: 400;
                    color: ${GLOBAL.ACCENT_COLOR};
                    color: white;
                    font-size: 1.2em;
                    margin-bottom: 15px;
                    width: fit-content;
                }
                & p{
                    font-weight: 400;
                    width: fit-content;
                    text-align: center;
                    color: ${GLOBAL.ACCENT_COLOR};
                }
            }
        }
    }
`