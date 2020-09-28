import React,{Component} from 'react'
import Profile from './profile'
import Skills from './profile/skills'
import Bio from "./profile/bio"
//import MyProps from "./props/index"

class App extends Component{

        //count=10
        state = {
            count : 0
        };

    render(){
        return(
            <div className="App">
                {/* <Profile/>
                <Bio name='Sahadat Hossen' title="Software Engineer"/>
            <div className="Dev">
                <h3>List of Developers:</h3>
                <p>Md Iqram Khan</p>
                <Skills skill1='React' skill2='Vue'skill3='Angular'/>
                <p>Sahadat Hossen</p>
                <Skills skill1='Django' skill2='MongoDB'skill3='Nodejs'/> */}
                {/* <MyProps name="Iqram Khan"/>
                <MyProps name="Akram Khan"/>  */}
            {/* </div> */}

            <h1>Count={this.state.count}</h1>
            <button onClick={()=>
            {
                this.setState({count : this.state.count + 1})
                console.log(this.state.count)
            }}>Increment</button>

            </div>

        )
    }
}

export default App