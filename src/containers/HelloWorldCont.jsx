import React,{Component} from 'react'
import { connect } from 'react-redux'
import HelloWorldComp from '../components/HelloWorldComp'

const mapStateToProps = (state) => ({
    state: state.HelloWorldRedu
})

export default connect(mapStateToProps)(HelloWorldComp)