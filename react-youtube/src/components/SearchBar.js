import React, { Component } from "react";

import { Form, FormGroup, Label, Input } from "reactstrap";

import styled from "styled-compoents";

const ClearBtn = styled.span`
    color: gray;
    font-weight: 900;
    font-size: 24px;
    position: absolute;
    top: 0px;
    right: 10px;
    cursor: pointer;

    :hover {
        color: purple;
    }
`

class SearchBar extends Component {
    state = {
        search: ""
    }


    handleInputChange = (event) => {
        // console.log(event.target);
        const { value } = event.target;
        this.setState({ search: value });
        this.props.searchYouTube(value);

    }



    render() {
        return (
            <Form onSubmit={(event) => event.preventDefault()}>
                <FormGroup style={{ position: "relative" }}>
                    <Label for="search" hidden>Search</Label>
                    <Input type="text" 
                            name="search" 
                             id="search" 
                            placeholder="What are you looking for?"
                            value={this.state.search}
                            onChange={this.handleInputChange}
          
          />
          <ClearBtn onClick={() => this.setState({ search: ""})}>x</ClearBtn>
        </FormGroup>           
            
 </Form >
    )
    }
}

export default SearchBar;