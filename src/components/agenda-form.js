import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index-actions';

const default_form = {
    nome: '',
    horario: ''
}

class AgendaForm extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            form: default_form
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps) {
            this.setState({
                form: newProps.form
            })
        }
    }

    onChange(e) {
        let form = this.state.form;
        form[e.target.name] = e.target.value;
        this.setState({ form: form });
    }

    handleSubmit(e) {
        if (this.state.form.id) {
            this.props.update_tarefa(this.state.form.id, this.state.form);
            this.setState({ form: default_form })
        } else {
            this.props.insert_tarefa(this.state.form);
            this.setState({ form: default_form })
        }
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.form.nome} name="nome" placeholder="Digite o nome da tarefa..." onChange={this.onChange} />
                <input type="text" value={this.state.form.horario} name="horario" placeholder="Digite o horario da tarefa..." onChange={this.onChange} />
                <div>
                    <button onClick={this.handleSubmit}>Salvar</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { form: state.agenda.tarefa }
}

export default connect(mapStateToProps, actions)(AgendaForm);