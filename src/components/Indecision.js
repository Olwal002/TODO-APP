import React, { Component} from 'react';
import Options from './Options';

class Indecision extends Component{
    constructor(props){
        super (props);
        this.state = {
            options:['Thing one','Thing two','Thing three']
        }
    };
    render(){
        console.log(this.props.city);
        return (
            <div>
                <Options options={this.state.options} />
            </div>
        );
    };
};

export default Indecision