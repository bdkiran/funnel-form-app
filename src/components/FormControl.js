import React, { Component } from 'react';
import QuestionComponent from './multiOptionComponents/QuestionComponent';
import Complete from './resultComponents/Complete';
import FormComponent from './FormComponent';

class FormControl extends Component {
    state = {
        step: 0,
        howMuchQuestion: {
            selected: "",
            question: "Do you know how much cash your auto accident is worth?",
            name: "howMuch",
            options: [
                {id: "howMuchA1", labelValue: "Somewhat Sure", value: "Somewhat Sure"},
                {id: "howMuchA2", labelValue: "Not Sure", value: "Not Sure"},
                {id: "howMuchA3", labelValue: "No Idea", value: "No Idea"}
            ]
        },
        roleQuestion: {
            selected: "",
            question: "Were you the driver, passenger or a pedestrian?",
            name: "role",
            options: [
                {id: "roleA1", labelValue: "Driver", value: "Driver"},
                {id: "roleA2", labelValue: "Passenger", value: "Passenger"},
                {id: "roleA3", labelValue: "Pedestrian", value: "Pedestrian"}
            ]
        },
        vehicleQuestion: {
            selected: "",
            question: "What kind of vehicle were you in?",
            name: "vehicle",
            options: [
                {id: "vehicleA1", labelValue: "Car", value: "Car"},
                {id: "vehicleA2", labelValue: "Truck", value: "Truck"},
                {id: "vehicleA3", labelValue: "Motorcycle", value: "Motorcycle"},
                {id: "vehicleA4", labelValue: "Bicycle", value: "Bicycle"},
                {id: "vehicleA5", labelValue: "Other", value: "Other"}
            ]
        },
        whenQuestion: {
            selected: "",
            question: "How recent was your accident?",
            name: "when",
            options: [
                {id: "whenA1", labelValue: "1 Year or Less", value: "1 Year or Less"},
                {id: "whenA2", labelValue: "1-2 Years", value: "1-2 Years"},
                {id: "whenA3", labelValue: "2-3 Years", value: "2-3 Years"},
                {id: "whenA4", labelValue: "3 Years or More", value: "3 Years or More"},
            ]
        },

    }

    handleNextStep = () => {
        const step = this.state.step;
        console.log(step)
        this.setState({ step: step + 1 });
    }

    handlePreviousStep = () => {
        const step = this.state.step;
        console.log(step)
        this.setState({ step: step - 1 });
    }

    handleOptionSelect = (componetName, value) => {
        var property = {...this.state[componetName]}
        property.selected = value;
        this.setState({[componetName]: property} , this.handleNextStep);
    }

    render() {
        const { step } = this.state;
        const {howMuchQuestion, roleQuestion, vehicleQuestion, whenQuestion } = this.state;
        const allState = [howMuchQuestion, roleQuestion, vehicleQuestion, whenQuestion ];
        switch (step) {
            case 0:
                return <FormComponent handleSubmit={this.handleNextStep}/>            
            case 1:
                return <QuestionComponent handleOptionSelect={this.handleOptionSelect}
                        loadedComponent={howMuchQuestion} componentName="howMuchQuestion"/>
            case 2:
                return <QuestionComponent handleOptionSelect={this.handleOptionSelect} 
                        prevStep={this.handlePreviousStep} loadedComponent={roleQuestion} componentName="roleQuestion"/>
            case 3:
                return <QuestionComponent handleOptionSelect={this.handleOptionSelect} 
                        prevStep={this.handlePreviousStep} loadedComponent={vehicleQuestion} componentName="vehicleQuestion"/>
            case 4:
                return <QuestionComponent handleOptionSelect={this.handleOptionSelect} 
                        prevStep={this.handlePreviousStep} loadedComponent={whenQuestion} componentName="whenQuestion"/>
            default:
                return <Complete allState={allState}/>
        }

    }
}

export default FormControl;