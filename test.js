
var myBody = document.getElementsByTagName('body')[0];

let myScript1 = document.createElement('script');
myScript1.setAttribute('src', "https://unpkg.com/react@16/umd/react.development.js")
myBody.appendChild(myScript1);

let myScript2 = document.createElement('script');
myScript2.setAttribute('src', 'https://unpkg.com/react-dom@16/umd/react-dom.development.js');
myBody.appendChild(myScript2);

var btn = document.createElement("BUTTON");
btn.setAttribute('id',"myButton");
document.body.appendChild(btn);
btn.style.position="absolute"
btn.style.bottom="0"
btn.style.left="0"


var myBtn = document.createElement("BUTTON");
myBtn.setAttribute('id',"myPhoneButton");
document.body.appendChild(myBtn);
myBtn.style.position="absolute"
myBtn.style.bottom="0"
myBtn.style.left="110px"




const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      buttonText:"",
      phoneNumber:""
   };
  }

  render() {
    console.log("This state", this.state)
    document.getElementById('myButton').innerText = this.state.buttonText
    document.getElementById('myPhoneButton').innerText = this.state.phoneNumber
    fetch('https://codifyinditest.com/script_test/api-tesst/')
    .then(response => response.json())
    .then(data => this.setState({
      buttonText : data['script test'].labels,
      phoneNumber : data['script test'].phone_number
    })
    
    )
  return null;
  }
}


 

const domContainer = document.querySelector('#myButton');
ReactDOM.render(e(LikeButton), domContainer);