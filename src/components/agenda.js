import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index-actions';
import AgendaForm from './agenda-form';


class Agenda extends Component {

  constructor(props) {
    super(props);
    this.state = {
      agenda: {
        tarefas: []
      }
    }
  }

  componentDidMount () {
    this.setState({
      agenda: {
        tarefas: this.props.getTarefas()
      }
    })
  }
  
  componentWillReceiveProps(newProps) {
    this.setState({
      agenda: {tarefas: newProps.tarefas }
    })
  }

  render() {
    const { tarefas } = this.state.agenda;
    return (
      <div>
        <AgendaForm />
        {tarefas.map(r =>
          <p key={r.id}>
          <span>Nome da tarefa: </span>{r.nome}
          <span>horario da tarefa: </span>{r.horario}
            <button onClick={() => { this.props.set_tarefa(r) }}>Alterar</button>
            <button onClick={() => { this.props.delete_tarefa(r.id) }}>Excluir</button>
          </p>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { tarefas: state.agenda.tarefas }
}

export default connect(mapStateToProps, actions)(Agenda);