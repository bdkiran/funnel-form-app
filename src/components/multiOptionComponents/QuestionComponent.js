import React, { Component } from 'react';
import styles from './Question.module.css'
import buttonStyles from './BackButton.module.css'


export class QuestionComponent extends Component {
    handleSelect = (e) => {
        const name = this.props.componentName;
        this.props.handleOptionSelect(name, e.target.value);
    }

    handleBack = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    render() {
        const howMuchQuestion = this.props.loadedComponent;
        return (
            <div>
                <h2>{howMuchQuestion.question}</h2>
                <div className={styles.funnelButtons}>
                    <ul>
                        {
                        howMuchQuestion.options.map( (t, i) =>
                            <li key={t.id}>
                                <input className={styles.styledCheckbox} type="radio" id={t.id} 
                                name={howMuchQuestion.name} value={t.value} onClick={this.handleSelect}/>
                                    <label htmlFor={t.id}>
                                    <div className={styles.funnelButton}>
                                        <h4>{t.labelValue}</h4>
                                    </div>
                                </label>
                            </li>
                        )
                        }
                    </ul>
                </div>
                {
                    this.props.prevStep !== undefined &&
                    <div>
                        <button className={buttonStyles.backButton} onClick={this.handleBack}>
                            &larr;BACK
                        </button>
                    </div>
                }
                
            </div>
        )
    }
}

export default QuestionComponent;
