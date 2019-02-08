import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index-actions';


class Agenda extends Component {

    constructor(props) {
        super(props);
        this.state = {
            agenda: this.props.getTarefas()
        }
    }
  
  render() {
    const { tarefas } = this.props;
    return (
      <div>
          {tarefas.map(r => <p key={r.id}>{r.nome}</p>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return { tarefas: state.agenda.tarefas }
  }
  
export default connect(mapStateToProps,actions)(Agenda);