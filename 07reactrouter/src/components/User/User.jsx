import { useParams } from "react-router-dom"
import React from "react"

function User(){
    const {userid} = useParams()
    return(
        <div className="bg-gray-600 text-3xl p-3 text-white text-center">User : {userid}</div>
    )
}

export default User