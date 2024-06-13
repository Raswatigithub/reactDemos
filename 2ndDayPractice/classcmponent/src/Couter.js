import { Component } from "react";

class Counter extends Component{

    constructor(props){
        super(props)
        this.state={c:0}
    }

    add=()=>{
            {
                if(this.state.c <10){
                this.setState({c:this.state.c+1})
            }
               
            }
    }

    sub=()=>{
        {
            if(this.state.c >0 ){
                this.setState({c:this.state.c-1})
            }
           
        }
}
    render(){
        return(
        <>
        <h1>Counter Component</h1>
        <h2>{this.state.c}</h2>
        <button onClick={this.add}>Add</button>
        <button onClick={this.sub}>Sub</button>
        </>
        )
    }
}
export default Counter