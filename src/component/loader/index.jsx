import React from 'react'
import { connect } from 'react-redux';
import './style.css'

const Load =  props => {


    const { loading } = props; 

    console.log(loading)

    return <div className={loading ? 'overlay' : 'overlay hidden'}>
        <div className="overlay__inner">
            <div className="overlay__content"><span className="spinner"></span></div>
        </div>
    </div>
}

const mapStateToProps = state => ({
    loading: state.ui.loading
})

export default connect(mapStateToProps)(Load);