import { Component } from "react";


export class Notebook extends Component {
constructor() {
    super();

this.state = {
userInput: "",
userList: []
    }
}

onChangeUser(e) {
this.setState({userInput: e});
}

addButton(textUserList) {
    if(textUserList === '') {
        alert('Please, enter text')
    }
    else {
let listArray = this.state.userList;
listArray.push(textUserList);
this.setState({userList: listArray, userInput: ''})
} }

clickLi(e) {
    const li = e.target;
    li.classList.toggle('styleLi')
}

deleteButton() {
    let listArray = this.state.userList;
    listArray = [];
    this.setState({userList: listArray})
}

submitEnter(e) {
e.preventDefault()
}

render() {
    return (

<div> 
 <form onSubmit={this.submitEnter}>
<div className="conteiner" > 
<h3> What are the plans? </h3> 
</div>
<div className="conteiner" > 
<input type="text" placeholder="What are the plans?" onChange={(e) => {this.onChangeUser(e.target.value)}} value={this.state.userInput}   />
  <button onClick={() => this.addButton(this.state.userInput)} className="buttonAddStyle" >Add </button>
</div>
 
<div className="conteiner" > 
  

   <button onClick={() => this.deleteButton()} className='buttonDeleteStyle' > Delete </button>
 </div>
<div>
<ol> {this.state.userList.map((item, index) =>(
    <li onClick={this.clickLi} key={index} className="styleLiTwo"> {item} </li>
))} 

</ol>

</div>

</form>
</div>
    )
}
}