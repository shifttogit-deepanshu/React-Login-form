import React from "react"
import {connect} from "react-redux"

export const Logout = (props)=>(
    <div >
    <button className="submit_button submit-button--logout" onClick={props.logOut}>Log Out</button>
    </div>

)

const mapDispatchToProps = (dispatch)=>{
    return {
        logOut : ()=>{
            dispatch({type:"LOG_OUT"})
        }
    }
}

export default connect(undefined,mapDispatchToProps)(Logout)