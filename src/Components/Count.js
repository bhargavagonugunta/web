import React from "react";
import styles from "./productList/ProductLisr.module.css"

class Count extends React.Component{

    constructor(props) {
        super(props);
        this.state ={
            current:props.startFrom,
            datas:'Welcome Bhargava'

        };
        this.hadle= this.hadle.bind(this);
    }

    hadle(){
        console.log(this.props)
    }
    componentDidMount() {
        setInterval(()=>{
            this.setState({current:this.state.current+1});
        },1000);
    }

    render() {
        return(

            <div class = {styles.Count}>
                <h3>Current Count is :{this.state.current}
                </h3>
                <input type="text" value= {this.state.datas}/>
                <button onClick={this.hadle}>Please Click</button>
            </div>

        )
    }


}
export default Count;