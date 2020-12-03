import React from 'react'
import {connect} from 'react-redux'
import {Route,Redirect} from 'react-router-dom'

export const PrivateRouter = ({
    auth,
    component:Component,
    ...rest
})=>(
    <Route {...rest} component={(props)=>(
        auth ? (<Component {...props} />):(<Redirect to="/" />)
    )}
    />
)

const mapStateToProps = (state)=>{
    return {
        auth : !!state.auth
    }
}

export default connect(mapStateToProps)(PrivateRouter)