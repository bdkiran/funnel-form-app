import React, { Component } from 'react'

export class Complete extends Component {
    
    componentDidMount() {
        let payload = this.createPayload();
        this.sendRequestToBackend(payload);
    }

    createPayload = () => {
        const components = this.props.allState;
        let urlEncodedData = "";
        let urlEncodedDataPairs = components.map( (questionObj) => {
            return (encodeURIComponent(questionObj.name) + '=' + encodeURIComponent(questionObj.selected));
        }) 
        urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');
        console.log(urlEncodedData);
        return urlEncodedData;
    }

    sendRequestToBackend = (payload) => {
        // create a new XMLHttpRequest
        let xhr = new XMLHttpRequest();
        let url = 'http://localhost:8080/form';

        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        xhr.onreadystatechange = function () { // Call a function when the state changes.
            if (this.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                console.log(xhr.responseText);
            }
        }

        xhr.send(payload);
    }

    render() {
        return (
            <h1>Congrats!!</h1>
        )
    }
}

export default Complete;
