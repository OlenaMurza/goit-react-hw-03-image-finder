import React from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import {Header, SearchForm, Input, ButtonSubmit} from './Searchbar.styled';

export class Searchbar extends React.Component {
    state = {
        query: '',
        page: 1,
    }

    handleChange = e => {
        this.state({ query: e.currentTarget.value.toLowerCase() });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { query } = this.state;
        const { onSubmit } = this.props;
        if (query.trim() === '') {
            toast.error('Please enter a search value');
            return;
        }
        onSubmit(query);
    }

    render() {
        const { handleSubmit, handleChange } = this;
        const { query } = this.state;

        return (
            <Header className="searchbar">
                <SearchForm onSubmit={handleSubmit} className="form">
                    <ButtonSubmit type="submit" className="button">Search</ButtonSubmit>

                    <Input
                        className="input"
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                        onChange={handleChange}
                        value={query}
                    />
                </SearchForm>
            </Header>
        );
    }
}

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };