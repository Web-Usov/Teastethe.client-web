import React, { Component,Fragment } from 'react'
import { connect } from 'react-redux'

class Head extends Component {
    componentWillMount(){        
      const {head, subTitle} = this.props
      const _title = head.title;
      const _subTitle = subTitle ? " | " + subTitle : " | Find Your Tea)"
      document.title = _title + _subTitle
    }
  render() {
    return (
        <Fragment/>
    )
  }
}

const mapStateToProps = (state) => ({
    head:state.head  
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Head)
