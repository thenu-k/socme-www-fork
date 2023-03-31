import Link from "next/link";
import { SkeletonUserContainer, UserElContainer, UserListContainer } from "./UserList.styled";
import Image from "next/image";
import tickIcon from "@/public/tickIcon.png";
import { GLOBAL } from "@/GLOBAL";
import { useState } from "react";
import axios from "@/lib/axios";
import Spinner from "../Spinner/Spinner";

const UserList = ({userObjects, isLoading, updateFn}) => {
    if(!isLoading){
    return (
        <UserListContainer>
            {
                userObjects
                ?
                userObjects.map((userObject, index) => {
                    return (
                        <UserEl userObject={userObject} key={index} removeEl={()=>{
                            let newUserObjects = [...userObjects]
                            newUserObjects.splice(index, 1)
                            updateFn(newUserObjects)
                        }}/>
                    )
                })
                :
                null
            }
        </UserListContainer>
    );
    }else{
        return (
            <UserListContainer>
                <SkeletonUser/>
                <SkeletonUser/>
                <SkeletonUser/>
                <SkeletonUser/>
            </UserListContainer>
        )
    }
}

export const UserEl = ({userObject, removeEl} = {}) => {
    const [isLoading, setIsLoading] = useState(null)
    const acceptRequest = async() => {
        setIsLoading(true)
        try{
            const res = await axios.put(`/api/follow/accept/${userObject.id}`)
            removeEl()
            setIsLoading(false)
        }catch(err){
            console.log(err)
        }
    }
    return (
        <UserElContainer className="userEl">
            <Link className="imageContainer center" href={`/account/${userObject.id}`}>
                <img src={GLOBAL.RESOURCE.IMAGE.PROFILE(GLOBAL.APP_URL, userObject.imageURL)}/>
            </Link>
            <Link className="username" href={`/account/${userObject.id}`}>{userObject.name}</Link>
            <button className="accept" onClick={acceptRequest}>
                {
                    isLoading
                    ?
                    <Spinner size={20} border={3}/>
                    :(<>
                        <Image src={tickIcon} width={20} height={20}/>
                        <span>Accept</span>
                    </>)
                }
            </button>
        </UserElContainer>
    )
}

export const SkeletonUser = () => {
    return(
        <SkeletonUserContainer className="skeletonUserEl">
            <div className="skeletonImage"></div>
            <div className="skeletonName"></div>
        </SkeletonUserContainer>
    )
}
export default UserList;