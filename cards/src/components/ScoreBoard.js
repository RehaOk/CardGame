import React from 'react';
import { connect } from 'react-redux';

class ScoreBoard extends React.Component {

    renderWrapper(){
        if(this.props.card){
            console.log(this.props);
            return (
                <div>
                    <div>Score: {this.props.score.score}</div>
                    <div>Last Card: {this.props.card.title}</div>
                </div>
                );
        }
        return <div></div>;
    }

    render(){
        return <div>{this.renderWrapper()}</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        card: state.selectedCardReducer,
        score: state.scoreReducer
    };
};

export default connect(mapStateToProps)(ScoreBoard);