import React, { Component } from 'react'
import './styles/tailwind.css';
import styled from '@emotion/styled';

import { Button, Header, HeaderGroup, HeaderItem, TextInput, SelectInput, SelectOption, Checkbox, RadioButton } from 'windmill-scream';

const IconImage = styled.img`
  filter: saturate(4 invert(4));
`;

export default class App extends Component {
  render () {
    const handleGithub = () => {
      window.open('https://github.com/RichieMillennium/windmill-scream', '_blank');
    };
    return (
      <React.Fragment>
        <Header title={<h1 className="text-2xl font-extrabold">Windmill Scream Demo</h1>}>
          <HeaderGroup floatRight={true}>
            <HeaderItem>
              <Button trim={true} transparent={true} onClick={handleGithub}>
                GitHub
                <svg className="fill-current float-right ml-2"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24">
                  <path
                    d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z"/>
                </svg>
              </Button>
            </HeaderItem>
          </HeaderGroup>
        </Header>
        <div className="container mx-auto mt-4 flex flex-col">
          <div className="md:flex h-12 align-bottom">
            <h2 className="text-xl font-bold">Buttons</h2>
          </div>
          <div className="md:flex h-20">
            <div className="md:w-1/4">
              <Button>Default Button</Button>
            </div>
            <div className="md:w-1/4">
              <Button color="red">Red Button</Button>
            </div>
            <div className="md:w-1/4">
              <Button trim={true} color="green">Slim Green Button</Button>
            </div>
            <div className="md:w-1/4">
              <Button trim={true} color="secondary">Secondary Button</Button>
            </div>
          </div>
          <div className="md:flex h-12">
            <h2 className="text-xl font-bold align-bottom">Inputs</h2>
          </div>
          <div className="md:flex h-20">
            <div className="md:w-1/4">
              <TextInput color="teal" title="Teal Input" name="input1" placeholder="Type here" className="w-10/12 h-12" />
            </div>
            <div className="md:w-1/4">
              <TextInput color="blue" title="Blue Input" name="input2" placeholder="Type something" className="w-10/12 h-12" />
            </div>
            <div className="md:w-1/4">
              <SelectInput color="gray" title="Gray Select" className="w-10/12 h-12">
                <SelectOption />
                <SelectOption>Option 1</SelectOption>
                <SelectOption>Option 2</SelectOption>
                <SelectOption>Option 3</SelectOption>
                <SelectOption>Option 4</SelectOption>
              </SelectInput>
            </div>
            <div className="md:w-1/4">
              <SelectInput color="orange" title="Orange Select" className="w-10/12 h-12">
                <SelectOption>Option A</SelectOption>
                <SelectOption>Option B</SelectOption>
                <SelectOption>Option C</SelectOption>
                <SelectOption>Option D</SelectOption>
              </SelectInput>
            </div>
          </div>
          <div className="md:flex h-12">
            <h2 className="text-xl font-bold">Checks and Radios</h2>
          </div>
          <div className="md:flex h-20">
            <div className="md:w-1/4 ">
              <Checkbox title="Click here" className="w-10/12" />
            </div>
            <div className="md:w-1/4">
              <RadioButton title="Radio 1" name="radioDemo" value="1" className="w-10/12" />
            </div>
            <div className="md:w-1/4">
              <RadioButton title="Radio 2" name="radioDemo" value="2" className="w-10/12" />
            </div>
            <div className="md:w-1/4">
              <RadioButton title="Radio 3" name="radioDemo" value="3" className="w-10/12" />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
