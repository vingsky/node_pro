import React from 'react';
export default class Home extends React.Component{
    constructor(props){
        super(props);
    }
    goTop = () =>{
        this.props.history.push('/top/2')
        console.log(this.props);
    }
    render(){
        return(
            <div>
                Home Page;
                <button onClick={this.goTop}>go to top</button>
            </div>
        )
    }
}