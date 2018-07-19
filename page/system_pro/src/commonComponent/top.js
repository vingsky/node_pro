import React from 'react';
export default class Top extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(this.props.match.params.id);
        console.log(this.props);
    }
    render(){
        return(
            <div>
                Top Page;
            </div>
        )
    }
}