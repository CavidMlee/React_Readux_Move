import React, { Component } from 'react'
import { Button, Image, Form } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

import InlineError from "./InlineError";

export default class NewMovieForm extends Component {
    state = {
        _id: this.props.movie ? this.props.movie._id : '',
        title: this.props.movie ? this.props.movie.title : '',
        cover: this.props.movie ? this.props.movie.cover : '',
        errors: {},
        redirect:false,
    }

    componentWillReceiveProps(nextProps) {                   //sonuncu propsu yoxlayir//Biz burda sonuncu propsu yoxlayib ordan title ve cover-i gotururuk
        const { movie } = nextProps.newMovies;

        if (movie.title && movie.title !== this.state.title) {
            this.setState({
                title: movie.title,
                cover: movie.cover
            });
        };
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onSubmit = () => {
        const errors = this.validate()
        this.setState({
            errors,
            redirect:true
        });

        const _id = this.state._id || this.props.newMovies.movie._id;  //id-ni aldiq
        
        
        if (Object.keys(errors).length === 0) {
            if(!_id){                                      //eyer id yoxdusa demeli yeni data yadda saxlamaq isteyirik
                this.props.onNewMovieSubmit(this.state);    //eyer id varsa update etmek isteyirik
            }
            else{
                console.log(_id)
                this.props.onUpdateMovieSubmit({...this.state},_id);
            }
            
        }
    }

    validate = () => {
        const errors = {}
        if (!this.state.title) errors.title = "Can't be blank";
        if (!this.state.cover) errors.cover = "Can't be blank";

        return errors;
    }

    render() {
        const { errors } = this.state;

        const form = (
            <Form onSubmit={this.onSubmit} loading={this.props.newMovies.fetching || this.props.newMovies.movie.fetching}>
                <Form.Field error={!!errors.title}>
                    <label>Title</label>
                    {errors.title && <InlineError message={errors.title} />}
                    <input
                        id="title"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        placeholder='Title' />
                </Form.Field>
                <Form.Field error={!!errors.cover}>
                    <label>Cover Url</label>
                    {errors.cover && <InlineError message={errors.cover} />}
                    <input
                        id="cover"
                        name="cover"
                        value={this.state.cover}
                        onChange={this.handleChange}
                        placeholder='Cover' />
                </Form.Field>
                <Image src={this.state.cover} size='small' />
                <div className="clearfix"></div>
                <Button primary type='submit'>Submit</Button>

                {
                    this.props.newMovies.error.response && <h1>error</h1>

                }

            </Form>
        )
        return (
            <div>
                {this.props.newMovies.done && this.state.redirect ? <Redirect to="/movies" /> : form}
            </div>
        )
    }
}
